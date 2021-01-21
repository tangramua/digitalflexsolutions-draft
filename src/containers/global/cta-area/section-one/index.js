import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from "gatsby"
import { MdComment, MdInfoOutline } from "react-icons/md";
import Section, { Container, Row, Col } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Button from '../../../../components/ui/button'
import parse from 'html-react-parser'

const CTASection = ({
    containerData,
    sectionStyle,
    heading,
    text,
    ButtonOne,
    ButtonTwo,
    ...props
}) => {
    // const ctaData = useStaticQuery(graphql `
    //     query CtaImgQuery {
    //         file(relativePath: {eq: "images/bg/cta-bg-2.png"}) {
    //             childImageSharp {
    //                 fluid(maxWidth: 711, maxHeight: 280, quality: 100) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //     }
    // `);
    // const imageData = ctaData.file.childImageSharp.fluid;
    const imageData = containerData && containerData.bgArea ? containerData.bgArea.fluid : null

    let title = containerData && containerData.title ? containerData.title : `Assess your business potentials and find opportunities <span>for bigger success </span> `

    let buttonLabel1 = containerData && containerData.content && containerData.content[0]
        ? containerData.content[0].label
        : `Let 's talk`

    let buttonLink1 = containerData && containerData.content && containerData.content[0]
        ? containerData.content[0].link && containerData.content[0].link.page
        ? containerData.content[0].link.page.slug
        :  containerData.content[0].link.externalUrl
        : `/`

    let buttonLabel2 = containerData && containerData.content && containerData.content[1]
        ? containerData.content[1].label
        : `Get Info`

    let buttonLink2 = containerData && containerData.content && containerData.content[1]
        ? containerData.content[1].link && containerData.content[1].link.page
            ? containerData.content[1].link.page.slug
            :  containerData.content[1].link.externalUrl
        : `/`

    return ( 
        <Section {...sectionStyle} bgImage={imageData}>
            <Container>
                <Row className="align-items-center text-lg-left text-center">
                    <Col xl={8} lg={7}>
                        <Heading {...heading}>{parse(title)}</Heading>
                    </Col> 
                    <Col xl ={4} lg={5} className="text-center">
                        <Button 
                            to={buttonLink1}
                            {...ButtonOne} 
                            icon={<MdComment/>}
                            iconposition="left"
                            icondistance="4px"
                            iconsize="16px">
                            {buttonLabel1}
                        </Button> 
                        <Button 
                            to={buttonLink2}
                            {...ButtonTwo} 
                            icon={<MdInfoOutline/>}
                            iconposition="left"
                            icondistance="4px"
                            iconsize="16px">
                            {buttonLabel1}
                        </Button> 
                    </Col> 
                </Row> 
            </Container> 
        </Section>
    )
}

CTASection.propTypes = {
    heading: PropTypes.object
}

CTASection.defaultProps = {
    sectionStyle: {
        bgColor: '#454545',
        bgposition: 'top 35% right -68px',
        bgsize: 'auto',
        pt: '80px',
        pb: '80px',
        responsive: {
            medium: {
                pt: '60px',
                pb: '60px'
            },
            small: {
                pt: '40px',
                pb: '40px'
            }
        }
    },
    heading: {
        as: 'h3',
        color: '#fff',
        child: {
            color: 'secondary'
        },
        responsive: {
            medium: {
                mb: '10px'
            }
        }
    },
    ButtonOne: {
        skin: 'light',
        m: '7px'
    },
    ButtonTwo: {
        skin: 'secondary',
        m: '7px'
    }
}


export default CTASection