import {
  ShoppingCart,
  Category,
  Detail,
  Home,
  UserInfo,
} from "../../pages/index";
const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    protected: false,
  },
  {
    path: "/cart",
    component: ShoppingCart,
    exact: false,
    protected: false,
  },
  {
    path: "/product",
    component: Detail,
    exact: false,
    protected: false,
  },
  {
    path: "/rooms/:room",
    component: Category,
    exact: false,
    protected: false,
  },
  {
    path: "/products/:product",
    component: Category,
    exact: false,
    protected: false,
  },
  {
    path: "/settings/:tab",
    component: UserInfo,
    exact: false,
    protected: true,
  },
];
export default routes;
