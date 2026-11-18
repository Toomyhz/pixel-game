import { createBrowserRouter } from "react-router";

import { DashboardLayout } from "@/layouts/DashboardLayout";
import { DashboardPage } from "@/pages/DashboardPage";
import { ProductsPage } from "@/pages/ProductsPage";
import { UsersPage } from "@/pages/UsersPage";
export const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/productos",
        element: <ProductsPage />,
      },
      {
        path: "/usuarios",
        element: <UsersPage />,
      },
    ],
  },
]);