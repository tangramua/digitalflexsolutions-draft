import React from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
// import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import parse from 'html-react-parser'
import { Container } from 'react-bootstrap'
import Logo from '../../../../assets/images/logo/dark-logo-160x48.png'
// import gplayImage from '../../../../assets//images/icons/aeroland-button-google-play.jpg'
// import appImage from '../../../../assets//images/icons/aeroland-button-app-store.jpg'
import { Row, Col } from '../../../../components/ui/wrapper'
import Text from '../../../../components/ui/text'
import Anchor from '../../../../components/ui/anchor'
// import Button from '../../../../components/ui/button'
import Heading from '../../../../components/ui/heading'
// import Social, { SocialLink } from '../../../../components/ui/social'
import {
    FooterWrap,
    FooterTop,
    FooterWidget,
    LogoWidget,
    TextWidget,
    FooterWidgetList,
    FooterBottom
} from './footer.style'

const Footer = ({ copyrightStyle, ...props }) => {
    const siteInfo = useStaticQuery(graphql`
        query FooterSiteQuery {
  site {
    siteMetadata {
      copyright
      contact {
        phone
        email
        address
        website
      }
      social {
        facebook
        twitter
        instagram
        linkedin
      }
    }
  }
  allContentfulNavigation(filter: {codeId: {eq: "footer-navigation"}}) {
    edges {
      node {
        internalName
        navigationItems {
          externalName
          id
          navigationLinks {
            ... on ContentfulLink {
              id
              externalName
              page {
                slug
              }
            }
          }
        }
      }
    }
  }
}
    `)

    // const siteInfo = useStaticQuery(graphql`
    //     query FooterSiteQuery {
    //         site {
    //             siteMetadata {
    //                 copyright
    //                 contact {
    //                     phone
    //                     email
    //                     address
    //                     website
    //                 }
    //                 social {
    //                     facebook
    //                     twitter
    //                     instagram
    //                     linkedin
    //                 }
    //             }
    //         }
    //     }
    // `)
    // console.log('siteInfo', siteInfo)

    const { phone, email, address, website } = siteInfo.site.siteMetadata.contact;
    const { copyright } = siteInfo.site.siteMetadata;
    const { facebook, twitter, instagram, linkedin } = siteInfo.site.siteMetadata.social;
    return (
        <FooterWrap {...props}>
            <FooterTop>
                <Container>
                    <Row>
                        <Col lg={3} sm={6}>
                            <FooterWidget responsive={{ medium: { mb: '31px' } }}>
                                <LogoWidget>
                                    <img src={Logo} alt="Logo" />
                                </LogoWidget>
                                <TextWidget>
                                    We are a technology team focused on adding value quickly and supporting continual improvement.
                                </TextWidget>
                            </FooterWidget>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <FooterWidget responsive={{ medium: { mb: '31px' } }}>
                                <Heading as="h6" mt="-3px" mb="20px">Quick links</Heading>
                                <FooterWidgetList>
                                    <li><Anchor path="/" color="footerTextColor" hover={{color: 'linkcolor'}} hoverstyle="2">Home</Anchor></li>
                                    <li><Anchor path="/services" color="footerTextColor" hover={{color: 'linkcolor'}} hoverstyle="2">Services</Anchor></li>
                                    <li><Anchor path="/technology" color="footerTextColor" hover={{color: 'linkcolor'}} hoverstyle="2">Technology</Anchor></li>
                                    <li><Anchor path="/about-us" color="footerTextColor" hover={{color: 'linkcolor'}} hoverstyle="2">About Us</Anchor></li>
                                    <li><Anchor path="/contact-as" color="footerTextColor" hover={{color: 'linkcolor'}} hoverstyle="2">Contact Us</Anchor></li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <FooterWidget responsive={{ medium: { mb: '27px' } }}>
                                <Heading as="h6" mt="-3px" mb="20px">Services</Heading>
                                <FooterWidgetList>
                                    <li><Anchor path="/" color="footerTextColor" hover={{color: 'linkcolor'}} hoverstyle="2">Digital Promotion Services</Anchor></li>
                                    <li><Anchor path="/" color="footerTextColor" hover={{color: 'linkcolor'}} hoverstyle="2">DPA - Digital Process Automation</Anchor></li>
                                    <li><Anchor path="/" color="footerTextColor" hover={{color: 'linkcolor'}} hoverstyle="2">Business Analytics</Anchor></li>
                                    <li><Anchor path="/" color="footerTextColor" hover={{color: 'linkcolor'}} hoverstyle="2">Chatbot Services</Anchor></li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <FooterWidget>
                                <Heading as="h6" mt="-3px" mb="20px">Contact Us</Heading>
                                <TextWidget>
                                    {address && <Text mb="10px" color="footerTextColor">{address}</Text>}
                                    {email && <Text mb="10px"><Anchor path={`mailto:${email}`} color="footerTextColor" hover={{color: 'linkcolor'}} hoverstyle="2">{email}</Anchor></Text>}
                                    {phone && <Text mb="10px"><Anchor path={`tel:${phone}`}  color="footerTextColor" hover={{color: 'linkcolor'}} hoverstyle="2">{phone}</Anchor></Text>}
                                    {website && <Text mb="10px"><Anchor path={website} hover={{color: 'linkcolor'}} color="footerTextColor" hoverstyle="2">{website}</Anchor></Text>}
                                </TextWidget>
                            </FooterWidget>
                        </Col>
                    </Row>
                </Container>
            </FooterTop>
            <FooterBottom>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-left">
                            {copyright && <Text {...copyrightStyle} color="footerTextColor">&copy; {new Date().getFullYear()} {parse(copyright)}</Text>}
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </FooterWrap>
    )
}

Footer.propTypes = {
    bgcolor: PropTypes.string,
    reveal: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

Footer.defaultProps = {
    bgcolor: '#F8F8F8',
    reveal: 'false',
    copyrightStyle: {
        responsive: {
            small: {
                pb: '15px'
            }
        }
    }
};

export default Footer
