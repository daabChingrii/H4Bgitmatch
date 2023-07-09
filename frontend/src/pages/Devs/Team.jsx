import React from 'react'
import "./team.css";
import { Navbar } from '../../components/Navbar/Navbar';
import { Devs } from './Devs';
import logoDC from '../../images/daab chingri.png'

export const Team = () => {
    return (
        <>
            <div><Navbar /></div>

            <div className='flex justify-center' id='hover-rotate'>
                <img className="logo" src={logoDC} alt="logo" />
            </div>

            <div className='container flex justify-center'>
                <div className='container flex justify-center py-8'>
                    <h1 className='font-Poppins text-xl text-white1'>Our team name <span className='text-green1 font-Fira'><b>daabChingri&#40; &#41;</b></span> originated through the popular naming convention of camelCase.</h1>
                </div>
            </div>

            <div><Devs /></div>

        </>
    )
}
