import React,{useEffect} from 'react';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const Users = () =>{

  console.log('id: '+ cookie.get('_id'));
  console.log('name: '+cookie.get('name'));
  console.log('last name: '+cookie.get('last_name'));
  console.log('email: '+cookie.get('email'));

  const cerrarSesion=()=>{
    cookie.remove('_id', {path: "/"});
    cookie.remove('name', {path: "/"});
    cookie.remove('last_name', {path: "/"});
    cookie.remove('email', {path: "/"});
    window.location.href='/';
  }

  
  useEffect(()=>{
    if(!cookie.get('name')){
      window.location.href="/signup";
    }
  });

  return(
    <div>
      <h1>Holauwu</h1>
      <button 
        className="border-4 text-center hover:border-cyan-400 hover:bg-transparent  hover:font-normal rounded-lg px-10 py-2 text-xl m-2 bg-white border-white text-cyan-400 font-bold ease-in-out transition shadow-lg h-14"
        onClick={cerrarSesion}
        >
        Sign off
      </button>
    </div>
    
  )
} 
 
