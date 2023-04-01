import React from 'react';

const QuestionAnswer = () => {
    return (
        <>
                 <div className='text-center text-3xl font-bold text-blue-500 mb-10'>
                    <p>Question And Answer</p>
                 </div>

            <div className='   my-3 md:w-3/4 px-5 md:px-0 mx-auto '>
                <p className='font-bold text-2xl mb-5 '>
                    1. what is the difference between props and state ?
                </p>
                <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                    <span className='text-blue-500 mr-2'>Ans:</span>The main difference between props and state is that
                    props are immutable means Props are read-only . you can not modify it. On the other hand state state can be changed that means State changes can be asynchronous.
                </p>
                {/* 1 */}

                <p className='font-bold text-2xl mb-5 '>
                    2. How does useState work  ?
                </p>
                <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                    <span className='text-blue-500 mr-2'>Ans:</span>It provides an array with two values, the current state and a function to update it, and allowing state to be added to a functional components.
                </p>
                {/* 2 */}
                {/* 3 */}
                <p className='font-bold text-2xl mb-5 '>
                    3. What is the Purpose of useEffect ?
                </p>
                <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                    <span className='text-blue-500 mr-2'>Ans:</span>It allows us to perform side effects in Our components.
                    Such as fetching data, directly updating the DOM, and timers.
                </p>
                {/* 4 */}
                <p className='font-bold text-2xl mb-5 '>
                    3. how does react work?
                </p>
                <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                    <span className='text-blue-500 mr-2'>Ans:</span>Its a component-based Javascript library.
                    using react we can write jsx (like html ). behind the scene  React JS infuse HTML code with JavaScript.
                </p>

            </div>
        </>


    );
};

export default QuestionAnswer;