import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SocketProvider } from './context/SocketContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export const SmapChatApp = () => {
    return (  
        <>
            <h2>Ola k ase</h2>
            <Link to="/">HomePage</Link>
            <Link to="/login">LoginPage</Link>
           {/* <SocketProvider> */}
           <BrowserRouter>
                <Routes>
                    <Route path="/" elem={<HomePage />} />
                    <Route path="/login" elem={<LoginPage />} />              
                    
                </Routes>
            </BrowserRouter>
            {/*</SocketProvider>*/}
        </>
    );
}