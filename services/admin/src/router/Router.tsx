import App from "@/app/App";
import { AboutPage } from "@/pages/aboutPage";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: '/admin/about',
                element: <Suspense fallback='Loading...'> <AboutPage /></Suspense >
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes
