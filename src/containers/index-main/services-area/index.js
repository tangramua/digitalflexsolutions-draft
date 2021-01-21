import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Button from '../../../components/ui/button'
import BoxIcon from '../../../components/box-icon/layout-two'
import { ServicesWrapper, SectionBottom } from './services-area.style'

const Services = ({
  sectionTitleStyle,
  buttonOneStyle,
  buttonTwoStyle,
  containerData}) => {

  const contentData = containerData && containerData.content ? containerData.content[0] : null
  const secdata = contentData && contentData.buttons ? contentData.buttons : null
  const serviceData = contentData && contentData.listItems ? contentData.listItems : null

  return containerData && serviceData ? (
    <ServicesWrapper>
      <Container>
        <Row>
          <Col lg={12}>
            <SectionTitle
              {...sectionTitleStyle}
              subtitle={containerData.subTitle}
              title={containerData.title}
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
                  path={`/services`}
                  icon={feature.icon.file.url}
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
  ) : null
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