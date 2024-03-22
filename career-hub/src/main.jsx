import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJob from './components/Applied Jobs/AppliedJob.jsx';
import Blog from './components/Blog/Blog.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
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
