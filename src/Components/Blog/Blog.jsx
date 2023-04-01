import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = ({ blog ,AddToBookmark ,markAsRead }) => {
    
    const [colors, setColors ]= useState('black')
    
     const changeColor = ()=>{
        let redColor='rgb(225, 105, 94)';
        setColors(redColor)
     } 
   
    let color = {
        "color":`${colors}`
    }
   
    const { cover_image, author_image, author_name , Publish_Date, Read_time, blog_title, hashtag} = blog
    return (
        <div className='h-auto  md:w-4/5 mx-auto p-5 my-12 rounded-lg '>
            <div id='img-container'>
                <img className='w-full rounded-xl' src={cover_image} alt="" />
            </div>
            {/* body section */}
            <div className='mt-9'>
                {/* header  */}
                <div className='flex justify-between items-center'>
                    {/* author-image*/}
                    <div className='flex gap-4 align-middle'>
                        <img className='w-10 h-10 rounded-full' src={author_image} alt="" />
                        <div>
                            <h3 className='font-bold text-lg'>{author_name}</h3>
                            <p className='font-semibold'>{Publish_Date}</p>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <p className='font-semibold'>{Read_time}min to read</p>
                        <p onClick={changeColor}><FontAwesomeIcon onClick={()=>AddToBookmark(blog)  }  
                        icon={faBookmark} style={color}  /></p>

                    </div>
                    {/*  */}
                </div>
                {/* title */}
                <div className='my-5 font-bold text-2xl w-3/4'>

                    <p>{blog_title}</p>

                </div>

                {/* footer */}
                <footer className='my-5'>
                    <p className='font-semibold text-slate-600'>{hashtag}</p>

                    <p onClick={()=>markAsRead(Read_time)} className='font-semibold inline-block text-blue-600 mt-5 cursor-pointer'>Mark as read</p>
                </footer>
            </div>
            <hr className='border-black w-11/12 mx-auto mt-20 ' />
        </div>
    );
};

export default Blog;