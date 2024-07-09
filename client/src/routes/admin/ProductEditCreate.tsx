import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateProductMutation, useUpdateProductMutation } from '../../services/productApi';
import { useAppDispatch } from '../../store';
import { setProgress, toggleProgressBar } from '../../features/progress-bar/progressBarSlice';
import { uploadFileToFirebase } from '../../utils/firebase';
import useProductForm from '../../features/product/hooks/useProductForm';
import ProductEditCreateForm from '../../features/product/components/ProductEditCreateForm';
import useSoundEffect from '../../utils/useSoundEffect';
import { AscendMusicalMallet2, Error } from '../../assets/sound-effects';
import { useState } from 'react';

const ProductEditCreate = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [uploadingToFirebase, setUploadingToFireBase] = useState(false);
  const { state } = useLocation();
  const product = state?.product;
  const isEditMode = state?.isEditMode;
  const { handleInput, inputs, setInputs } = useProductForm(product);
  const [createProduct, { isLoading: loadingCreate }] = useCreateProductMutation();
  const [updateProduct, { isLoading: loadingUpdate }] = useUpdateProductMutation();
  const soundEffect = useSoundEffect(AscendMusicalMallet2);
  const errorSoundEffect = useSoundEffect(Error);

  const handleErrors = (err: any) => {
    errorSoundEffect?.play()
    dispatch(setProgress(0));
    dispatch(toggleProgressBar(false));
    console.error(err);
  };

  const handleSuccess = () => {
    dispatch(setProgress(85));
    soundEffect?.play();
    dispatch(setProgress(100));
    setTimeout(() => {
      dispatch(setProgress(0));
      dispatch(toggleProgressBar(false));
      navigate('/admin/products');
    }, 250);
  };

  const handleProductUpdate = async () => {
    dispatch(setProgress(15));
    await updateProduct({ ...inputs, id: product.id })
      .unwrap()
      .then(handleSuccess)
      .catch(handleErrors);
  };

  const handleProductCreate = async () => {
    dispatch(setProgress(15));
    await createProduct(inputs)
      .unwrap()
      .then(handleSuccess)
      .catch(handleErrors);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(toggleProgressBar(true));
    dispatch(setProgress(5));
    if (Boolean(isEditMode)) {
      handleProductUpdate();
    } else {
      handleProductCreate();
    }
  };

  const editPhotoHandler = async (e: any) => {
    setUploadingToFireBase(true)
    const imgData: any = await uploadFileToFirebase(e.target.files[0]);
    setUploadingToFireBase(false)
    setInputs((prev: any) => ({
      ...prev,
      image: imgData?.url,
    }));
    e.target.value = '';
  };

  return (
    <div className='flex flex-col gap-y-8 py-20 w-full lg:max-w-screen-md mx-auto px-3 md:px-6'>
      <Link
        to='/admin/products'
        className='w-fit border border-zinc-900 bg-zinc-900 rounded-md  px-3.5 py-1.5 flex items-center hover:no-underline group hover:bg-zinc-800 duration-300'
      >
        <i className='fas fa-chevron-left fa-xs mr-2'></i>
        <p className='font-Matter-Regular text-sm mt-0.5'>Back to products</p>
      </Link>
      <ProductEditCreateForm
        editPhotoHandler={editPhotoHandler}
        inputs={inputs}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        isEditMode={isEditMode}
        loadingCreate={loadingCreate}
        loadingUpdate={loadingUpdate}
        uploadingToFirebase={uploadingToFirebase}
      />
    </div>
  );
};

export default ProductEditCreate;
