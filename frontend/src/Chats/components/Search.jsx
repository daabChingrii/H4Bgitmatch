import React from 'react'
export const Search = () => {
    return (
        <div className='searchbar'>
            <div className='input flex justify-center'>
                <input type='text' placeholder='Search a user' />
            </div>
            <div className='userchat'>
                <img className="search-avatar mx-4 my-3" src="https://avatars.githubusercontent.com/ShubhangiXD" alt="dev1" />
                <div className='userchatinfo'>
                    <span className='text-xl font-Poppins text-light' id='nameside'>Renyxx</span>
                </div>

            </div>
        </div>
    )
}
