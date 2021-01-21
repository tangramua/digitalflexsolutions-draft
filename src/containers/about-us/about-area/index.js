import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import parse from 'html-react-parser'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import SectionTitle from '../../../components/ui/section-title'
import {AboutWrapper, LeftBox, RightBox} from './about-area.style'
import styled from "styled-components";

export const SubHeading = styled.div`
    font-size: ${props => props.fontSize};
    `

const AboutDesc = ({sectionTitleStyle, headingStyle, textStyle, descStyle, btnStyle, containerData}) => {
    const title =  containerData && containerData.title
    ? containerData.accentTitle
        ? `${containerData.title} <span>${containerData.accentTitle}</span>`
        : containerData.title
        : null
    const heading = containerData && containerData.content && containerData.content[0].headText ? containerData.content[0].headText : null
    const text = containerData && containerData.content && containerData.content[0].subHeadText ? containerData.content[0].subHeadText : null

    const desc = containerData && containerData.content && containerData.content[0].description
    ? containerData.content[0].description.description
        : null
    const path = containerData && containerData.content && containerData.content[0].link
        ? containerData.content[0].link.page && containerData.content[0].link.page.slug
        ? containerData.content[0].link.page.slug
            : containerData.content[0].link.externalUrl
        : null
    const textLink = containerData && containerData.content && containerData.content[0].link
    ? containerData.content[0].link.externalName
        : null

    return containerData ? (
        <AboutWrapper>
            <Container>
                <Row>
                    <Col lg={7} md={9} ml="auto" mr="auto">
                        <SectionTitle
                            {...sectionTitleStyle}
                            title={title}
                            subtitle={containerData.subTitle}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 4, offset: 1}}>
                        <LeftBox>
                            {heading && <Heading {...headingStyle}>{parse(heading)}</Heading>}
                            {text && <SubHeading {...textStyle}>{parse(text)}</SubHeading>}
                        </LeftBox>
                    </Col>
                    <Col lg={{span: 5, offset: 1}}>
                        <RightBox>
                            {desc && <Text {...descStyle}>{parse(desc)}</Text>}
                            {path && <Button {...btnStyle} to={path}>{textLink}</Button>}
                        </RightBox>
                    </Col>
                </Row>
            </Container>
        </AboutWrapper>
    ) : null
}

AboutDesc.propTypes = {
    sectionStyle: PropTypes.object,
    sectionTitleStyle: PropTypes.object,
    headingStyle: PropTypes.object,
    textStyle: PropTypes.object,
    descStyle: PropTypes.object,
}

AboutDesc.defaultProps = {
    sectionTitleStyle: {
        mb: '70px',
        responsive: {
            small: {
                mb: '30px'
            }
        }
    },
    headingStyle: {
        as: "h3",
        layout: "highlight",
        maxwidth: "330px",
        mb: "24px",
        responsive: {
            medium: {
                maxwidth: "100%"
            }
        }
    },
    textStyle: {
        as: "h4",
        fontSize: "20px"
    },
    descStyle: {
        fontSize: "18px",
        lineHeight: 1.67,
        mb: "23px"
    },
    btnStyle: {
        varient: "texted",
        iconname: "far fa-long-arrow-right",
        hover: "false"
    }
}

export default AboutDesc;