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
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import JobDetails from "./components/Job Details/JobDetails.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: () => fetch('data/jobs.json'),
                element: <AppliedJob></AppliedJob>,
            },
            {
              path: '/jobs/:id',
              loader: () => fetch('data/jobs.json'),
              element: <JobDetails></JobDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },

        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
