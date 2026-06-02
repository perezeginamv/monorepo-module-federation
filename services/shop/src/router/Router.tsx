import App from "@/app/App";
import { ShopPage } from "@/pages/shopPage";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserCard } from '@packages/shared/src/components/UserCard'

const routes = [
    {
        path: "/shop",
        element: <App />,
        children: [
            {
                path: '/shop/main',
                element: <Suspense fallback='Loading...'> <ShopPage /></Suspense >
            },
            {
                path: '/shop/second',
                element: <Suspense fallback='Loading...'>
                    <div style={{ color: 'red' }}>
                        <h1>SECOND PAGE</h1>
                        <UserCard username={"FROM SHOP"} />
                    </div>
                </Suspense >
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes