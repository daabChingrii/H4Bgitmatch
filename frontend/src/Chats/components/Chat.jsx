import React from 'react'
import { Messages } from './Messages'
import { Input } from './Input'
export const Chat = () => {
    return (

        <div className='chat'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <div className='chatinfo'>
                <div className='headerchat'>
                    <img className="search-avatar mx-4 my-3" src="https://avatars.githubusercontent.com/prajuktadey" alt="dev1" />
                    <span id='chatname' className='font-Poppins text-2xl text-white1 mt-5'>Praj</span>
                </div>
                <div className='chatIcons'>
                    <span class="material-symbols-outlined" id='icons'>
                        more_horiz
                    </span>
                    <span class="material-symbols-outlined" id='icons'>
                        videocam
                    </span>
                    <span class="material-symbols-outlined" id='icons'>
                        person_add
                    </span>
                </div>
            </div>
            <div className='message-container'>
                <Messages />
            </div>
            <Input />
        </div>
    )
}
