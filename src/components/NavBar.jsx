import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className='navbar'>
        <ul className='navbar__ul'>
          <Link className='navbar__li' to='/'>
            <li>Home</li>
          </Link>
          <Link className='navbar__li' to='temperature'>
            <li>Temperature</li>
          </Link>
          <Link className='navbar__li' to='customize-image'>
            <li>Customize image</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
