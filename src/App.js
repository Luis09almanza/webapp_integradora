import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { SignUp } from './components/Signup';
import { Users } from './components/Users';


export default function App() {
  return (
    <Router>
      
      <Navbar />


      <div>
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>

        </Routes>
      </div>
    
      <Footer/>
    </Router>
  )
}
