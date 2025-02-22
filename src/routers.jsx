import { createBrowserRouter } from "react-router-dom";
import UiLayout from "./components/layout/UiLayout";
import HomePage from "./pages/ui/home";
import BlogPage from "./pages/ui/blog";
import BlogDetailsPage from "./pages/ui/blog-detail";
import ShopPage from "./pages/ui/shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UiLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetailsPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
]);
