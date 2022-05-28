import React, { useEffect, useReducer } from 'react';
import { AppRouter } from './components/AppRouter';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false};
        /* { logged: true,
        email: 'qfluis@gmail.com',
        nickName: 'qfluis'}  */
}

export const SmapChatApp = () => {
    
    const [ user, dispatch ] = useReducer( authReducer, {}, init );
    useEffect(()=>{
        if (!user) return;
        localStorage.setItem('user', JSON.stringify(user));
    },[user])
    
    return (  
        <>  
            <AuthContext.Provider value={{
                    user,
                    dispatch
            }}>
                <NavBar />
                <AppRouter />
                <Footer />
            </AuthContext.Provider>  
        </>
    );
}