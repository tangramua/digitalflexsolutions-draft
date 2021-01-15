import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Button from '../../../components/ui/button'
import BoxIcon from '../../../components/box-icon/layout-two'
import { ServicesWrapper, SectionBottom } from './services-area.style'

const Services = ({
  sectionTitleStyle,
  buttonOneStyle,
  buttonTwoStyle }) => {
  const serviceQueryData = useStaticQuery(graphql`
    query MainSecQuery {
    contentfulListContainer(codeId: {eq: "industries-we-serve-list-container"}) {
    externalName
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
      indexAppointmentJson(id: {eq: "appointment-services"}) {
            id
            title
            subtitle
            path
        }
        allItServicesJson(sort: {order: DESC, fields: id}, filter: {is_featured: {eq: true}}) {
          edges {
            node {
              fields {
                slug
              }
              id
              title
              excerpt
              icon {
                svg {
                  publicURL
                }
              }
            }
          }
        }
    }
    `);
  // console.log('serviceQueryData**', serviceQueryData)
  const contentData = serviceQueryData.contentfulListContainer
  const secdata = contentData.buttons;
  const serviceData = contentData.listItems;

  // const secdata = serviceQueryData.indexAppointmentJson;
  // const serviceData = serviceQueryData.allItServicesJson.edges;

  return (
    <ServicesWrapper>
      <Container>
        <Row>
          <Col lg={12}>
            <SectionTitle
              {...sectionTitleStyle}
              subtitle={contentData.externalName}
              title={contentData.title}
            />
          </Col>
        </Row>
        <Row>
          {serviceData.map((feature, i) => {
            return (
              <Col lg={4} md={6} key={feature.id}>
                <BoxIcon
                  id={feature.id}
                  title={feature.textRef.externalName}
                  desc={feature.textRef.summary}
                  icon={i < 6 ? serviceQueryData.allItServicesJson.edges[i].node.icon : serviceQueryData.allItServicesJson.edges[i-6].node.icon}
                  path={`/services`}
                />
              </Col>
            )
          })}
        </Row>
        <Row>
          <Col lg={12}>
            <SectionBottom className="text-center">
              <Button as={Link} to={secdata[0].link.page.slug} {...buttonOneStyle}>{secdata[0].label}</Button>
              <Button as={Link} to={secdata[1].link.page.slug} {...buttonTwoStyle}>{secdata[1].label}</Button>
            </SectionBottom>
          </Col>
        </Row>
      </Container>
    </ServicesWrapper>
  )
}

Services.propTypes = {
  sectionTitleStyle: PropTypes.object,
  buttonOneStyle: PropTypes.object,
  buttonTwoStyle: PropTypes.object
}

Services.defaultProps = {
  sectionTitleStyle: {
    mb: '40px',
    responsive: {
      small: {
        mb: '30px'
      }
    }
  },
  buttonOneStyle: {
    m: '10px',
    hover: '2'
  },
  buttonTwoStyle: {
    m: '10px',
    varient: 'outlined'
  }
}

export default Services;