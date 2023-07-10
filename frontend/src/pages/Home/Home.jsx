import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { HomeChats } from '../../Chats/Home'

export const Home = () => {
    return (
        <>
            <div><Navbar /></div>
            <div className='container flex justify-start'>
               <HomeChats/>
            </div>
        </>
    )
}
