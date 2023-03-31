import React from 'react';

import Bookmark from '../Bookmarked/Bookmark';
import Blogs from '../Blog/Blogs';

const Container = () => {
    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-4 '>
            <Blogs></Blogs>
            </div>
            <div className='bg-[#F3F3F3] h-screen col-span-1 '>
            <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Container;