import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
// import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import ServicesArea from '../containers/it-services/services-area'
import ContactArea from '../containers/global/contact-area/contact-two'

// new
import Header from '../containers/layout/header/header-three'
import ClientsArea from '../containers/global/clients-area'

const Services = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="IT Services" />
    <Header/>
    <PageHeader 
        pageContext={pageContext} 
        location={location}
        title="IT Services"
    />
    <main className="site-wrapper-reveal">
        <ClientsArea />
        <ServicesArea/>
        <ContactArea/>
    </main>
    <Footer/>
  </Layout>
)
 
export default Services
 