import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">SmapChat</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/*}
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="login">Login</a>
            */}
            <NavLink to="/" activeClassName="active" exact className="nav-link">Home</NavLink> |{" "}
            <NavLink to="/login" activeClassName="active" exact className="nav-link" >Login</NavLink>

          </div>
        </div>
      </div>
    </nav>

    </>
  )
}
