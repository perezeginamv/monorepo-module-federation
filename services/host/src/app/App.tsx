import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { shopRoutes } from '@packages/shared/src/routes/shop'
import { adminRoutes } from '@packages/shared/src/routes/admin'

const App = () => {
    return (
        <div data-testid={'App.DataTestId'}>
            <h1>PAGE</h1>
            <Link to={adminRoutes.about}>ABOUT</Link>
            <br />
            <Link to={shopRoutes.main}>SHOP MAIN</Link>
            <Outlet />
        </div >
    );
};

export default App;