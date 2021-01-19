import React from "react"
import SEO from "../components/seo"
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
    return (
        <Layout location={location}>
            <SEO title="About Us"/>
            <Header/>
            <main className="site-wrapper-reveal">
                {areas.map((area, i) => {
                    switch (area.content[0].__typename) {
                        case 'ContentfulMedia':
                            return (<PageHeader key={area.codeId} containerData={area} />)
                            break
                        case 'ContentfulTextLinkContainer':
                            return (<AboutArea key={area.codeId} containerData={area} />)
                            break
                        case 'ContentfulStaticListContainer':
                            return (<ServicesArea key={area.codeId} containerData={area} />)
                            break
                        case 'ContentfulSimpleContainer':
                            return (<ResourcesArea key={area.codeId} containerData={area} />)
                            break;
                        case 'ContentfulSimpleListContainer':
                            return (<SolutionsArea key={area.codeId} containerData={area} />)
                            break;
                        case 'ContentfulFunFactListContainer':
                            return (<FunFactArea key={area.codeId} containerData={area} />)
                            break;
                        default:
                            return <div key={i}> </div>
                    }
                })}
                <TestimonialArea/>
                <ClientsArea/>
                <ContactArea/>
            </main>
            <Footer/>
        </Layout>
    )

}

export default AboutPage

export const pageQuery = graphql`
query AboutUsPageQuery {
    contentfulPage(codeId: {eq: "about-us-page"}) {
        contentContainers {
            title
            subTitle
            accentTitle
            codeId
            content {
            ... on ContentfulMedia {
                    __typename
                    codeId
                    media {
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
            
            
          }
        }
    }

}`
