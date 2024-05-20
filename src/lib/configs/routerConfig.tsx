/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "src/components/ProtectedRoute.tsx/ProtectedRoute";

import MainLayout from "src/layouts/MainLayout/MainLayout";

import LoadingPage from "src/modules/Loading/LoadingPage";

import { ShoppingPage } from "src/modules/ShoppingCart";

const RootPage = lazy(() => import("src/modules/Root/RootPage"));

const ContactsPage = lazy(() => import("src/modules/Contacts/ContactsPage"));
const AboutPage = lazy(() => import("src/modules/About/AboutPage"));

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <RootPage />
          </Suspense>
        ),
      },
      {
        path: "/shopping-cart",
        element: <ShoppingPage />,
      },
      {
        path: "/contacts",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ContactsPage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <AboutPage />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter([...appRoutes]);
