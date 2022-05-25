import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types'

export const NavBar = () => {

  const authContext = useContext(AuthContext);
  console.log(authContext)
  const {user, dispatch} = authContext;
  const navigate = useNavigate();

  const logout = () => {
    dispatch({type:types.logout});
    
    navigate("/login");

  }


  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">SmapChat</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav col">
            <NavLink to="/" activeClassName="active" exact className="nav-link mt-2">Home</NavLink>
            
            {
              (user.email)
              ?<span className="nav-link ms-sm-auto">{ user.email } <button onClick={logout} className='btn btn-danger'>Logout</button></span>
              :<span className="nav-link ms-sm-auto"><NavLink to="/login" activeClassName="active" exact className="btn btn-success" >Login</NavLink></span>
              
            }
            

          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
