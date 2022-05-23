import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
    {/*}
    <nav>
        <ul>
            <li>
                <NavLink to="/" >MapChat</NavLink>
            </li>
            <li>
                <NavLink to="login" >Login</NavLink>
            </li>
        </ul>
    </nav>
    */}

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
            <Link to="/" className="nav-link active">Home</Link> |{" "}
            <Link to="/login" className="nav-link" >Login</Link>

          </div>
        </div>
      </div>
    </nav>

    </>
  )
}
