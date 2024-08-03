import React from 'react';
import Question from './Question';

const Accordian = (props) => {
  let filteredData = props.data.allContentfulFaq.nodes
    ? props.data.allContentfulFaq.nodes.filter(
        (item) => item.faqQuestion !== null && item.faqAnswer !== null
      )
    : [];
  return (
    <div className="container flex justify-center mb-8">
      <div className="flex flex-col items-center rounded-[2rem] bg-primaryGray relative">
        {filteredData.length ? (
          filteredData.map((faq, index) => {
            if (!(faq.faqAnswer && faq.faqQuestion)) {
              return;
            }
            return (
              <div
                key={index}
                className={`w-[20rem] sm:w-[34rem] md:w-[45rem] ${
                  index !== 0 ? '-mt-10' : ''
                } relative `}
              >
                <Question
                  faq={faq}
                  index={index}
                  isLast={index === filteredData.length - 1}
                />
              </div>
            );
          })
        ) : (
          <div className="bg-transparant text-white font-semibold text-xl">
            NO FAQ Elements at the moment, sorry!
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
