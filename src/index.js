import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Root from './components/Root/Root.jsx';
import Category from './components/Category/Category.jsx';
import SubCategory from './components/SubCategory/SubCategory.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Category/>,
      },
      {
        path: "categories/:categoryId",
        element: <SubCategory/>,
      }
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
