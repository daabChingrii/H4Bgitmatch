import React from 'react'

export const LogIn = () => {
    return (
        <>
            <div class="card1">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner">
                    <div className='overlay flex justify-center text-3xl font-Fira text-white1 pt-12'>
                        Sign Up
                    </div>
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
                    <div className='form pt-8 pl-2 flex justify-center'>
                        <button class="button">
                            Log Me In!
                        </button>
                    </div>
                    <div className='form text-sm text-white1 pt-2 pl-1 flex justify-center'>
                        <p className="font-Poppins">Already have an account? Log In.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
