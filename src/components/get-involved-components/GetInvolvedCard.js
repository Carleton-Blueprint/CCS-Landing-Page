import React from 'react'

const GetInvolvedCard = ({data}) => {
    const title = data.title;
    const description = data.description.description;
    const icon = data.icon.file.url
    const altTag = data.icon.description;
    const buttonText = data.linkTitle;
    const link = data.link
    
  return  (
    <div className='relative flex flex-col w-10/12 text-white rounded-tr-[3rem] rounded-bl-[3rem] bg-primaryGray h-[16rem] sm:w-[32rem] sm:h-[22rem]'>
        <div className='px-6 pt-8'>
            <p className='mb-4 text-lg font-semibold sm:text-2xl'>{title}</p>
            <p className='text-xs sm:text-lg font-extralight'>{description}</p>
        </div>
        <div className='flex justify-between w-full'>
            <div className='p-6'>
                <a href={link}>
                    <button  className='absolute w-1/3 border border-white rounded-3xl bottom-8 bg-primaryGray'>
                        <p className='p-2 text-xs font-bold sm:text-lg'>{buttonText}</p>
                    </button>
                </a> 
            </div>
            <div className='absolute bottom-0 right-0 w-1/2 sm:w-[16rem]'>
                <img src={icon} alt={altTag}/>
            </div>
        </div>
    </div>
    )
}

export default GetInvolvedCard

