import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
    <footer className="flex flex-wrap flex-col bg-red-400 text-white w-full">
    <div className="inline-flex justify-center m-5">
      <Link
        to="/signup"
        className="bg-cyan-400 px-10 text-center py-2 font-bold rounded-lg text-xl m-2 hover:bg-transparent border-4 border-cyan-400 hover:font-normal shadow-lg transition"
      >
        Create an account
      </Link>
      <Link
        to="/login"
        className="border-4 text-center hover:border-cyan-400 hover:bg-transparent hover:text-white hover:font-normal rounded-lg px-10 py-2 text-xl m-2 bg-white border-white text-cyan-400 font-bold ease-in-out transition shadow-lg h-14"
      >
        Login
      </Link>
    </div>
    <div className="inline-flex justify-center">
      <Link
        to="/about"
        className="m-2 hover:text-cyan-400"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="m-2 hover:text-cyan-400"
      >
        Contact us
      </Link>
    </div>
    <div className="inline-flex justify-center mb-10">
      <p>Metal Heroes - 2022</p>
    </div>
  </footer>
  
)