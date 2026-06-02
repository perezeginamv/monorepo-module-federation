import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserCard } from '@packages/shared/src/components/UserCard'

const App = () => {
    return (
        <div data-testid={'App.DataTestId'}>
            <h1>ADMIN MODULE FEDERATION</h1>
            <UserCard username={"FROM ADMIN"} />
            <Outlet />
        </div >
    );
};

export default App;