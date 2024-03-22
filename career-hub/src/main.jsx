import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJob from './components/Applied Jobs/AppliedJob.jsx';
import Blog from './components/Blog/Blog.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/applied-jobs',
                element: <AppliedJob></AppliedJob>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
