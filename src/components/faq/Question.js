import React, {useState} from 'react'

function Question(props) {

  const [isOpen, setIsOpen] = useState(false);
  const question = props.faq.faqQuestion
  const answer = JSON.parse(props.faq.faqAnswer.raw);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
  <div className='container'>
    <button className="faq-question" onClick={toggleOpen}>
      <p>
        {question}
        <span className="toggle-icon">{isOpen ? '▼' : '▶'}</span>
      </p>
    </button>
    {isOpen && (
      <div className="faq-answer">
        {answer.content.map( (content, index) => {
          return <p key={index}>
            {content.content.map( (subcontent, index) => {
              if (subcontent.nodeType === "hyperlink") {
                console.log(subcontent.data.uri)
                return <span key={index}> <a href={subcontent.data.uri} className="text-blue-500">{subcontent.content[0].value}</a></span>
              } else {
                return <span key={index}> {subcontent.value}</span>
              }
            })
            }
          </p>
        })
        }
      </div>
    )}
  </div>
  )
}

export default Question