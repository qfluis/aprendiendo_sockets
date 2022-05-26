import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "../auth/authContext";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Page404 from "../pages/Page404";

const PrivateRoute = ({children}) => {

    const { user } = useContext(AuthContext);

    return (
        <>
            {user.logged
            ? children
            : <Navigate to="/login" />
            
            }
        </>
    )
}

const PublicRoute = ({children}) => {

    const { user } = useContext(AuthContext);

    return (
        <>
            {!user.logged
            ? children
            : <Navigate to="/" />
            
            }
        </>
    )
}

// TODO: ResgisterPage
export const AppRouter = () => {
    return(

            <div>
                <Routes>
                    <Route path="/login" element={
                        <PublicRoute>
                            <Routes>
                                <Route path="/login" element={ <LoginPage /> } />
                            </Routes>
                        </PublicRoute>
                    } />    
                    
                    <Route path="/*" element={
                        <PrivateRoute>
                            <Routes>
                                <Route path="/" element={ <HomePage /> } />
                            </Routes>
                        </PrivateRoute>
                    }
                    />
                    
                    {/*<Route exact path="/" element={ <HomePage /> } />*/}
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </div>
    );
}