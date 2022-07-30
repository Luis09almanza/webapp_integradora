import React from 'react';
import { Link } from 'react-router-dom';
import testLogo from '../img/test.svg'

export const Navbar = () => (
    <header className="flex flex-wrap flex-row justify-center bg-red-400 text-white sticky top-0">
    <div className="basis-1/2 pt-3 pb-3">
      <img
        src={testLogo}
        alt="Logotipo"
        className="md:w-24 md:h-24 md:inline-flex hidden"
      />
      <Link className="text-2xl font-bold inline-flex ml-2 " to="/">Metal Heroes</Link>
    </div>
    <div className="flex-initial flex items-center justify-center">
        <Link
            to="/"
            className="m-2 hover:text-cyan-400"
        >
        Home
      </Link>
      <Link
        to="/about"
        className="m-2 hover:text-cyan-400"
      >
        About us
      </Link>
      <Link
        to="/contact"
        className="m-2 hover:text-cyan-400"
      >
        Contact
      </Link>
    </div>
  </header>
)