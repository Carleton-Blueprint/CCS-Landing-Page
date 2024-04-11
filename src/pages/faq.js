import { graphql } from 'gatsby'
import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import Question from '../components/faq/Question'

function Faq({data}) {
  return (
    <div className='container'>
      <NavigationBar pathname={'/FAQ'}/>
      {data.allContentfulFaq.nodes.map((faq, index) => {
        return <div key={index}><Question faq={faq}/></div>
      })}

    </div>
  )
}

export const query = graphql
`
  query {
    allContentfulFaq {
      nodes {
        faqQuestion
        faqAnswer {
          raw
        }
      }
    }
  }
`

export default Faq