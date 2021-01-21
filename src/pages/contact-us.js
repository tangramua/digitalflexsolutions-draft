import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
// import Header from '../containers/layout/header/header-one'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import CTAArea from '../containers/global/cta-area/section-one'
import ContactFormArea from '../containers/contact-us/contact-form-area'
import ContactInfoArea from '../containers/contact-us/contact-info-area'
import {graphql} from "gatsby";
import AboutArea from "./about-us";

const ContactUsPage = ({ pageContext, location, data }) => {
    const areas = data.contentfulPage.contentContainers
    const backgroundImage = areas.find(node => node.bgPage && !node.content)

    let titlePage = data.contentfulPage.metadata.find(node => node.name.codeId === 'title')
    let descriptionPage = data.contentfulPage.metadata.find(node => node.name.codeId === 'description')
    titlePage = titlePage ? titlePage.content.content : 'Contact Us'
    descriptionPage = descriptionPage ? descriptionPage.content.content : 'Contact Us'

    return (
        <Layout location={location}>
            <SEO title={titlePage} description={descriptionPage}/>
            <Header/>
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Contact Us"
                containerData={backgroundImage}
            />
            <main className="site-wrapper-reveal">
                {areas.map((area, i) => {
                    if (area.content){
                        switch (area.content[0].__typename) {
                            case 'ContentfulAddressItemContainer':
                                return (
                                    <>
                                        <ContactFormArea key={area.id} containerData={area} />
                                        <ContactInfoArea key={area.id+1} containerData={area}/>
                                    </>
                                )
                            case 'ContentfulButton':
                                return (<CTAArea key={area.id} containerData={area} />)
                            default:
                                return null
                        }
                    }
                    return null
                })}
            </main>
            <Footer/>
        </Layout>
    )
}
   
export default ContactUsPage

export const pageQuery = graphql`
query ContactUsPageQuery {
  contentfulPage(codeId: {eq: "contact-us-page"}) {
    metadata {
      id
      name {
        codeId
      }
      content {
        content
      }
    }
    contentContainers {
      title
      subTitle
      accentTitle      
      id
      bgPage: backgroundImage {
        fluid(maxWidth: 1920, maxHeight: 400, quality: 100) {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }
      bgArea: backgroundImage {
                fluid(maxWidth: 711, maxHeight: 280, quality: 100) {                       
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
             }
      content {
        ... on ContentfulAddressItemContainer {
          __typename
          id
          email
          address
          codeId
          state
          phone
        }
        ... on ContentfulButton {
          id
          label
          link {
            externalUrl
            page {
              slug
            }
          }
        }
        
      }
    }
  }
}`
