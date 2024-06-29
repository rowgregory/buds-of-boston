import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateProductMutation, useUpdateProductMutation } from '../../services/productApi';
import { useAppDispatch } from '../../store';
import { setProgress, toggleProgressBar } from '../../features/progress-bar/progressBarSlice';
import UIFx from 'uifx';
import productUpdated from '../../assets/sound-effects/product-updated.mp3';
import { uploadFileToFirebase } from '../../utils/firebase';
import useProductForm from '../../features/product/hooks/useProductForm';
import ProductEditCreateForm from '../../features/product/components/ProductEditCreateForm';

const ProductEditCreate = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product;
  const isEditMode = state?.isEditMode;
  const updated = new UIFx(productUpdated);
  const { handleInput, inputs, setInputs } = useProductForm(product);
  const [createProduct, { isLoading: loadingCreate }] = useCreateProductMutation();
  const [updateProduct, { isLoading: loadingUpdate }] = useUpdateProductMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isEditMode) {
      dispatch(setProgress(0));
      await updateProduct({ ...inputs, id: product?.id })
        .unwrap()
        .then(() => {
          dispatch(setProgress(100));
          updated.play();
          dispatch(toggleProgressBar(false));
          navigate('/admin/products');
        })
        .catch((err: any) => {
          dispatch(setProgress(0));
          dispatch(toggleProgressBar(false));
          console.error(err);
        });
    } else {
      await createProduct(inputs)
        .unwrap()
        .then(() => {
          dispatch(setProgress(100));
          updated.play();
          dispatch(toggleProgressBar(false));
          navigate('/admin/products');
        })
        .catch((err: any) => {
          dispatch(setProgress(0));
          dispatch(toggleProgressBar(false));
          console.error(err);
        });
    }
  };

  const editPhotoHandler = async (e: any) => {
    const imgData: any = await uploadFileToFirebase(e.target.files[0]);
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
      />
    </div>
  );
};

export default ProductEditCreate;
