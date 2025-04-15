import React from 'react'
import SingleCardComp from './SingleCardComp'

function HeaderComponent() {
    let allCards = [
        {

            title: 'Web developer',
            description: 'Learn CSS HTML JavaScript'
        },
        {
            title: 'UI/UX',
            description: 'Figma, Photoshop'
        },
        {
            title: 'Graphic desing',
            description: 'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            title: 'Softwer',
            description: 'Lorem ipsum dolor sit amet consectetur.'
        }
    ]
    return (
        <div className='container mx-auto mt-5'>
            <div className='flex'>
                <div className='w-[50%]'>
                    <h3 className='text-orange-600 font-bold'>What does #HEXA do?</h3>
                    <h2 className='dark:text-white text-mainBlue text-[42px] font-semibold'>Lorem ipsum dolor sit amet consectetur.</h2>
                </div>

                <p className='w-[50%] dark:text-white text-gray-700 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi libero esse debitis veniam pariatur exercitationem eos, magni similique adipisci
                    iure obcaecati asperiores perspiciatis nam nemo nobis quia ab eligendi!</p>
            </div>

            <div>
                <div className='grid grid-cols-2 mt-[40px] gap-[25px]  p-4'>
                    {allCards.map((card, index) => {
                        return <SingleCardComp key={index} card={card} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default HeaderComponent