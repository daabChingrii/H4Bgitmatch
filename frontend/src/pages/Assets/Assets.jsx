import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import "./assets.css";
export const Assets = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='container flex justify-center'>
        <div className='container flex justify-center py-1'>
          <h1 className='font-Fira text-3xl text-white1'>Colour Scheme</h1>
        </div>
      </div>
      <div className='container flex justify-around'>
        <div className='rectangle'></div>
        <div className="card-colour">
          <div className="bg"></div>
          <div className="blob"></div>
        </div>
        <div className="card-colour">
          <div className="bg"></div>
          <div className="blob"></div>
        </div>
        <div className="card-colour">
          <div className="bg"></div>
          <div className="blob"></div>
        </div>
        <div className="card-colour">
          <div className="bg"></div>
          <div className="blob"></div>
        </div>
      </div>
    </>
  )
}
