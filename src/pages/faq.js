import { graphql } from 'gatsby'
import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import Accordian from '../components/faq/Accordian'

function Faq({data}) {


  return (
    <div className='container'>
      <NavigationBar pathname={'/FAQ'}/>
      <Accordian  data={data} />
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