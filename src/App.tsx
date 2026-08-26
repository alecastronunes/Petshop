import { Home } from "./pages/home";
import { Product } from "./pages/product";
import { Cart } from "./pages/cart";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export { router };
