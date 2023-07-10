import React from 'react'

export const Chats = () => {
    return (
        <div className='chats'>
            {/* <div className='userchat'>
                <img className="search-avatar mx-4 my-3" src="https://avatars.githubusercontent.com/ShubhangiXD" alt="dev1" />
                <div className='userchatinfo'>
                    <span className='text-xl font-Poppins text-light'>Renyxx</span>
                    <p className='text-sm font-Poppins text-gray'>Hello</p>
                </div>
            </div> */}
            <div className='userchat'>
                <img className="search-avatar mx-4 my-3" src="https://avatars.githubusercontent.com/MDas08" alt="dev1" />
                <div className='userchatinfo'>
                    <span className='text-xl font-Poppins text-light' id='nameside'>Diya</span>
                    <p className='text-sm font-Poppins text-gray'>Call you later!</p>
                </div>
            </div>
            <div className='userchat'>
                <img className="search-avatar mx-4 my-3" src="https://avatars.githubusercontent.com/prajuktadey" alt="dev1" />
                <div className='userchatinfo'>
                    <span className='text-xl font-Poppins text-light' id='nameside'>Praj</span>
                    <p className='text-sm font-Poppins text-gray'>See ya!</p>
                </div>
            </div>
        </div>
    )
}
