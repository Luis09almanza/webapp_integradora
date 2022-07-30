import React from 'react';
import { Link } from 'react-router-dom';
import manwithguitar from '../img/manwithguitar.png';
import testLogo from '../img/test.svg'

export const Home = () => (
    <>
  <div className="bg-red-400 text-white flex flex-wrap flex-row justify-center">
    <div>
      <img
        src={manwithguitar}
        alt="Man with a guitar"
        className="w-auto h-96 inline-flex m-10"
      />
    </div>
    <div className="inline-flex flex-col justify-center">
      <p className="text-center text-4xl font-bold">
        The best way to learn how to play an instrument!
      </p>
      <div className="inline-flex justify-center">
        <Link
          to="/signup"
          className="bg-cyan-400 px-10 text-center py-2 font-bold rounded-lg text-2xl m-2 hover:bg-transparent border-4 border-cyan-400 hover:font-normal shadow-lg transition"
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
    </div>
  </div>
  <div>
    <section className="flex flex-wrap flex-row justify-center mt-10 mb-10">
      <div>
        <img
          src={testLogo}
          alt="Logotipo"
          className="w-52 h-52 inline-flex"
        />
      </div>
      <div className="basis-2/4 ml-5">
        <h3 className="text-2xl">
          <b>Another way to learn</b>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas
          cumque in ipsa, sapiente mollitia voluptatum perspiciatis, ipsam,
          dolore consectetur eveniet provident omnis esse! Voluptas, quae?
          Assumenda obcaecati dicta cupiditate?
        </p>
      </div>
    </section>
    <hr />
    <div className="flex justify-center mb-5">
      <h3 className="font-bold text-2xl">Why choose our product?</h3>
    </div>
    <section className="flex flex-col justify-center text-center md:flex-row ">
      <div>
        <img src="" alt="" />
      </div>
      <div className="basis-1/4">
        <b>It's cheap</b>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quia
          voluptatum molestiae earum atque veritatis tenetur adipisci dolorem
          enim, obcaecati autem iure illo quos ut delectus neque nam maiores
          excepturi!
        </p>
      </div>
      <div>
        <img
          src={testLogo}
          alt="Logotipo"
          className="w-52 h-52 inline-flex m-5"
        />
      </div>
      <div className="basis-1/4">
        <b>Constantly practice</b>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          consectetur laborum error optio animi, dolores aspernatur dolor,
          molestias eveniet ex eos iste reiciendis accusantium accusamus
          architecto facere, ut maxime amet.
        </p>
      </div>
    </section>
    <hr />
    <section className="flex text-center flex-col mb-10">
      <h3 className="font-bold text-2xl">Our product</h3>
      <div className="">
        <img
          src={testLogo}
          alt="Logotipo"
          className="w-52 h-52 inline-flex m-5"
        />
      </div>
      <div className="inline-flex justify-center">
        <p className="w-2/5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae dolore
          dolores ipsum expedita error sunt vero numquam odit velit voluptas aut
          deserunt consectetur, repellendus commodi voluptate non dignissimos,
          unde veniam?
        </p>
      </div>
    </section>
  </div>
</>
)