import React from 'react'
import { FaGithub } from "react-icons/fa";

function SingleCardComp({card}) {
  return (
    <div className='border border-lighGrey rounded-lg shadow-lg shadow-green-500  dark:shadow-red-500 p-[20px] transition-transform duration-300 hover:scale-105'>
        <FaGithub className='mx-auto' color='red' size={30}/>
        <h2 className='font-extrabold p-3 dark:text-white'>{card.title}</h2>
        <p className='dark:text-white'>{card.description}</p>
    </div>
  )
}

export default SingleCardComp