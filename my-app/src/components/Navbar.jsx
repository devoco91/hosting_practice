import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar(){
return (
<nav className="navbar navbar-expand-lg sticky-top navbar-glass shadow-sm">
<div className="container">
<Link className="navbar-brand fw-bold" to="/">
<i className="fa-solid fa-gem me-2 text-primary"></i>PremiumShop
</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="nav">
<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
<li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/store">Store</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/apply">Apply</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
<li className="nav-item ms-lg-3"><NavLink className="btn btn-sm btn-gradient" to="/register">Register</NavLink></li>
</ul>
</div>
</div>
</nav>
)
}