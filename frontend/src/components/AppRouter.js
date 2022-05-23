import {
    Routes,
    Route,
} from "react-router-dom"
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Page404 from "../pages/Page404";


// TODO: ResgisterPage
export const AppRouter = () => {
    return(

            <div>
                <Routes>
                    <Route exact path="/" element={ <HomePage /> } />
                    <Route exact path="login" element={ <LoginPage /> } />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </div>
    );
}