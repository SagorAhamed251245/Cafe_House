import React from 'react';

const Bookmark = ({blogItem}) => {
    console.log(blogItem)
    return (
        <div>

            <div className='h-[50px] bg-[#bbbbbb]  text-blue-600 flex  justify-center items-center rounded-md'>
                <p className='font-semibold text-base'>Spent time on read : 177 min</p>
            </div>
            <div>
                <p className='font-bold text-base my-5'>Bookmarked Blogs: 1</p>
            </div>
            <div className='h-auto '>
                
                {
                    blogItem.map(item=>(<div className='h-auto p-3 bg-white  flex  justify-center items-center my-3 rounded-md'>
                        <p className='font-semibold text-base my-5'>{item.blog_title}</p>
                    </div> ))
                }
                
            </div>


        </div>
    );
};

export default Bookmark;