import React, { useState } from 'react'
import Question from './Question'

const Accordian = (props) => {


    return (
    <div className="container flex justify-center">
      <div className='flex flex-col items-center bg-nero rounded-3xl overflow-hidden'>
          {props.data.allContentfulFaq.nodes.map((faq, index) => {
          return <div 
                  key={index} 
                  className="">
                    <Question faq={faq}/>
                </div>
        })}
      </div>
    </div>
    )
}

export default Accordian