import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Products from './Products';
import Product from './Product';
import PublicHeader from '../../components/PublicHeader';

const CodeRoutes = () => {
  return (
    <Fragment>
      <PublicHeader />
      <div className='bg-[#0d0d0d] min-h-[calc(100vh-80px)] text-zinc-200'>
        <Routes>
          <Route path=':token/items' element={<Products />} />
          <Route path=':token/item' element={<Product />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default CodeRoutes;
