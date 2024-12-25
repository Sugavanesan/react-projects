import React, { FC, PropsWithChildren } from 'react';
import AppRoute from '../../routers/navigators/AppRoute';
import Header from './Header';
import AppNavbar from '../../routers/navigators/AppNavbar';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <BrowserRouter>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <AppNavbar />
                {children}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default AppLayout;
