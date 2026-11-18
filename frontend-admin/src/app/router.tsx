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
        path: "/usuarios",
        element: <UsersPage />,
      },
      {
        path: "/roles",
        element: <UsersPage />,
      },
      {
        path: "/permisos",
        element: <UsersPage />,
      },
      {
        path: "/productos",
        element: <ProductsPage />,
      },
      {
        path: "/tipo-productos",
        element: <UsersPage />,
      },
      {
        path: "/categorias",
        element: <UsersPage />,
      },
      {
        path: "/generos",
        element: <UsersPage />,
      },
      
    ],
  },
]);