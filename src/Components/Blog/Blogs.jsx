import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import QuestionAnswer from '../Question Answer/QuestionAnswer';
 
 

const Blogs = ({AddToBookmark , markAsRead }) => {
    

    const [blogs, setBlogs]= useState([]) ;

 useEffect(()=>{
     fetch('blog.json')
     .then(res=> res.json())
     .then(data=> setBlogs(data))
 }, [])

    return (
        <>
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog}  AddToBookmark={AddToBookmark}  markAsRead={markAsRead} ></Blog>)
            }
            <QuestionAnswer></QuestionAnswer>
        </>
    );
};

export default Blogs;