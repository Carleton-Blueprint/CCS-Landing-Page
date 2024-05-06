import React from 'react'
import AboutUsGallery from '../components/about-us-components/gallery-components/AboutUsGallery'
import { graphql } from 'gatsby'
const ImageGallery = ({ data }) => {
    const galleryImages = data.allContentfulAboutUsGallery.nodes //all images the AboutUsGallery
    const bodySections = data.contentfulAboutPage.aboutUsSection

    console.log(bodySections)
    return (
      <div className=' flex flex-col'>
        <div className='flex justify-center items-center'>
          <AboutUsGallery images={galleryImages} />
        </div>
        <div className='flex justify-center'>
          <div className=' w-4/5 flex flex-col justify-center gap-3 lg:gap-14'>
            {bodySections.map((node) =>(
              <div>
                <div className='font-poppins text-2xl md:text-3xl lg:text-5xl font-semibold text-[#ABAAAA]'>
                  {node.title}
                </div>
                <div className='font-poppins text-sm md:text-md lg:text-lg pt-3 lg:pt-8'>
                  {node.bodyText.bodyText}
                </div>
              </div>
            )
          )}
          </div>
        </div>
        
      </div>
    )
}

// query to return all galleryImages from the AboutUsGallery
export const query = graphql`
query{
  contentfulAboutPage {
    aboutUsSection {
      title
      bodyText {
        bodyText
      }
    }
  }
  allContentfulAboutUsGallery {
    nodes {
      galleryImage {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          width: 600
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
}
`;

export default ImageGallery;