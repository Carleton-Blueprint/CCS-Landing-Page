import React, {  useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
import RichText from './FaqRichTextRenderer';

function Question(props) {
  const [isOpen, setIsOpen] = useState(false);
  const question = props.faq.faqQuestion;
  const answer = JSON.parse(props.faq.faqAnswer.raw);
  const index = props.index;
  const isLast = props.isLast;
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex justify-center">
      <div className={`border-t-[1.5px] rounded-t-[1.5rem] z-${index*10} ${isLast ? 'rounded-b-[1.5em]' : 'pb-8'} border-slate-600 w-[20rem] w-full text-white  font-poppins ${isOpen ? 'bg-gradient-to-b from-primaryGray to-redStop ' : 'bg-primaryGray'}`}>
        <button 
          className="flex items-center justify-between w-full px-4 pt-4 pb-4"
          onClick={toggleOpen}
        >
          <span className='mx-2 my-2 text-xs font-semibold md:mx-4 md:text-sm'>{question}</span>
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
          <div className="pb-6 mx-6 text-xs md:text-sm font-extralight md:font-light md:mx-8">
            <RichText content={answer.content} />
            {/* {answer.content.map((content, index) => (
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
            ))} */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;
