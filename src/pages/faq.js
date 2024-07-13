import { graphql } from 'gatsby'
import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import Accordian from '../components/faq/Accordian'
import Header from '../components/base/Header'
import background from '../images/faq-header.svg'

function Faq({ data }) {


  return (
    <>
      <NavigationBar pathname={'/FAQ'}/>
      <Header title='FAQ' background={background}/>
      <div className='container'>
        <Accordian  data={data} />
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