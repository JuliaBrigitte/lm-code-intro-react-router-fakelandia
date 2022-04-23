import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () =>
  <nav className='nav'>
      <ul>
          <li className="active"><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='misdemeanours'>Misdemeanours</NavLink></li>
          <li><NavLink to='confession'>Confession</NavLink></li>
      </ul>
  </nav>


export default NavBar;