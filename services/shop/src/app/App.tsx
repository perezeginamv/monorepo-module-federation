import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div >
            <h1>SHOP MODULE FEDERATION</h1>
            <Outlet />
        </div >
    );
};

export default App;