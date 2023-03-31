import React, { useState } from 'react';

import Bookmark from '../Bookmarked/Bookmark';
import Blogs from '../Blog/Blogs';


const BlogContainer = () => {
    const [blogItem, setBlogItem] = useState([]);

 const AddToBookmark = (blog) => {
    setBlogItem(blog)
 }
 

    return (
        <div className='grid md:grid-cols-5'>
            <div className='md:col-span-4'>
                <Blogs AddToBookmark={AddToBookmark}></Blogs>
            </div>
            <div className='bg-[#e7e7e7] h-screen col-span-1 p-1'>
                <Bookmark blogItem={blogItem} ></Bookmark>
            </div>
        </div>
    );
};

export default BlogContainer;