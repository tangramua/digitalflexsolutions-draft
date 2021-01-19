import React from "react"
import SEO  from "../../components/seo"
import SEOAMP  from "../../components/seo-amp"
import Layout from '../../containers/layout/layout'

// new 2
import Header from '../../containers/layout/header/header-three'
// import Header from '../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import HeroArea from '../../containers/index-main/hero-area'
import AboutArea from '../../containers/index-main/about-area'
import FeaturesArea from '../../containers/index-main/features-area'
import ServicesArea from '../../containers/index-main/services-area'
import {Col} from "../../components/ui/wrapper/col";


// //new
// import Header from '../containers/layout/header/header-three'
// import Footer from '../containers/layout/footer/footer-one'
// import HeroArea from '../containers/index-processing/hero-area'
// import AboutArea from '../containers/index-processing/about-area'
// // import FeaturesArea from '../containers/index-processing/features-area'
// import FeaturesArea from '../containers/index-infotechno/features-area'
// // import FunFactArea from '../containers/global/funfact-area/section-three'
// // import CTAArea from '../containers/index-processing/cta-area'
// // import ServicesArea from '../containers/index-processing/services-area'
// // import TestimonialArea from '../containers/global/testimonial-area/section-one'
// // import ClientsArea from '../containers/global/clients-area'
// // import ContactArea from '../containers/global/contact-area/contact-three'
// import ServicesArea from '../containers/index-appointment/services-area'


const IndexPage = ({location, data}) => {
    // console.log('data**', data)
    const areas = data.contentfulPage.contentContainers

    return(
    <Layout location={location}>
        <SEO title="Home" />
        <Header />
        <main className="site-wrapper-reveal">
            <HeroArea />
            {areas.map((area, i) => {
                switch (area.content[0].__typename) {
                    case 'ContentfulTextsMediaContainer':
                        return (<AboutArea containerData={area} />)
                        break
                    case 'ContentfulListContainer':
                        return (<ServicesArea containerData={area} />)
                        break
                    case 'ContentfulStaticListContainer':
                        return (<FeaturesArea containerData={area} />)
                        break;
                    default:
                    return <div>OK</div>
                }
            })}
        </main>
        <Footer />
    </Layout>
    )
}

// const IndexPage = ({ location }) => (
//     <Layout location={location}>
//         <SEO title="Processing" />
//         <Header />
//         <main className="site-wrapper-reveal">
//             <HeroArea />
//             <AboutArea />
//             <ServicesArea/>
//             <FeaturesArea />
//         </main>
//         <Footer />
//     </Layout>
// )



export default IndexPage

// new
export const pageQuery = graphql`
  query HomePageQueryAmp {
  contentfulPage(codeId: {eq: "home-page"}) {
    contentContainers {
      title
      subTitle
      accentTitle
      codeId
      content {
        ... on ContentfulListContainer {
          id
          __typename
          codeId
          externalName
            title
            listItems {
              externalName
              icon {
                title
                file {
                  url
                  contentType
                }
                contentful_id
              }
              textRef {
                summary
                externalName
              }
              id
            }
            codeId
            buttons {
              label
              link {
                page {
                  slug
                }
              }
            }
        }
        ... on ContentfulTextsMediaContainer {
          id
          __typename
          codeId
            id
          externalName
          textsList {
            externalName
            description {
              description
            }
          }
          mediaBlock {
            altText
            mainImage {            
                fluid(maxWidth: 570, maxHeight: 350, quality: 100) {
                ...GatsbyContentfulFluid_withWebp
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
            }
            image1 {            
                fluid(maxWidth: 310, maxHeight: 190, quality: 100) {
                ...GatsbyContentfulFluid_withWebp
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
            }
            image2 {            
                fluid(maxWidth: 188, maxHeight: 115, quality: 100) {
                ...GatsbyContentfulFluid_withWebp
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
            }
            image3 {            
                fluid(maxWidth: 188, maxHeight: 115, quality: 100) {
                ...GatsbyContentfulFluid_withWebp
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
            }
            image4 {            
                fluid(maxWidth: 190, maxHeight: 190, quality: 100) {
                ...GatsbyContentfulFluid_withWebp
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
        ... on ContentfulStaticListContainer {
          id
          __typename
          codeId
              id
          listItems {
            externalName
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
              id
             }
             codeId                
             subText
             subLink {
                  page {
                    slug
                  }
                  externalName
             }
              
        }
      } 
        
    }
  }
  }`





// original
// import React from "react"
// import SEO from "../components/seo"
// import Layout from '../containers/layout/layout'
// import Header from '../containers/layout/header/header-four'
// import Footer from '../containers/layout/footer/footer-two'
// import Hero from '../containers/landing/hero'
// import Feature from '../containers/landing/feature'
// import Demos from '../containers/landing/demo-area'
// import InnerDemos from '../containers/landing/inner-demo-area'
// import CaseStudy from '../containers/landing/case-study'
// import HeaderLayout from '../containers/landing/header-layout'
// import BlogLayout from '../containers/landing/blog-layout'
// import Plugins from '../containers/landing/plugins'
// import ExtraFeature from '../containers/landing/extra-features'
//
// const IndexPage = ({location}) => (
//   <Layout location={location}>
//     <SEO/>
//     <Header transparent/>
//     <main className="site-wrapper-reveal">
//       <Hero/>
//       <Feature/>
//       <Demos/>
//       <InnerDemos/>
//       <CaseStudy/>
//       <HeaderLayout/>
//       <BlogLayout/>
//       <Plugins/>
//       <ExtraFeature/>
//     </main>
//     <Footer/>
//   </Layout>
// )
//
// export default IndexPage
