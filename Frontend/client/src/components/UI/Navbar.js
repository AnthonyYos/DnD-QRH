import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark mb-3'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Home
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ms-auto'>
            <Link className='nav-link' to='/create/players'>
              Add Player
            </Link>
            <Link className='nav-link' to='/players'>
              Players
            </Link>
            {/* <Link className='nav-link' to='/parties/players'>
              Player Parties
            </Link> */}
            <Link className='nav-link' to='/create/enemies'>
              Add Enemy
            </Link>
            <Link className='nav-link' to='/enemies'>
              Enemies
            </Link>
            {/* <Link className='nav-link' to='/parties/enemies'>
              Enemy Parties
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
