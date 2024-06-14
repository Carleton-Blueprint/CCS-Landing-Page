import React, { useState } from 'react';

function Question(props) {
  const [isOpen, setIsOpen] = useState(false);
  const question = props.faq.faqQuestion;
  const answer = JSON.parse(props.faq.faqAnswer.raw);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    // figure out overlap effect, add proper icons, integrate rich text renderer, add transitions?
    <div className="flex justify-center">
      <div className={`border rounded-t-3xl border-gray-400 w-[40rem] text-white font-poppins ${isOpen ? 'bg-gradient-to-b from-nero to-red-stop ' : 'bg-nero'}`}>
        <button 
          className="w-full flex justify-between items-center pt-3 pb-4 px-4 "
          onClick={toggleOpen}
        >
          <span>{question}</span>
          <span className="toggle-icon">{isOpen ? '▲' : '▼'}</span>
        </button>

        {isOpen && (
          <div className="text-sm px-4 pb-6">
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
