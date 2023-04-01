import React, { useState } from 'react';

import Bookmark from '../Bookmarked/Bookmark';
import Blogs from '../Blog/Blogs';


const BlogContainer = () => {
    const [blogItem, setBlogItem] = useState([]);

    const [times, setTime ]= useState(0)
   

    const AddToBookmark = (blog) => {
        const newArray = [...blogItem, blog]


        console.log(newArray)
        const alreadyAdded = newArray.filter(id =>  id.id == id.id )
        setBlogItem(alreadyAdded)
    }
   
    const markAsRead = (Read_time) => {
       const newTime = times + Read_time;

        setTime(newTime)
        
       
        
    }
    


    return (
        <div className='grid md:grid-cols-5'>
            <div className='md:col-span-4'>
                <Blogs AddToBookmark={AddToBookmark} markAsRead={markAsRead}></Blogs>
            </div>
            <div className='bg-[#e7e7e7] h-[89vh] overflow-scroll col-span-1 p-1 sticky top-16'>
                <Bookmark blogItem={blogItem} times={times}></Bookmark>
            </div>
        </div>
    );
};

export default BlogContainer;