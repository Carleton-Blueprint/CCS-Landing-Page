import React from 'react'
import { graphql } from 'gatsby'

const EventTest = () => {
  return (
    <div>SDFSF</div>
  )
}

export default EventTest


export const query = graphql`
  query($slug:String!) {
  contentfulSpecificEventPage(slug: {eq: $slug}) {
    eventName
  }
}`