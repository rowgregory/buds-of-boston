import { Fragment, useCallback, useRef, useState } from 'react';
import MagnifyingGlass from '../../components/svg/MagnifyingGlass';
import { useDeleteProductMutation, useGetProductsQuery } from '../../services/productApi';
import { Link } from 'react-router-dom';
import useOutsideDetect from '../../utils/useOutsideDetect';
import DeleteModal, { useDeleteModal } from '../../components/common/DeleteModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductsTable from '../../components/tables/ProductsTable';

const Products = () => {
  const [text, setText] = useState('');
  const [idAndName, setIdAndName] = useState({ id: '', name: '' });
  const products = useSelector((state: RootState) => state.product.products)
  const noProducts = products?.length === 0;
  const [productToBeEdited, setProductToBeEdited] = useState({
    open: false,
    product: { id: null, productName: null },
  });
  const productMenuRef = useRef(null) as any;
  const { openModal, show, closeModal } = useDeleteModal();

  useGetProductsQuery();

  const [deleteProduct, { isLoading: loadingDelete }] = useDeleteProductMutation();

  const filteredProducts = products?.filter((product: any) =>
    product?.productName.toLowerCase().includes(text.toLowerCase())
  );

  const closeActionMenu = useCallback(() => {
    setProductToBeEdited({ open: false, product: { id: null, productName: null } });
  }, []);

  useOutsideDetect(productMenuRef, closeActionMenu);

  return (
    <Fragment>
      <DeleteModal
        idAndName={idAndName}
        deleteDocument={deleteProduct}
        loading={loadingDelete}
        hook={{ openModal, show, closeModal }}
      />
      <div className='min-h-screen py-12 md:pt-16 px-[10px] sm:px-[16px] md:px-8'>
        <div className='max-w-screen-lg w-full mx-auto'>
          <div className='font-Matter-Medium text-xl mb-3.5'>Products</div>
          <div className='flex justify-between'>
            <div className='flex items-center font-Matter-Light border border-zinc-800 py-2 px-[16px] '>
              <MagnifyingGlass />
              <input
                onChange={(e: any) => setText(e.target.value)}
                className='w-full h-full focus:outline-0 ml-2 bg-transparent text-xs'
                placeholder='Search'
              />
            </div>
            <Link
              to='/admin/product'
              className='whitespace-nowrap w-fit px-4 duration-200 hover:no-underline text-center flex justify-center items-center font-Matter-Medium bg-lime-600 text-xs text-white py-2 hover:bg-lime-500'
              state={{ isEditMode: false }}
            >
              Add product
            </Link>
          </div>
          <div className='bg-zinc-900 w-full mt-3'>
            {noProducts ? (
              <div className='flex flex-col justify-center max-w-48 w-full items-center mx-auto  py-10'>
                <div className=' bg-zinc-800 h-12 w-12 flex justify-center items-center'>
                  <MagnifyingGlass />
                </div>
                <div className='text-xs my-2'>No products</div>
              </div>
            ) : (
              <ProductsTable
                filteredProducts={filteredProducts}
                productToBeEdited={productToBeEdited}
                productMenuRef={productMenuRef}
                setIdAndName={setIdAndName}
                openModal={openModal}
                setProductToBeEdited={setProductToBeEdited}
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
