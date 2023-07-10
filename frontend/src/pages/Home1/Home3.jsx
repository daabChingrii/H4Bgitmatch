import React from 'react'
import './profiles.css';
import { GHpraj, LIpraj } from '../../components/Links/Links';
import { Navbar } from '../../components/Navbar/Navbar';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
export const Home3 = () => {
    const handleNavLeft = () => {
        window.location.href = '/home2';
    }
    const handleNavRight = () => {
        window.location.href = '/home';
    }
    return (
        <>
            <Navbar />
            <div class="card2">
                <button className='btn-social'>
                    <BsChevronLeft className='left-arrow fill-white1' onClick={handleNavLeft} />
                </button>
                <button className='btn-social float-right'>
                    <BsChevronRight className='left-arrow fill-white1' onClick={handleNavRight} />
                </button>
                <div class="card-info1">
                    <div className='avatar'>
                        <img className="card-avatar1" src="https://avatars.githubusercontent.com/prajuktadey" alt="dev1" />
                    </div>
                    <div className='name'>
                        <div class="card-title1 font-Fira pt-2">Prajukta Dey</div>
                        <div class="card-subtitle1 font-Poppins">Simply Symbiotic</div>
                    </div>
                    <div className='socials'>
                        <a href={GHpraj} target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg></a>
                        <a href={LIpraj} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white">
                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                        </svg></a>
                    </div>
                </div>

                <div className='bio'>
                    <div class="bio-title font-Fira">About Me:</div>
                    <div class="bio-content font-Poppins text-white1">I use Python to make macro apps that make lives easier, especially as a student.</div>
                </div>
                <div className='bio flex justify-center'>
                    <div class="bio-title font-Fira">
                        Tech Stack: <br />
                        <button>
                            <p className='btn'>AI/ML Engineer</p>
                        </button>
                    </div>

                    <div class="bio-title1 font-Fira">
                        Looking for: <br />
                        <button>
                            <p className='btn'>FullStack Development</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
