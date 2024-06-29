import { ReactNode } from 'react';

const AdminLayout = ({ sidebar, children }: { sidebar: ReactNode; children: ReactNode }) => (
  <div className='flex min-h-screen'>
    <aside className='hidden lg:block lg:w-[240px] bg-zinc-900'>{sidebar}</aside>
    <main className='max-w-screen-lg w-full mx-auto'>{children}</main>
  </div>
);

export default AdminLayout;
