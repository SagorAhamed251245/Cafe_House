import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Bookmark from '../Bookmarked/Bookmark';
import Blogs from '../Blog/Blogs';


const BlogContainer = () => {
    const [blogItem, setBlogItem] = useState([]);

    const [times, setTime ]= useState(0)
//    const [color, setColor ]= useState('black')
    
    const AddToBookmark = (blog) => {
        
        // let redColor='rgb(225, 105, 94)';
        //     setColor(redColor)
        
        const alreadyAdded = blogItem.filter(item =>  item.id == blog.id );
        
        
        if(alreadyAdded.length > 0){
            toast.warn("Already Bookmarked!")
            
        }
        
       
        const newArray = [...blogItem, blog]
        
        setBlogItem(newArray)
       
        
    }
   
    const markAsRead = (Read_time) => {
       const newTime = times + Read_time;

        setTime(newTime)
        
       
        
    }
    


    return (
        <div className='grid md:grid-cols-5'>
            <div className='md:col-span-4'>
                <Blogs AddToBookmark={AddToBookmark} markAsRead={markAsRead} ></Blogs>
            </div>
            <div className='bg-[#e7e7e7] md:h-[89vh]  h-auto overflow-scroll col-span-1 p-1 sticky top-16'>
                <Bookmark blogItem={blogItem} times={times}></Bookmark>
            </div>
        </div>
    );
};

export default BlogContainer;