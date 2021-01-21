import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Anchor from '../../../components/ui/anchor'
import ServiceBox from '../../../components/box-image/layout-six'
import {ServicesWrapper} from './services-area.style'

// const Services = ({serviceBoxStyle, linkStyle, headingStyle, containerData}) => {
    // const featuredDataQuery = useStaticQuery(graphql `
    //     query AboutServicesQueryData {
    //         allItServicesJson(sort: {order: DESC, fields: id}, filter: {is_featured: {eq: true}}, limit: 3) {
    //             edges {
    //               node {
    //                 fields {
    //                     slug
    //                 }
    //                 id
    //                 title
    //                 excerpt
    //                 icon {
    //                   img{
    //                     childImageSharp{
    //                         fixed(width:100, height: 108, quality: 100 ){
    //                             ...GatsbyImageSharpFixed_tracedSVG
    //                         }
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //         }
    //     }
    // `);
    // const services = featuredDataQuery.allItServicesJson.edges;


const Services = (props) => {
    const { serviceBoxStyle, linkStyle, headingStyle, containerData } = props
    const contentData = containerData && containerData.content ? containerData.content[0] : null
    const services = contentData && contentData.listItems ? contentData.listItems : null
    const headingLinkLabel = contentData && contentData.subLink && contentData.subLink.externalName ? contentData.subLink.externalName : 'Take the challenge!'
    return containerData ? (
        <ServicesWrapper> 
            <Container>
                <Row>
                    {services && services.map((service, i) => (
                        <Col lg={4} md={6} key={service.id}>
                            <ServiceBox
                                {...serviceBoxStyle}
                                title={service.textRef.externalName}
                                imageSrc={service.icon.fixed.src}
                                desc={service.textRef.summary}
                                path={service.linkRef.page.slug}
                            />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col lg={12}>
                        <Heading {...headingStyle}>{contentData.subText}<Anchor {...linkStyle} path={contentData.subLink.page.slug}>{headingLinkLabel}</Anchor></Heading>
                    </Col>
                </Row>
            </Container>
        </ServicesWrapper>
    ) : null
}

Services.propTypes = {
    serviceBoxStyle: PropTypes.object,
    linkStyle: PropTypes.object,
    headingStyle: PropTypes.object,
}

Services.defaultProps = {
    serviceBoxStyle: {
        mb: "50px"
    },
    linkStyle: {
        layout: 'underline',
        hover: {
            layout: 2
        }
    },
    headingStyle: {
        as: 'h3',
        fontSize: '18px',
        fontweight: 500,
        lineHeight: 1.40,
        color: 'textColor',
        mt: '10px',
        textalign: 'center',
        responsive: {
            small: {
                mt: '5px'
            }
        }
    }
}

export default Services;

// {services && services.map(service => (
//     <Col lg={4} md={6} key={service.node.id} {...serviceBoxStyle}>
//         <ServiceBox
//             title={service.node.title}
//             desc={service.node.excerpt}
//             imageSrc={service.node.icon.img.childImageSharp}
//             path={`/it-service/${service.node.fields.slug}`}
//         />
//     </Col>
// ))}