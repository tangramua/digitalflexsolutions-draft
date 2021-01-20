import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
// import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import parse from "html-react-parser";
import { Container } from "react-bootstrap";

import Logo from "../../../../assets/images/logo/logo_white.png";
// import Logo from '../../../../assets/images/logo/dark-logo-160x48.png'
// import gplayImage from '../../../../assets//images/icons/aeroland-button-google-play.jpg'
// import appImage from '../../../../assets//images/icons/aeroland-button-app-store.jpg'
import { Row, Col } from "../../../../components/ui/wrapper";
import Text from "../../../../components/ui/text";
import Anchor from "../../../../components/ui/anchor";
import {AnchorAmp} from "../../../../components/ui/anchor";

// import Button from '../../../../components/ui/button'
import Heading from "../../../../components/ui/heading";
// import Social, { SocialLink } from '../../../../components/ui/social'
import {
  FooterWrap,
  FooterTop,
  FooterWidget,
  LogoWidget,
  TextWidget,
  FooterWidgetList,
  FooterBottom,
} from "./footer.style";

const Footer = ({ copyrightStyle, ...props }) => {
  const siteInfo = useStaticQuery(graphql`
    query FooterSiteQueryAmp {
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
      allContentfulGlobalSettings(
        filter: {
          codeId: { in: ["phone", "address", "siteUrl", "email", "copyright"] }
        }
      ) {
        edges {
          node {
            codeId
            value {
              value
            }
          }
        }
      }
      allContentfulNavigation(filter: { codeId: { eq: "footer-navigation" } }) {
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
  `);

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

  // const { phone, email, address, website } = siteInfo.site.siteMetadata.contact;
  // const { copyright } = siteInfo.site.siteMetadata;

  const phone = siteInfo.allContentfulGlobalSettings
    ? siteInfo.allContentfulGlobalSettings.edges.find(
        (val) => val.node.codeId === "phone"
      )
      ? siteInfo.allContentfulGlobalSettings.edges.find(
          (val) => val.node.codeId === "phone"
        ).node.value.value
      : siteInfo.site.siteMetadata.contact.phone
    : siteInfo.site.siteMetadata.contact.phone;

  const email = siteInfo.allContentfulGlobalSettings
    ? siteInfo.allContentfulGlobalSettings.edges.find(
        (val) => val.node.codeId === "email"
      )
      ? siteInfo.allContentfulGlobalSettings.edges.find(
          (val) => val.node.codeId === "email"
        ).node.value.value
      : siteInfo.site.siteMetadata.contact.email
    : siteInfo.site.siteMetadata.contact.email;

  const address = siteInfo.allContentfulGlobalSettings
    ? siteInfo.allContentfulGlobalSettings.edges.find(
        (val) => val.node.codeId === "address"
      )
      ? siteInfo.allContentfulGlobalSettings.edges.find(
          (val) => val.node.codeId === "address"
        ).node.value.value
      : siteInfo.site.siteMetadata.contact.address
    : siteInfo.site.siteMetadata.contact.address;

  const website = siteInfo.allContentfulGlobalSettings
    ? siteInfo.allContentfulGlobalSettings.edges.find(
        (val) => val.node.codeId === "website"
      )
      ? siteInfo.allContentfulGlobalSettings.edges.find(
          (val) => val.node.codeId === "website"
        ).node.value.value
      : siteInfo.site.siteMetadata.contact.website
    : siteInfo.site.siteMetadata.contact.website;

  const copyright = siteInfo.allContentfulGlobalSettings
    ? siteInfo.allContentfulGlobalSettings.edges.find(
        (val) => val.node.codeId === "copyright"
      )
      ? siteInfo.allContentfulGlobalSettings.edges.find(
          (val) => val.node.codeId === "copyright"
        ).node.value.value
      : siteInfo.site.siteMetadata.copyright
    : siteInfo.site.siteMetadata.copyright;

  // const copyright = siteInfo ?
  //     siteInfo.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'copyright')?
  //         siteInfo.allContentfulGlobalSettings.edges.find(val => val.node.codeId === 'copyright'):
  //         siteInfo.site.siteMetadata.copyright :
  //     siteInfo.site.siteMetadata.copyright

  const {
    facebook,
    twitter,
    instagram,
    linkedin,
  } = siteInfo.site.siteMetadata.social;
  return (
    <FooterWrap {...props}>
      <FooterTop>
        <Container>
          <Row>
            <Col lg={3} sm={6}>
              <FooterWidget responsive={{ medium: { mb: "31px" } }}>
                <LogoWidget>
                  <img src={Logo} alt="Logo" />
                </LogoWidget>
                <TextWidget>
                  We are a technology team focused on adding value quickly and
                  supporting continual improvement.
                </TextWidget>
              </FooterWidget>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <FooterWidget responsive={{ medium: { mb: "31px" } }}>
                <Heading as="h6" mt="-3px" mb="20px">
                  Quick links
                </Heading>
                <FooterWidgetList>
                  <li>
                    <AnchorAmp path="/">Home</AnchorAmp>
                  </li>
                  <li>
                    <AnchorAmp path="/services">Services</AnchorAmp>
                  </li>
                  <li>
                    <AnchorAmp path="/technology">Technology</AnchorAmp>
                  </li>
                  <li>
                    <AnchorAmp path="/about-us">About Us</AnchorAmp>
                  </li>
                  <li>
                    <AnchorAmp path="/contact-as">Contact Us</AnchorAmp>
                  </li>
                </FooterWidgetList>
              </FooterWidget>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <FooterWidget responsive={{ medium: { mb: "27px" } }}>
                <Heading as="h6" mt="-3px" mb="20px">
                  Services
                </Heading>
                <FooterWidgetList>
                  <li>
                    <AnchorAmp path="/">Digital Promotion Services</AnchorAmp>
                  </li>
                  <li>
                    <AnchorAmp path="/">DPA - Digital Process Automation</AnchorAmp>
                  </li>
                  <li>
                    <AnchorAmp path="/">Business Analytics</AnchorAmp>
                  </li>
                  <li>
                    <AnchorAmp path="/">Chatbot Services</AnchorAmp>
                  </li>
                </FooterWidgetList>
              </FooterWidget>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <FooterWidget>
                <Heading as="h6" mt="-3px" mb="20px">
                  Contact Us
                </Heading>
                <TextWidget>
                  {address && (
                    <Text mb="10px">
                      {address}
                    </Text>
                  )}
                  {email && (
                    <Text mb="10px">
                      <AnchorAmp path={`mailto:${email}`}>{email}</AnchorAmp>
                    </Text>
                  )}
                  {phone && (
                    <Text mb="10px">
                      <AnchorAmp path={`tel:${phone}`}>{phone}</AnchorAmp>
                    </Text>
                  )}
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
              {copyright && (
                <Text {...copyrightStyle}>
                  &copy; {new Date().getFullYear()} {parse(copyright)}
                </Text>
              )}
            </Col>
          </Row>
        </Container>
      </FooterBottom>
    </FooterWrap>
  );
};

Footer.propTypes = {
  bgcolor: PropTypes.string,
  reveal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Footer.defaultProps = {
  bgcolor: "#F8F8F8",
  reveal: "false",
  copyrightStyle: {
    responsive: {
      small: {
        pb: "15px",
      },
    },
  },
};

export default Footer;
