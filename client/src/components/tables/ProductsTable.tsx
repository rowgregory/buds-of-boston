import { useSelector } from 'react-redux';
import { formatDateWithTimezone } from '../../utils/dateFunctions';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';

const ProductsTable = ({
  filteredProducts,
  productToBeEdited,
  productMenuRef,
  setIdAndName,
  openModal,
  setProductToBeEdited,
}: any) => {
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <table className='w-full'>
      <thead className='whitespace-nowrap px-4 pb-4 pt-2'>
        <tr className='bg-zinc-900'>
          <th className='px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none'>
            <div className='text-xs -mx-1.5 -my-1 w-fit px-1.5 py-1 flex flex-nowrap items-center gap-2'>
              Name
            </div>
          </th>
          <th className='px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none'>
            <div className='text-xs flex flex-nowrap items-center gap-2'>Quantity</div>
          </th>
          <th className='px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none'>
            <div className='text-xs flex flex-nowrap items-center gap-2'>Date & Time</div>
          </th>
          <th>
            <div className='flex flex-nowrap items-center gap-2 invisible'>ghosthead</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts?.map((product: any, i: number) => (
          <tr
            className='bg-zinc-800 z-1 h-[3.25rem] group [&_td]:focus-within:bg-zinc-900 [&_td]:hover:bg-zinc-900 relative'
            key={i}
          >
            <td className='px-2'>
              <div className='m-0 w-full p-0 decoration-inherit hover:text-inherit hover:decoration-inherit !flex h-[3.25rem] items-center px-4 whitespace-nowrap'>
                <div className='max-w-[15rem]'>
                  <span className='text-xs font-Matter-Regular truncate'>
                    {product?.productName}
                  </span>
                </div>
              </div>
            </td>
            <td>
              <p className='text-xs font-Matter-Regular items-center px-4 whitespace-nowrap'>
                {product?.quantity}
              </p>
            </td>
            <td>
              <p className='text-xs font-Matter-Regular items-center px-4 whitespace-nowrap'>
                {formatDateWithTimezone(product?.createdAt)}
              </p>
            </td>
            <td>
              <div className=''>
                {productToBeEdited.open && productToBeEdited.product?.id === product?.id && (
                  <div
                    ref={productMenuRef}
                    className='flex flex-col justify-center shadow-lg p-1.5 absolute z-40 w-28 h-fit bg-[#0f1119] -top-[44px] right-28'
                  >
                    <Link
                      to='/admin/product'
                      state={{
                        product: productToBeEdited.product,
                        isEditMode: true,
                      }}
                      className='flex w-full text-xs text-zinc-400 px-2 py-1 hover:no-underline hover:bg-zinc-700 hover:text-zinc-400'
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/code-validated/${token}/item`}
                      state={{
                        product: productToBeEdited.product,
                      }}
                      className='flex w-full text-xs text-zinc-400 px-2 py-1 hover:no-underline hover:bg-zinc-700 hover:text-zinc-400'
                    >
                      View
                    </Link>
                    <button
                      onClick={() => {
                        setIdAndName({ id: product?.id, name: product?.productName });
                        openModal();
                      }}
                      className='flex w-full text-xs text-zinc-400 px-2 py-1 hover:no-underline hover:bg-zinc-700 hover:text-zinc-400'
                    >
                      Delete
                    </button>
                  </div>
                )}
                <div
                  onClick={() => setProductToBeEdited({ open: true, product })}
                  className='m-0 w-full border-0 p-0 items-center px-4 relative flex justify-center'
                >
                  <button className='flex h-7 cursor-pointer items-center justify-center p-2 hover:bg-zinc-950 text-zinc-600'>
                    <i className='fa-solid fa-ellipsis-vertical'></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
