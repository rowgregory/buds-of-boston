import { ChangeEvent, FC, FormEvent, RefObject } from 'react';
import Typewriter from '../../../components/common/Typewriter';
import Spinner from '../../../components/common/Spinner';

interface LockProps {
  inputRef: RefObject<HTMLInputElement>;
  setCode: (code: string) => void;
  code: string;
  handleVerifyCode: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
  success: boolean;
}

const Lock: FC<LockProps> = ({
  inputRef,
  setCode,
  code,
  handleVerifyCode,
  isLoading,
  success
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col px-7">
        <Typewriter
          sentence="Enter code: "
          speed={40}
          text="text-sm text-zinc-100 font-bold h-5"
        />
        <form
          onSubmit={handleVerifyCode}
          className="flex flex-row items-center gap-3 mt-2"
        >
          <input
            autoComplete="off"
            ref={inputRef}
            name="code"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCode(e.target.value)
            }
            className="input-box text-lime-400 font-semibold text-sm focus:outline-none h-9 w-40 sm:w-48 rounded-sm px-3 bg-zinc-900 placeholder:text-zinc-600"
          />

          {isLoading ? (
            <Spinner fill="fill-lime-400" />
          ) : (
            <button
              type="submit"
              disabled={code === ''}
              className={`text-sm font-bold ${code === '' ? '' : 'cursor-pointer'}`}
            >
              <i
                className={`fa-solid ${success ? 'fa-lock-open' : 'fa-lock'
                  } fa-lg text-zinc-400 w-5 hover:text-zinc-500 duration-200`}
              ></i>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Lock;
