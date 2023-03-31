import React from 'react';

const Nav = () => {
    return (
        <div className='flex justify-between bg-white  py-3 px-10 sticky top-0 z-1'>
            <div id='nav-title' className=' text-3xl font-bold'>
              <h3>Cafe House</h3>
            </div>
            <div className='flex flex-row gap-5 text-base font-bold '>
                <a className='hover:text-zinc-500' href="./home">Home</a>
                <a className='hover:text-zinc-500' href="./blog">Blog</a>
                <a className='hover:text-zinc-500' href="./podcast">Podcast</a>
                <a className='hover:text-zinc-500' href="./login">Login</a>
            </div>
            
        </div>
    );
};

export default Nav;