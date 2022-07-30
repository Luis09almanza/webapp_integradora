import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Error from './messages/error';
import Success from './messages/success';


const API = process.env.REACT_APP_API
export const SignUp = () => {

  const [name, setName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  
  const [error, guardarError] = useState(false)
  const [success, guardarExito] = useState(false)
  const [errorPass, setErrorPass] = useState(false)

  const handleSubmit = async(e) =>{
    e.preventDefault();

    if(name === '' || last_name === '' || email === '' || password === '' || password2 === ''){
      guardarError(true);
      guardarExito(false);
      setErrorPass(false);
    }else{
      if(password === password2){
        const res = await fetch(`${API}/users`,{
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            name,
            last_name,
            email,
            password,
            isActive:true
          })
        })
        
        const data = await res.json();
        console.log(data);
        guardarExito(true);
        guardarError(false);
        setErrorPass(false);
      }else{
        setErrorPass(true);
        guardarExito(false);
      }
    }

  }

  let componente;
  if(error){
    //hay un error mostrarlo
    componente = <Error message={'Some fields are empty. Please, fill in the fields'}></Error>
  }

  let componente2;
  if(success){
    componente2 = <Success message={'User created successfully.'}></Success>
  }

  let componente3;
  if(errorPass){
    componente3 = <Error message={'Passwords do not match'}></Error>
  }  

  return(
  
  <form onSubmit={handleSubmit}>
  <div className='flex justify-center mt-10'>
    {componente}
    {componente2}
    {componente3}
  </div>
  <div className="flex justify-center items-center ">
    <div className="bg-red-400 w-96 rounded-lg mt-5 mb-14 ml-14 mr-14 shadow-2xl">

      <div>
        <p className="ml-24 mt-9 text-white">Name</p>
        <input
          type="text"
          className="rounded-lg align-middle ml-24"
          onChange={e => setName(e.target.value)}
          value={name}
          autoFocus
        />
      </div>

      <div>
        <p className="ml-24 mt-5 text-white">Last Name</p>
        <input
          type="text"
          className="rounded-lg align-middle ml-24"
          onChange={e => setLastName(e.target.value)}
          value={last_name}
        />
      </div>

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
        <p className="ml-24 mt-5 text-white password">Confirm Password</p>
        <input
          type="password"
          size={20}
          className="rounded-lg align-middle ml-24"
          onChange={e => setPassword2(e.target.value)}
          value={password2}
        />
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
          <Link to="/login" className="text-cyan-400 underline">
            Login Here.
          </Link>
        </p>
      </div>
    </div>
  </div>
</form>

  )
}
  
  
  
