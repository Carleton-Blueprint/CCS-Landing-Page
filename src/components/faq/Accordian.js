import React from 'react';
import Question from './Question';

const Accordian = (props) => {

  return (
    <div className="container flex justify-center">
      <div className='flex flex-col items-center rounded-3xl bg-nero relative'>
        {props.data.allContentfulFaq.nodes.map((faq, index) => {
          return (
            <div
              key={index}
              className={`w-full ${index !== 0 ? '-mt-10' : ''} relative z-${10*index}`}>
              <Question faq={faq} index={index} isLast={index === props.data.allContentfulFaq.nodes.length - 1}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;