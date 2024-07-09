import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { KeyboardEvent } from 'react';
import Typewriter from '../../../components/common/Typewriter';
import Spinner from '../../../components/common/Spinner';

const CodeModal = ({
  isOpen,
  onClose,
  isEditMode,
  handleInput,
  inputs,
  handleSubmit,
  isLoading,
  codeUpdated
}: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent className="h-32">
        <ModalBody className=" bg-zinc-900 text-zinc-300 flex flex-col justify-center">
          <Typewriter
            sentence={isEditMode ? 'Update' : 'Enter a code'}
            speed={60}
            text="text-xs"
          />
          <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-1.5">
            <input
              onChange={handleInput}
              name="code"
              type="text"
              aria-label="Enter code"
              className="input-box focus:outline-none bg-zinc-800 text-zinc-300 text-xs px-3 py-2 h-9 w-full"
              value={inputs.code || ''}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                e.key === 'Enter' && handleSubmit(e)
              }
            />
            {isLoading ? (
              <Spinner fill="fill-lime-400" />
            ) : (
              <button type="submit" className="text-sm font-bold">
                <i
                  className={`fa-solid ${codeUpdated ? 'fa-lock-open' : 'fa-lock'
                    } fa-lg text-zinc-400 w-5 hover:text-zinc-500 duration-200`}
                ></i>
              </button>
            )}
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CodeModal;
