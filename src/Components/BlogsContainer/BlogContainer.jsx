import React from 'react';

import Bookmark from '../Bookmarked/Bookmark';
import Blogs from '../Blog/Blogs';


const BlogContainer = () => {
    return (
        <div className='grid md:grid-cols-5'>
            <div className='md:col-span-4'>
                <Blogs></Blogs>
            </div>
            <div className='bg-[#e7e7e7] h-screen col-span-1'>
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default BlogContainer;