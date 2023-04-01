import React from 'react';

const Nav = () => {
    return (
        <div className='flex justify-between items-center bg-white  py-3 md:px-10 px-3 sticky top-0 z-1'>
            <div id='nav-title' className=' text-xl md:text-3xl  font-bold'>
              <h3>Cafe House</h3>
            </div>
            <div className='flex flex-row gap-5 text-sm font-bold items-center'>
                <a className='hover:text-zinc-500' href="./home">Home</a>
                <a className='hover:text-zinc-500' href="./blog">Blog</a>
                <a className='hover:text-zinc-500' href="./podcast">Podcast</a>
                <a className='hover:text-zinc-500' href="./login">Login</a>
                <img className='w-10 h-10 rounded-full'  src="36388074.jpg" alt="" />
            </div>
            
        </div>
    );
};

export default Nav;