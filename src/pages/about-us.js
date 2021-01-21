import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from '../containers/layout/layout'
// import Header from '../containers/layout/header/header-one'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../containers/about-us/page-header'
import AboutArea from '../containers/about-us/about-area'
import ServicesArea from '../containers/about-us/services-area'
import ResourcesArea from '../containers/about-us/resources-area'
import SolutionsArea from '../containers/about-us/solutions-area'
import FunFactArea from '../containers/global/funfact-area/section-one'
import TestimonialArea from '../containers/global/testimonial-area/section-one'
import ClientsArea from '../containers/global/clients-area'
import ContactArea from '../containers/global/contact-area/contact-two'
import FeaturesArea from "./index";

const AboutPage = ({ location, data }) => {
    const areas = data.contentfulPage.contentContainers
    const headerContainerData = areas.find(node => node.bgPage && !node.content)

    let titlePage = data.contentfulPage.metadata.find(node => node.name.codeId === 'title')
    let descriptionPage = data.contentfulPage.metadata.find(node => node.name.codeId === 'description')
    titlePage = titlePage ? titlePage.content.content : null
    descriptionPage = descriptionPage ? descriptionPage.content.content : null

    return (
        <Layout location={location}>
            <SEO title={titlePage} description={descriptionPage}/>
            <Header/>
            <PageHeader key={headerContainerData.codeId} containerData={headerContainerData} />
            <main className="site-wrapper-reveal">
                {areas.map((area, i) => {
                    if (area.content){
                        switch (area.content[0].__typename) {
                            case 'ContentfulTextLinkContainer':
                                return (<AboutArea key={area.id} containerData={area} />)
                            case 'ContentfulStaticListContainer':
                                return (<ServicesArea key={area.id} containerData={area} />)
                            case 'ContentfulSimpleContainer':
                                return (<ResourcesArea key={area.id} containerData={area} />)
                            case 'ContentfulSimpleListContainer':
                                return (<SolutionsArea key={area.id} containerData={area} />)
                            case 'ContentfulFunFactListContainer':
                                return (<FunFactArea key={area.id} containerData={area} />)
                            case 'ContentfulCarouselContainer':
                                if (area.content[0].content && area.content[0].content[0].__typename === "ContentfulTestimonialCard"){
                                    return (<TestimonialArea key={area.id} containerData={area} />)
                                } else if (area.content[0].content && area.content[0].content[0].__typename === "ContentfulMediaCard"){
                                    return (<ClientsArea key={area.id} containerData={area} />)
                                } else return null
                            case 'ContentfulMedia':
                                let dataArea = {...area, globalData: data.allContentfulGlobalSettings.edges}
                                return (<ContactArea key={area.id} containerData={dataArea} />)

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

export default AboutPage

export const pageQuery = graphql`
query AboutUsPageQuery {
    contentfulPage(codeId: {eq: "about-us-page"}) {
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
            codeId
            id
            bgPage: backgroundImage {
                fluid(maxWidth: 1920, maxHeight: 570, quality: 100) {
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
                sizes(maxHeight: 520, maxWidth: 1920, quality: 100) {                       
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
            ... on ContentfulMedia {
                    __typename
                    codeId
                    media {
                        fluid(maxHeight: 572, maxWidth: 587, quality: 100) {
                            aspectRatio
                            base64
                            sizes
                            src
                            srcSet
                            srcSetWebp
                            srcWebp
                        }
                    }
                }
            ... on ContentfulSimpleContainer {
                    __typename
                    codeId
                    image {
                        fluid(maxWidth: 436, maxHeight: 369, quality: 100) {
                            aspectRatio
                            base64
                            sizes
                            src
                            srcSet
                            srcSetWebp
                            srcWebp
                        }
                    }
                    button {
                        label
                        link {
                            page {
                                slug
                            }
                        }
                    }
                    backgroundImage{
                        fluid(maxWidth: 780, maxHeight: 746, quality: 100) {
                          aspectRatio
                          base64
                          sizes
                          src
                          srcSet
                          srcSetWebp
                          srcWebp
                        }
                    }
                }
            ... on ContentfulStaticListContainer {
                    __typename
                    codeId
                    subText
                    subLink {
                        page {
                            slug
                        }
                        externalName
                    }
                    listItems {
                        id
                        icon {
                            title
                            fixed(width: 100) {
                                aspectRatio
                                base64
                                src
                                srcSet
                                srcSetWebp
                                srcWebp
                            }
                        }
                        textRef {
                            summary
                            externalName
                        }
                        linkRef {
                          page {
                            slug
                          }
                          externalName
                        }
                    }
                }
            ... on ContentfulTextLinkContainer {
                    __typename
                    codeId
                    link {
                        externalName
                        page {
                            slug
                        }
                    }
                    subHeadText
                    headText
                    description {
                        description
                    }
            }
            ... on ContentfulFunFactListContainer {
              __typename
              codeId
              listItems {
                id
                title
                count
              }
            }
            ... on ContentfulSimpleListContainer {
              __typename
              codeId
              listItems {
                id
                externalName
                summary
              }
            }
            ... on ContentfulCarouselContainer {
              codeId
              __typename
              numberToDisplayAtOneTime
              content {
                
                ... on ContentfulTestimonialCard {
                  __typename
                  codeId
                  authorDesignation
                  authorName
                  authorImage {
                    fixed(width: 90, height: 90, quality: 100) {
                                aspectRatio
                                base64
                                src
                                srcSet
                                srcSetWebp
                                srcWebp
                            }
                  }
                  rating
                  review
                }
                
                ... on ContentfulMediaCard {
                  id
                  altText
                  link {
                    externalUrl
                    page {
                      slug
                    }
                  }
                  hoverImage {
                    fluid {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                    }
                  }
                  image {
                    fluid {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                    }
                  }
                }
                
              }
            }
            
            
            
          }
        }
    }
    
    allContentfulGlobalSettings(filter: {codeId: {in: ["email", "phone", "rating", "customers-number", "clients-number"]}}) {
    edges {
      node {
        codeId
        internalName
        value {
          value
        }
      }
    }
  }

}`
