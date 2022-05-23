import React from 'react'
import { AppRouter } from './components/AppRouter';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { SocketProvider } from './context/SocketContext';

export const SmapChatApp = () => {
    return (  
        <>  
            <NavBar />
            <SocketProvider> 
                <AppRouter />
            </SocketProvider>            
            <Footer />
        </>
    );
}