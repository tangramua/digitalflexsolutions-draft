import React from "react"
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
// import Header from '../containers/layout/header/header-one'
import Header from '../../../containers/layout/header/header-three'
import Footer from '../../../containers/layout/footer/footer-one'


const Cart = ({ location, data }) => {
  const {src, srcWebp, width, height} = data?.file?.childImageSharp?.fixed
  console.log(data)

  return (
    <Layout location={location}>
        <SEO title="About Us" />
        <Header />
        <main className="site-wrapper-reveal">
        <amp-img src={src} width={width} height={height} alt={"data.image.altText"} />
        </main>
        <Footer />
      </Layout>
  )
  
}

export default Cart


export const query = graphql`
{
  file (absolutePath: {regex: "/favicon.png/"}) {
          childImageSharp  {
           fixed (width: 50, height: 50, quality: 95){
             width
             height
             src
             srcWebp
           }
         }
 }
 }
`