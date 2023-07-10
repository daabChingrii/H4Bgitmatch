import React from 'react'
import { SideBar } from './components/SideBar'
import { Chat } from './components/Chat'
import "./chatstyles.css";

export const HomeChats = () => {
    return (
        <div className='home'>
            <div className="containerc">
                <SideBar />
                <Chat />
            </div>
        </div>
    )
}
