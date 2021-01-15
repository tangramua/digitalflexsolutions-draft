import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Heading from '../../../components/ui/heading'
import Anchor from '../../../components/ui/anchor'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import FeatureBox from '../../../components/box-image/layout-one'
import { SectionWrap } from './features-area.style'

const FeaturesArea = (props) => {
    const featuredDataQuery = useStaticQuery(graphql`
        query MainFeatureQueryData {
            contentfulListContainer(codeId: {eq: "featured-flavours-list"}) {
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
                subText
                subLink {
                  page {
                    slug
                  }
                  externalName
                }
              }
        
            indexInfotechnoJson(id: {eq: "infotechno-featured-content"}) {
                title
                subtitle
            }
            allItServicesJson(sort: {order: DESC, fields: id}, filter: {is_featured: {eq: true}}, limit: 3) {
                edges {
                  node {
                    fields{
                        slug
                    }
                    id
                    title
                    excerpt
                    icon {
                      img{
                        childImageSharp{
                            fixed(width:100, height: 108, quality: 100 ){
                                ...GatsbyImageSharpFixed_tracedSVG
                            }
                        }
                      }
                    }
                  }
                }
            }
        }
    `);

    // console.log('featuredDataQuery**', featuredDataQuery)
    const contentData = featuredDataQuery.contentfulListContainer
    const featureSecData = contentData.buttons;
    const featureData = contentData.listItems;
    const headingLinkLabel = contentData.subLink && contentData.subLink.externalName ? contentData.subLink.externalName : 'Take the challenge!'

    // const featureSecData = featuredDataQuery.indexInfotechnoJson;
    // const featureData = featuredDataQuery.allItServicesJson.edges;


    const { featureBoxStyles, linkStyle, headingStyle } = props;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            subtitle={contentData.externalName}
                            title={contentData.title}
                        />
                    </Col>
                </Row>
                <Row>
                    {featureData.map((feature, i) => (
                        <Col lg={4} md={6} key={feature.id}>
                            <FeatureBox
                                {...featureBoxStyles}
                                title={feature.textRef.externalName}
                                imageSrc={i<3 ? featuredDataQuery.allItServicesJson.edges[i].node.icon.img.childImageSharp : featuredDataQuery.allItServicesJson.edges[i-3].node.icon.img.childImageSharp}
                                desc={feature.textRef.summary}
                                path={`/services`}
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
        </SectionWrap>
    )
}

FeaturesArea.propTypes = {
    featureBoxStyles: PropTypes.object,
    headingStyle: PropTypes.object,
    linkStyle: PropTypes.object
}

FeaturesArea.defaultProps = {
    featureBoxStyles: {
        mt: '60px',
        responsive: {
            small: {
                mt: '47px'
            }
        }
    },
    headingStyle: {
        as: 'h3',
        fontSize: '18px',
        fontweight: 500,
        lineHeight: 1.40,
        color: '#333333',
        mt: '60px',
        textalign: 'center',
        responsive: {
            small: {
                mt: '45px'
            }
        }
    },
    linkStyle: {
        layout: 'underline',
        hover: {
            layout: 2
        }
    }
}

export default FeaturesArea;