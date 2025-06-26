import { createBrowserRouter } from "react-router";
import PageLoyout from "./layouts/PageLoyout";
import Home from "./pages/Home";
import Cart from "./widjet/Cart";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Product from "./pages/Product";


export const routes = createBrowserRouter([
  {
    Component: PageLoyout,
    children: [
      {
        path: "/",
        Component: Home
      },
      {
        path: "/cart",
        Component: Cart
      },
      {
        path: "/Login",
        Component: Login
      },
      {
        path: "category/:categorySlug",
        Component: Category
      },
      {
        path: "product/:productSlug",
        Component: Product
      }

    ]
  }
])