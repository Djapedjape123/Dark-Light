import React from 'react'

function HeroComponet() {
  return (
    <div className='container mx-auto mt-[50px]'>
        <h2 className='text-[48px] dark:text-white dark:font-bold text-mainBlue font-bold dark:text-center text-center lg:w-[80%] mx-auto'>We are creative agency capable of creatining outslenter desinger and website</h2>
        <p className='dark:text-lighGrey text-center mt-7 text-mainBlue'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, doloremque!</p>
        <div className='flex justify-center gap-5 mt-5 p-[20px]'>
            <button className='bg-mainBlue text-white font-medium border dark:bg-white dark:text-mainBlue px-[30px] py-[10px] rounded-lg dark:hover:bg-mainBlue dark:hover:text-white hover:bg-white  hover:text-mainBlue'>About us</button>
            <button className='dark:bg-mainBlue dark:text-white font-medium border border-gray-600 px-[30px] py-[10px] rounded-lg  dark:hover:bg-white dark:hover:text-mainBlue hover:bg-mainBlue hover:text-white'>Contact</button>
        </div>
    </div>
  )
}

export default HeroComponet