import { graphql } from 'gatsby'
import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import Question from '../components/faq/Question'
import Header from '../components/base/Header'
import background from '../images/faq-header.svg'

function Faq({data}) {
  return (
    <>
      <NavigationBar pathname={'/FAQ'}/>
      <Header title='FAQ' background={background}/>
    <div className='container'>
      {data.allContentfulFaq.nodes.map((faq, index) => {
        return <div key={index}><Question faq={faq}/></div>
      })}
    </div>
    </>
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