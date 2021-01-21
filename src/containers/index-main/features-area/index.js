import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../../../components/ui/heading'
import Anchor from '../../../components/ui/anchor'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import FeatureBox from '../../../components/box-image/layout-one'
import { SectionWrap } from './features-area.style'

const FeaturesArea = (props) => {
    const { featureBoxStyles, linkStyle, headingStyle, containerData } = props;
    const contentData = containerData && containerData.content ? containerData.content[0] : null
    const featureData = contentData && contentData.listItems ? contentData.listItems : null
    const headingLinkLabel = contentData && contentData.subLink && contentData.subLink.externalName ? contentData.subLink.externalName : 'Take the challenge!'

    return containerData && featureData ? (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            subtitle={containerData.subTitle}
                            title={containerData.title}
                        />
                    </Col>
                </Row>
                <Row>
                    {featureData.map((feature, i) => (
                        <Col lg={4} md={6} key={feature.id}>
                            <FeatureBox
                                {...featureBoxStyles}
                                title={feature.textRef.externalName}
                                imageSrc={feature.icon.fixed.src}
                                desc={feature.textRef.summary}
                                path={feature.linkRef.page.slug}
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
    ) : null
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