import "./authmodal.css"
import React, { useState } from 'react'

export const CreateAcc = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <>
            <div class="card1">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner">
                    <div className='overlay flex justify-center text-3xl font-Fira text-white1'>
                        Sign Up
                    </div>

                    <form action='POST'>
                        <div className='form pt-10 pl-8'>
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
                        <div className='form pt-12 pl-1 flex justify-center'>
                            <button class="button">
                                Create Account!
                            </button>
                        </div>
                        <div className='form text-sm text-white1 pt-2 pl-1 flex justify-center'>
                            <p className="font-Poppins">Don't have an account? Create account.</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
