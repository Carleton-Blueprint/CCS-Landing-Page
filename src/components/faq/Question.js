import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
    <div className={`border-t-[1.5px] rounded-t-[2rem] pb-8 ${isLast ? 'rounded-b-[2rem]' : ''} justify-center ${isOpen ? 'bg-gradient-to-b from-nero to-red-stop' : 'bg-nero'}`}>
    <motion.div
        initial={false}
        onClick={toggleOpen}
        className={`border-t-[1.5px] rounded-t-[2rem]  z-${index*10} ${isLast ? '' : 'pb-8'} border-slate-600 w-[20rem] w-full text-white  font-poppins`}
      >
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
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            // Add animations for the accordion content
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className='text-white text-xs md:text-sm font-extralight md:font-light md:mx-8'>
              <RichText content={answer.content} />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Question;
