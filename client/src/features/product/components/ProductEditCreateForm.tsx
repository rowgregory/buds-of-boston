import { Fragment } from 'react';
import Spinner from '../../../components/common/Spinner';

const ProductEditCreateForm = ({
  editPhotoHandler,
  inputs,
  handleInput,
  handleSubmit,
  isEditMode,
  loadingCreate,
  loadingUpdate,
  uploadingToFirebase,
}: any) => {
  return (
    <form className='flex flex-col gap-y-4 border-[1px] border-zinc-800 rounded-lg py-12 px-8 bg-[#141418]'>
      <div className='grid grid-cols-12 gap-10'>
        <div className='col-span-12 md:col-span-5'>Upload an image of your product</div>
        <div className='col-span-12 md:col-span-7 flex justify-center py-4 mx-auto w-full bg-zinc-950 cursor-pointer'>
          {uploadingToFirebase ? (
            <Spinner fill='fill-lime-400' />
          ) : (
            <Fragment>
              <input
                id='image-file'
                type='file'
                onChange={editPhotoHandler}
                className='hidden'
                name='image'
              />
              <label htmlFor='image-file' className='rounded-md cursor-pointer'>
                {inputs.image ? (
                  <img
                    src={inputs.image}
                    alt='Dreambudz'
                    className='object-cover h-40 w-40 bg-zinc-950 rounded-md'
                  />
                ) : (
                  <div className='flex flex-col justify-center items-center'>
                    <div className='h-12 w-12 flex items-center justify-center rounded-full bg-gray-800 mb-1'>
                      <i className='fa-solid fa-cloud-arrow-up fa-xl mb-2 bg-gray-800 rounded-full flex justify-center items-center h-12 w-12 text-gray-200'></i>
                    </div>
                    <p className='font-Matter-Regular underline text-gray-500'>
                      Click to add photo
                    </p>
                  </div>
                )}
              </label>
            </Fragment>
          )}
        </div>
      </div>
      <div className='h-[1px] w-full bg-zinc-800 my-12'></div>
      <div className='grid grid-cols-12 gap-10'>
        <div className='col-span-12 md:col-span-5'>Product details</div>
        <div className='col-span-12 md:col-span-7 grid gap-6'>
          <div className='flex flex-col'>
            <label htmlFor='name' className='text-xs text-zinc-300 mb-1'>
              Product name
            </label>
            <input
              type='text'
              name='productName'
              onChange={handleInput}
              value={inputs.productName || ''}
              className='border-zinc-700 border-[1px] px-3 text-xs text-white bg-transparent h-10 focus:outline-none input-box'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='quantity' className='text-xs text-zinc-300 mb-1'>
              Quantity
            </label>
            <input
              type='number'
              name='quantity'
              onChange={handleInput}
              value={inputs.quantity || ''}
              className='border-zinc-700 border-[1px] px-3 text-white bg-transparent h-10 focus:outline-none text-xs input-box'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='description' className='text-xs text-zinc-300 mb-1'>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              rows={5}
              value={inputs.description || ''}
              onChange={handleInput}
              aria-label='Enter description'
              className='border-zinc-700 border-[1px] p-3 text-white bg-transparent focus:outline-none text-xs input-box'
            ></textarea>
          </div>
        </div>
      </div>
      <div className='h-[1px] w-full bg-zinc-800 my-12'></div>
      <button
        onClick={handleSubmit}
        className='mt-5 cursor-pointer text-sm bg-lime-600 font-bold text-white w-fit px-3 py-2 hover:bg-lime-500 duration-200 flex self-end items-center'
      >
        {loadingCreate || (loadingUpdate && <Spinner fill='fill-white' />)}
        {isEditMode
          ? `Updat${loadingUpdate ? 'ing...' : 'e'}`
          : `Creat${loadingCreate ? 'ing...' : 'e'}`}
      </button>
    </form>
  );
};

export default ProductEditCreateForm;
