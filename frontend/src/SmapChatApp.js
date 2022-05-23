import React from 'react'
import { AppRouter } from './components/AppRouter';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { SocketProvider } from './context/SocketContext';
import { AuthContext } from './auth/authContext';


export const SmapChatApp = () => {
    return (  
        <>  
            <NavBar />
                <AuthContext.Provider>
                <SocketProvider>
                    <AppRouter />
                </SocketProvider>
                </AuthContext.Provider>        
            <Footer />
        </>
    );
}