import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'

export const About = () => {
    return (
        <>
            <Navbar />
            <div className='container text-2xl font-Fira text-green1 pt-10 pb-5'>
                GitMatch:
            </div>
            <div className='title1 text-xl font-Poppins text-white1 px-10'>
                GitMatch is a cutting-edge mobile application designed to connect college students, primarily introverted individuals, with developers who perfectly match their project requirements, hackathon teams, and employment needs. It provides a unique and fun experience, differentiating itself from more formal professional networking sites. With GitMatch, finding developers for group projects and hackathons has never been easier or more enjoyable.
            </div>
            <div className='container text-2xl font-Fira text-green1 pt-10 pb-5'>
                Features:
            </div>
            <div className='title1 text-xl font-Poppins text-white1 px-10'>
                1. Developer Discovery: GitMatch leverages advanced algorithms to discover and recommend developers based on your specific needs.
            </div>
            <div className='title1 text-xl font-Poppins text-white1 px-10 py-3'>
                2. Community Forum: Engage in lively discussions, share doubts, and seek advice on the GitMatch community forum.
            </div>
            <div className='title1 text-xl font-Poppins text-white1 px-10 py-3'>
                3. Resume Analyzer: GitMatch features a powerful resume parser that evaluates both your resume and the job description you are applying for.
            </div>
            <div className='title1 text-xl font-Poppins text-white1 px-10 py-3'>
                4. Profile Showcase: Each developer on GitMatch has a comprehensive profile showcasing their skills, projects, and experience.
            </div>
            <div className='title1 text-xl font-Poppins text-white1 px-10 py-3'>
                5. Seamless Communication: GitMatch provides seamless communication channels, including chat and messaging features, allowing you to connect with potential developers and discuss project details without leaving the app.
            </div>
        </>
    )
}
