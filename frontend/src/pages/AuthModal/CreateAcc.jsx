import { Landing } from "../Landing/Landing";
import "./authmodal.css"
import React from 'react'
import { NavLink } from "react-router-dom";

export const CreateAcc = () => {
    return (
        <>
            <Landing />
            <div className="float-right">
                <div class="card1">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="card-inner">
                        <div className='overlay flex justify-center text-3xl font-Fira pt-10'>
                            <p>Sign Up</p>
                        </div>

                        <form action='/signup' method="POST">
                            <div className='form pt-2 pl-8'>
                                <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="email" required="" />
                                    <label for="email" class="form__label font-Poppins font-light">enter email</label>
                                </div>
                            </div>
                            <div className='form pt-4 pl-8'>
                                <div class="form__group field">
                                    <input type="password" class="form__field" placeholder="password" required="" />
                                    <label for="password" class="form__label font-Poppins font-light">enter password</label>
                                </div>
                            </div>
                            <div className='form pt-4 pl-8'>
                                <div class="form__group field">
                                    <input type="password" class="form__field" placeholder="cpassword" required="" />
                                    <label for="password" class="form__label font-Poppins font-light">confirm password</label>
                                </div>
                            </div>
                            <div className='form pt-6 pl-1 flex justify-center'>
                                <button class="button">
                                    Create Account!
                                </button>
                            </div>
                            <div className='form text-sm text-white1 pt-3 pl-1 flex justify-center'>
                                <p className="font-Poppins">Already have an account? <NavLink to="/login" className='nav-link'>Log In.</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
