import React from 'react'
import { SocketProvider } from './context/SocketContext';
import HomePage from './pages/HomePage';

export const SmapChatApp = () => {
    return (  
        <>
            <SocketProvider>
                <HomePage />
            </SocketProvider>
        </>
    );
}