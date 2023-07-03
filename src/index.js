import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Root from './components/Root/Root.jsx';
import CategoryPage from './components/CategoryPage/CategoryPage.jsx';
import SubCategoryPage from './components/SubCategoryPage/SubCategoryPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <CategoryPage/>,
      },
      {
        path: "categories/:categoryId",
        element: <SubCategoryPage/>,
      },
      // {
      //   path: "categories/:subCategoryId",
      //   element: <ItemPage/>,
      // }
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
