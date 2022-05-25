import React, { useReducer } from 'react';
import { AppRouter } from './components/AppRouter';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { SocketProvider } from './context/SocketContext';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false};
        /* { logged: true,
        email: 'qfluis@gmail.com',
        user: 'qfluis'}  */
}

export const SmapChatApp = () => {
    
    const [ user, dispatch ] = useReducer( authReducer, {}, init );
    
    return (  
        <>  
            <AuthContext.Provider value={{
                    user,
                    dispatch
            }}>
                <NavBar />                
                    <SocketProvider>
                        <AppRouter />
                    </SocketProvider>                      
                <Footer />
            </AuthContext.Provider>  
        </>
    );
}