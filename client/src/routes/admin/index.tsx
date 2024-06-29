import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Products from './Products';
import ProductEditCreate from './ProductEditCreate';
import Code from './Code';
import AdminSideNavigation from '../../features/dashboard/components/AdminSideNavigation';
import AdminLayout from '../../components/layouts/AdminLayout';
import { useState } from 'react';
import AdminMobileNavigation from '../../features/dashboard/components/AdminMobileNavigation';

const AdminRoutes = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const close = () => setToggleMobileMenu(false);
  return (
    <AdminLayout sidebar={<AdminSideNavigation />}>
      <i
        onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
        className={`block lg:hidden fa-solid fa-bars text-lime-500 col-span-2 py-2 pl-2 pr-3 w-fit duration-200 hover:text-lime-400 absolute top-2 right-2 cursor-pointer z-20`}
      ></i>
      <AdminMobileNavigation toggleMobileMenu={toggleMobileMenu} close={close} />
      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='products' element={<Products />} />
        <Route path='product' element={<ProductEditCreate />} />
        <Route path='code' element={<Code />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
