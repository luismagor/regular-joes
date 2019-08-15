import React, { useState } from "react"
import { Link } from "gatsby"
import { FaCartArrowDown } from "react-icons/fa"
import Logo from "./Logo"

const links = [
  {
    id: 1,
    path: "/",
    text: "home",
  },
  {
    id: 2,
    path: "/about",
    text: "about",
  },
]

const Navbar = () => {
  const [state, setState] = useState({
    navbarOpen: false,
    css: "collapse navbar-collapse",
  })

  const navbarHandler = () => {
    setState(oldState =>
      oldState.navbarOpen
        ? { navbarOpen: false, css: "collapse navbar-collapse" }
        : { navbarOpen: true, css: "collapse navbar-collapse show" }
    )
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <Logo />
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={state.css}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => (
            <li key={link.id} className="nav-item">
              <Link className="nav-link text-capitalize" to={link.path}>
                {link.text}
              </Link>
            </li>
          ))}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
