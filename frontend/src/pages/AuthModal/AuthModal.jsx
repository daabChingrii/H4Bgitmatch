import React from 'react'
import './authmodal.css';
export const AuthModal = () => {

    var signup = true;

    return (
        <>
            <div class="card1">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner">
                    <div className='overlay flex justify-center text-white1 text-3xl font-Fira pt-12'>
                        {signup ? "Sign Up" : "Log In"}
                    </div>
                    {!signup && <><div className='form pt-10 pl-8'>
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="gmail" required="" />
                            <label for="email" class="form__label font-Poppins font-light">enter email</label>
                        </div>
                    </div>
                        <div className='form pt-10 pl-8'>
                            <div class="form__group field">
                                <input type="password" class="form__field" placeholder="password" required="" />
                                <label for="password" class="form__label font-Poppins font-light">enter password</label>
                            </div>
                        </div>
                        
                    </>}
                    {signup && <><div className='form pt-4 pl-8'>
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
                    </>}
                </div>
            </div>
        </>
    )
}
