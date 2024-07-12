import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


function Question(props) {
  const [isOpen, setIsOpen] = useState(false);
  const question = props.faq.faqQuestion;
  const answer = JSON.parse(props.faq.faqAnswer.raw);
  const index = props.index;
  const isLast = props.isLast;
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }
  console.log(answer);

  return (
    <div className="flex justify-center">
      <div className={`border-t-[1.5px] rounded-t-[2rem] rounded-b-[2rem] z-${index*10} ${isLast ? '' : 'pb-8'} border-slate-600 w-[20rem] md:w-full text-white  font-poppins ${isOpen ? 'bg-gradient-to-b from-nero to-red-stop ' : 'bg-nero'}`}>
        <button 
          className="w-full flex justify-between items-center pt-4 pb-4 px-4"
          onClick={toggleOpen}
        >
          <span className='mx-2 md:mx-4 my-2 font-semibold text-xs md:text-sm'>{question}</span>
          <span className="mr-2">
            {isOpen 
              ? 
              <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
              </svg> 
              : 
              <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
              </svg>}
          </span>
        </button>

        {isOpen && (
          <div className="text-xs md:text-sm font-extralight md:font-light mx-6 md:mx-8 pb-6">
            {answer.content.map((content, index) => (
              <p key={index}>
                {content.content.map((subcontent, subIndex) => (
                  <span key={subIndex}>
                    {subcontent.nodeType === "hyperlink" ? (
                      <a href={subcontent.data.uri} className="underline">{subcontent.content[0].value}</a>
                    ) : (
                      <span>{subcontent.value}</span>
                    )}
                  </span>
                ))}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;
