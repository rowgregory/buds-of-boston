const adminSideNavigationLinkData = (params: any) => [
  {
    linkKey: '/admin/dashboard',
    textKey: 'Dashboard',
    icon: 'fa-solid fa-chart-column',
    isActive: params === 'dashboard',
  },
  {
    linkKey: '/admin/products',
    textKey: 'Products',
    icon: 'fa-solid fa-boxes-packing',
    isActive: params === 'products',
  },
  {
    linkKey: '/admin/code',
    textKey: 'Code',
    icon: 'fa-solid fa-code',
    isActive: params === 'code',
  },
];

export default adminSideNavigationLinkData;
