
const subRoutes = [
  {
    path: '/aiCustomer',
    name: '客户表',
    icon: 'home',
    component: './goal/aiCustomer',
    // #ignoreByPermit 📢 access: 'aiCustomer'
  },
  {
    path: '/aiFlower',
    name: '花表',
    icon: 'home',
    component: './goal/aiFlower',
    // #ignoreByPermit 📢 access: 'aiFlower'
  },
  {
    path: '/aiFlowerShop',
    name: '花店表',
    icon: 'home',
    component: './goal/aiFlowerShop',
    // #ignoreByPermit 📢 access: 'aiFlowerShop'
  },
  {
    path: '/aiOrder',
    name: '订单表',
    icon: 'home',
    component: './goal/aiOrder',
    // #ignoreByPermit 📢 access: 'aiOrder'
  },
];
export default subRoutes;
