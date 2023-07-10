import React from 'react'
import './navbar.css';
import { NavLink, Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    <h1 className='text-4xl font-Fira text-white1 px-4 py-4 float-left hover:text-green1'>
                        <Link to='/home'>&lt;GitMatch&gt;</Link></h1>
                    <div className='text-sm font-Poppins font-light text-white1 float-right px-6 py-7'>
                        <span className='px-6 hover-underline-animation'><a href="https://gitmatch.streamlit.app/" target="_blank" rel="noopener noreferrer">resume parser</a></span>
                        <span className='px-6 hover-underline-animation'><NavLink to='/team'>team</NavLink></span>
                        <span className='px-6 hover-underline-animation'><NavLink to='/chats'>chats</NavLink></span>
                        <span className='pl-6 pr-4 hover-underline-animation'><NavLink to='/about'>about GitMatch</NavLink></span>
                    </div>
                </div>
            </nav>
        </>
    )
}
