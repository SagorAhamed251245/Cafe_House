import React, { useEffect, useState } from 'react';
import Blog from './Blog';
 
 

const Blogs = ({AddToBookmark}) => {

    const [blogs, setBlogs]= useState([]) ;

 useEffect(()=>{
     fetch('blog.json')
     .then(res=> res.json())
     .then(data=> setBlogs(data))
 }, [])

    return (
        <>
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog}  AddToBookmark={AddToBookmark}></Blog>)
            }
            
        </>
    );
};

export default Blogs;