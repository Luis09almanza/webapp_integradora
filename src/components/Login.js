import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Error from './messages/error';
import Cookies from 'universal-cookie';



const API = process.env.REACT_APP_API
const cookie = new Cookies();

export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, guardarError] = useState(false)
  const [error2, guardarError2] = useState(false)

  const handleSubmit = async(e) =>{
    e.preventDefault();

    if(email === '' || password === ''){
      guardarError(true);
    }else{
      guardarError(false);
      
      const res = await fetch(`${API}/users/login`,{
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email,
          password,
        })
      })
      
      const user = await res.json();
      console.log(user);

      if (user === false){
        //decirle que el usuario es incorrecto
        guardarError2(true)
        
      }
      else{
        
        cookie.set('_id', user._id, {path:"/"});
        cookie.set('name', user.name, {path:"/"});
        cookie.set('last_name', user.last_name, {path:"/"});
        cookie.set('email', user.email, {path:"/"});
        alert(`WelCUM, ${user.name} ${user.last_name}`);
        window.location.href="/users"
      }


    }

  }



  let componente;
  if(error){
    //hay un error mostrarlo
    componente = <Error message={'Some fields are empty. Please, fill in the fields'}></Error>
  }

  let componente2;
  if(error2){
    //hay un error mostrarlo
    componente2 = <Error message={'The user does not exist or the fields are misspelled.'}></Error>
  }
  
  useEffect(()=>{
      if(cookie.get('name')){
        window.location.href="/users";
      }
  });


  return(

    <form onSubmit={handleSubmit}>
    <div className='flex justify-center mt-10'>
      {componente}
      {componente2}
    </div>
    <div className="flex justify-center items-center ">
      <div className="bg-red-400 w-96 rounded-lg mt-5 mb-14 ml-14 mr-14 p-2 shadow-2xl">
  
  
        <div>
          <p className="ml-24 mt-5 text-white">E-mail</p>
          <input
            type="email"
            size={20}
            className="rounded-lg align-middle ml-24"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
  
        <div>
          <p className="ml-24 mt-5 text-white ">Password</p>
          <div className="flex">
            <input
              type="password"
              className="rounded-lg align-middle ml-24"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
  
        <div>
          <button className="mt-5 bg-cyan-400 rounded-lg ml-24 w-1/2 h-12 text-lg text-white">
            Login account
          </button>
        </div>
  
  
        <br />
        <div className="ml-12 mb-12">
          <p className="font-sans text-white">
            Or if you have an account,{" "}
            <Link to="/signup" className="text-cyan-400 underline">
              Login Here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  </form>
        
       
        
  )

  

}
