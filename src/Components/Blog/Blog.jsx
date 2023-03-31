import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark  } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    return (
        <div className='h-auto  md:w-4/5 mx-auto p-5 my-12 rounded-lg '>
            <div id='img-container'>
                <img className='w-full rounded-xl' src="https://tinyurl.com/ayhsvds8" alt="" />
            </div>
            {/* body section */}
            <div className='mt-9'>
                {/* header  */}
                <div className='flex justify-between'>
                    {/* author-image*/}
                    <div className='flex gap-4 align-middle'>
                        <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <div>
                            <h3 className='font-bold text-lg'>Alex Johnson</h3>
                            <p className='font-semibold'>January 14th, 2023</p>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <p className='font-semibold'>5 minit to read</p>
                        <p><FontAwesomeIcon className='text-slate-400 ' icon={faBookmark} /></p>
                    </div>
                    {/*  */}
                </div>
                {/* title */}
                <div className='my-5 font-bold text-2xl w-3/4'>
                    
                    <p>Programming for Non-Programmers: A Beginner's Guide</p>
                    
                </div>

                {/* footer */}
                <footer className='my-5'>
                    <p className='font-semibold text-slate-600'>#beginners  #programming</p>

                    <p className='font-semibold text-blue-600 mt-5 cursor-pointer'>Mark as read</p>
                </footer>
            </div>
            <hr className='border-black w-11/12 mx-auto mt-20 ' />
        </div>
    );
};

export default Blog;