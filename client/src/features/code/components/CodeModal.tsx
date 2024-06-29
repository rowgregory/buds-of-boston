import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import Typewriter from '../../../components/common/Typewriter';
import { KeyboardEvent } from 'react';

const CodeModal = ({ isOpen, onClose, isEditMode, handleInput, inputs, handleSubmit }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent className='h-32'>
        <ModalBody className=' bg-zinc-900 text-zinc-300 flex flex-col justify-center'>
          <Typewriter
            sentence={isEditMode ? 'Update' : 'Enter a code'}
            speed={60}
            text='text-xs'
          />
          <div className='flex items-center gap-2 mt-1.5'>
            <input
              onChange={handleInput}
              name='code'
              type='text'
              aria-label='Enter code'
              className='input-box focus:outline-none bg-zinc-800 text-zinc-300 text-xs px-3 py-2 h-9 w-full'
              value={inputs.code || ''}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                e.key === 'Enter' && handleSubmit(e)
              }
            />
            <i
              onClick={handleSubmit}
              className={`cursor-pointer text-sm text-lime-400 hover:text-lime-500 duration-300 w-fit px-3 py-2 fa-solid ${isEditMode ? 'fa-pen-to-square' : 'fa-code'
                }`}
            ></i>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CodeModal;
