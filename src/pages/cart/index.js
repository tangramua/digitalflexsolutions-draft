import React from "react"
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
// import Header from '../containers/layout/header/header-one'
import Header from '../../containers/layout/header/header-three'
import Footer from '../../containers/layout/footer/footer-one'


const Cart = ({ data, location }) => (
  <Layout location={location}>
    <SEO title="About Us" />
    <Header />
    {console.log(data.file.childImageSharp.fixed)}
    <main className="site-wrapper-reveal">
        Hello
    </main>
    <Footer />
  </Layout>
)

export default Cart

export const query = graphql`
query {
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