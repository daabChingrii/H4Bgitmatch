import { React, useState } from 'react'
import { Landing } from '../Landing/Landing'
import { NavLink } from 'react-router-dom';

export const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Landing />
            <div className='float-right'>
                <div class="card1">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="card-inner">
                        <div className='overlay flex justify-center text-3xl font-Fira text-white1 pt-10'>
                            <p>Log In</p>
                        </div>
                        <div className='form pt-7 pl-8'>
                            <div class="form__group field">
                                <input type="email" class="form__field" placeholder="gmail" required="" onChange={(e) => { setEmail(e.target.value) }} />
                                <label for="email" class="form__label font-Poppins font-light">enter email</label>
                            </div>
                        </div>
                        <div className='form pt-7 pl-8'>
                            <div class="form__group field">
                                <input type="password" class="form__field" placeholder="password" required="" onChange={(e) => setPassword(e.target.value)} />
                                <label for="password" class="form__label font-Poppins font-light">enter password</label>
                            </div>
                        </div>
                        <div className='form pt-8 pl-2 flex justify-center'>
                            <button class="button">
                                Log Me In!
                            </button>
                        </div>
                        <div className='form text-sm text-white1 pt-4 pl-1 flex justify-center'>
                            <p className="font-Poppins">Don't have an account? <NavLink to="/signup" className='nav-link'>Create account.</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}