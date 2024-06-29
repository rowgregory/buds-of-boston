import { FormEvent, Fragment, MouseEvent, useState } from 'react';
import {
  useCreateCodeMutation,
  useGetCodeQuery,
  useUpdateCodeMutation,
} from '../../services/codeApi';
import { useDisclosure } from '@chakra-ui/react';
import Typewriter from '../../components/common/Typewriter';
import Spinner from '../../components/common/Spinner';
import { setProgress, toggleProgressBar } from '../../features/progress-bar/progressBarSlice';
import { RootState, useAppDispatch } from '../../store';
import UIFx from 'uifx';
import cartoonBlinkFast from '../../assets/sound-effects/cartoon-blink-fast.mp3';
import cartoonTipToes from '../../assets/sound-effects/ascent-cartoon-top-toes.mp3';
import useCodeForm from '../../features/code/hooks/useCodeForm';
import CodeModal from '../../features/code/components/CodeModal';
import { useSelector } from 'react-redux';

const Code = () => {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const blinkFast = new UIFx(cartoonBlinkFast);
  const tipToes = new UIFx(cartoonTipToes);
  const [createCode] = useCreateCodeMutation();
  const [updateCode] = useUpdateCodeMutation();
  const { isLoading } = useGetCodeQuery();
  const code = useSelector((state: RootState) => state.code);
  const isEditMode = !!code?.code;

  const { handleInput, inputs } = useCodeForm(code);
  const [reveal, setReveal] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    dispatch(setProgress(0));
    if (isEditMode) {
      await updateCode(inputs)
        .unwrap()
        .then(() => {
          dispatch(setProgress(100));
          blinkFast.play();
          dispatch(toggleProgressBar(false));
          onClose();
          setReveal(true);
        })
        .catch((err: any) => {
          dispatch(setProgress(0));
          dispatch(toggleProgressBar(false));
          console.error(err);
        });
    } else {
      await createCode(inputs)
        .unwrap()
        .then(() => {
          dispatch(setProgress(100));
          tipToes.play();
          dispatch(toggleProgressBar(false));
          onClose();
          setReveal(true);
        })
        .catch((err: any) => {
          dispatch(setProgress(0));
          dispatch(toggleProgressBar(false));
          console.error(err);
        });
    }
  };

  return (
    <Fragment>
      <CodeModal
        isOpen={isOpen}
        onClose={onClose}
        isEditMode={isEditMode}
        handleInput={handleInput}
        inputs={inputs}
        handleSubmit={handleSubmit}
      />
      <div className='min-h-screen pt-12 md:pt-16 px-[10px] sm:px-[16px] md:px-8 pb-3'>
        <div className='max-w-screen-lg w-full mx-auto'>
          <div className='font-Matter-Medium text-xl mb-3.5'>Code</div>
          <div
            onClick={() => {
              onOpen();
              setReveal(false);
            }}
            className='w-fit min-w-40 h-40 border-2 border-dashed border-zinc-700 flex flex-col items-center justify-center text-center group hover:bg-[#121214] duration-200 cursor-pointer px-4'
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <Fragment>
                <Typewriter
                  sentence={isEditMode ? 'Update' : 'Create'}
                  speed={50}
                  text='text-xs'
                />
                {isEditMode ? (
                  <p
                    onClick={(e: MouseEvent<HTMLParagraphElement>) => {
                      e.stopPropagation();
                      setReveal(!reveal);
                    }}
                    className='relative z-10 text-sm text-lime-400 mt-2 font-bold hover:bg-zinc-950 hover:rounded-md p-1 duration-200'
                  >
                    {reveal ? inputs.code : '****'}
                  </p>
                ) : (
                  <i className='mt-2 fa-code text-lime-400 text-sm fa-solid'></i>
                )}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Code;
