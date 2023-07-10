import React from 'react'

export const Input = () => {
    return (
        <div className='input-chat'>
            <p className='font-Poppins text-gray pt-1 pl-2'>Type Something...</p>
            <div className='chatIcons'>
                <span class="material-symbols-outlined" id="icons1">
                    attach_file
                </span>
                <span class="material-symbols-outlined" id='icons1'>
                    add_a_photo
                </span>
                <span class="material-symbols-outlined" id='icons1'>
                    send
                </span>
            </div>
        </div>
    )
}
