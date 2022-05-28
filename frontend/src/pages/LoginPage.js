import { useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../auth/authContext";
import { types } from '../types/types';

function LoginPage() {

    const email = useRef();
    const pass = useRef();
    const feedback = useRef();
    const authContext = useContext(AuthContext);
    const {dispatch} = authContext;
    const navigate = useNavigate();

    const submitLogin = async (event) => {
        event.preventDefault();
        feedback.current.innerHTML = "";

        console.log(email.current.value, pass.current.value);
        try {
            const response = await fetch('http://localhost:3333/auth/login', {
            method: 'POST',
            body: JSON.stringify({email: email.current.value, pass: pass.current.value}),
            headers:{
                'Content-Type': 'application/json'
              }
            });
            const data = await response.json();
            
            if(!response.ok) {
                feedback.current.innerHTML = "<p>Error en el login:</p> <ul>";
                for (let error of data.errors) {
                    feedback.current.innerHTML += '<li>'+error.msg+'</li>';
                }
                feedback.current.innerHTML += '</ul>';  
                return;              
            }

            dispatch({
                type: types.login,
                payload: {
                    token: data.token,
                    email: data.email,
                    nickName: data.nickName
                }
            });

            navigate("/");
            
            //console.log('token', data.token);
        } catch (err) {
            feedback.current.innerHTML = "Email y/o contraseña incorrectos";
        }
        
    }


    return (
        <div className="container">
            <h3>Login</h3>
            <form onSubmit={(event) => submitLogin(event)}>
                <input ref={email} type="email" name="email" className="form-control" />
                <input ref={pass} type="password" name="pass" className="form-control" />
                <p ref={feedback} className="warning"></p>
                <input type="submit" className="btn btn-success" />                
            </form>
                
        </div>        
    )

}

export default LoginPage;