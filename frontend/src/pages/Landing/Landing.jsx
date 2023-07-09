import { React } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import "./landing.css";

export const Landing = () => {

    return (
        <>
            <div><Navbar /></div>
            <div className='container flex justify-start'>
                <div className='flex justify-start'>
                    <div className='title'>
                        <h1 className='font-Poppins text-5xl text-white1 pl-6'>Finding <span className='text-green1 font-Fira text-5xl'>&lt;Developers&gt;</span><br />
                            has never been easier!</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
