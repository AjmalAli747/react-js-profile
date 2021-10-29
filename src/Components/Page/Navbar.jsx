import React from 'react';
import { Link } from 'react-router-dom';
import "../Css/Navbar.css";

const Navbar = () => {
    return (
        <>
          <header>
              <nav>
                  <ul>
                      <li><Link  to="/">About</Link></li>
                      <li><Link to="/skill">Skill</Link></li>
                      <li><Link to="/project">Projects</Link></li>
                      <li className="Mav"><Link to="/contact">Contact</Link></li>
                  </ul>
              </nav>
          </header>
        </>
    )
}

export default Navbar;
