import { Fragment, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import extractAndDecodeJWT from '../../utils/extractAndDecodeJWT';
import { useGetProductsQuery } from '../../services/productApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Spinner from '../../components/common/Spinner';
import { Image } from '@chakra-ui/react';

const Products = () => {
  const { token } = useParams() as { token: string };
  const navigate = useNavigate();

  const { isLoading } = useGetProductsQuery();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    const tokenIsValid = extractAndDecodeJWT(token);

    if (!tokenIsValid) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <Fragment>
      <div className='max-w-[1400px] mx-auto pt-16'>
        {isLoading ? (
          <div className='flex justify-center'>
            <Spinner fill='fill-lime-500' wAndH='w-10 h-10' />
          </div>
        ) : (
          <div className='grid grid-cols-12 gap-6 px-3 lg:px-6'>
            {products?.map((obj: any, i: number) => (
              <Link
                to={`/code-validated/${token}/item`}
                state={{ product: obj }}
                key={i}
                className='rounded-lg col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 bg-[#181818]'
              >
                <Image
                  loading='lazy'
                  src={obj.image}
                  alt={`product${i}`}
                  className='bg-zinc-950 w-full h-48 object-contain rounded-tl-lg rounded-tr-lg p-2'
                />
                <div className='p-4'>
                  <p className='text-sm font-semibold mb-2'>{obj?.productName}</p>
                  <p className='text-sm text-zinc-400 text-ellipsis overflow-hidden'>
                    {obj?.description?.length > 40
                      ? obj?.description?.substring(0, 40) + '...'
                      : obj?.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <p className='max-w-[1400px] mx-auto text-sm text-zinc-600 px-3 lg:px-6 mt-48 pb-10'>
        This website is intended for demonstration purposes only. All content, including but not
        limited to text, images, and functionalities, is simulated and does not represent real
        products, services, or data. Any resemblance to actual names, brands, products, or
        services is purely coincidental.
      </p>
    </Fragment>
  );
};

export default Products;
