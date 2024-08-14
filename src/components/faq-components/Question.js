import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RichText from './FaqRichTextRenderer';

function Question(props) {
  const [isOpen, setIsOpen] = useState(false);
  const question = props.faq.faqQuestion;
  const answer = JSON.parse(props.faq.faqAnswer.raw);
  const isLast = props.isLast;
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`border-t-[1.5px] rounded-t-[2rem] pb-8 hover:pb-12 transition-all duration-150 ease-out ${
        isLast ? 'rounded-b-[2rem]' : ''
      } justify-center ${
        isOpen
          ? 'bg-gradient-to-b from-primaryGray to-redStop'
          : 'bg-primaryGray'
      }`}
    >
      <motion.div
        initial={false}
        onClick={toggleOpen}
        className={`border-t-[1.5px] rounded-t-[2rem]  ${
          isLast ? '' : 'pb-8'
        } border-slate-600  w-full text-white  font-poppins`}
      >
        <button
          className="flex items-center justify-between w-full px-4 pt-4 pb-4"
          onClick={toggleOpen}
          ariaLabel={`FAQ Question: ${question}`}
        >
          <span className="mx-2 my-2 text-xs font-semibold md:mx-4 md:text-sm">
            {question}
          </span>
          <span className="mr-2">
            {isOpen ? (
              <svg
                class="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                />
              </svg>
            ) : (
              <svg
                class="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
            )}
          </span>
        </button>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: 'fit-content',
                transition: {
                  height: { duration: 0.5, ease: [0.04, 0.62, 0.23, 1] },
                  opacity: {
                    delay: 0.25,
                    duration: 0.25,
                    ease: [0.04, 0.62, 0.23, 1],
                  },
                },
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: {
                  height: { duration: 0.5, ease: [0.04, 0.62, 0.23, 1] },
                  opacity: { duration: 0.1, ease: [0.04, 0.62, 0.23, 1] },
                },
              },
            }}
            style={{ willChange: 'height, opacity' }}
          >
            <div className="px-5 py-5 text-xs text-white md:text-sm font-extralight md:font-light md:mx-8">
              {answer ? <RichText content={answer.content} /> : null}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Question;
