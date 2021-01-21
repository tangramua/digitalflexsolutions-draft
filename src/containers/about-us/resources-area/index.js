import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Button from '../../../components/ui/button'
import Image from '../../../components/image'
import {ResourcesWrapper, LeftBox, ImageBox} from './resources-area.style'

const Resources = ({sectionTitleStyle, containerData}) => {
    const title = containerData && containerData.subTitle
        ? containerData.accentTitle
        ? `${containerData.subTitle} <span>${containerData.accentTitle}</span>`
        : containerData.subTitle
        : null
    const subtitle = containerData && containerData.title ? containerData.title : null
    const buttonLabel = containerData && containerData.content && containerData.content[0].button && containerData.content[0].button.label
        ? containerData.content[0].button.label
        : null

    const download_link = containerData && containerData.content && containerData.content[0].button.link
        ? containerData.content[0].button.link.page
        ? containerData.content[0].button.link.page.slug
            : containerData.content[0].button.link.externalUrl
        : null
    const image = containerData && containerData.content && containerData.content[0].image ? containerData.content[0].image : null

    const ImageData = containerData && containerData.content && containerData.content[0].backgroundImage ? containerData.content[0].backgroundImage.fluid : null

    return containerData ? (
        <ResourcesWrapper fluid={ImageData}>
            <Container fluid>
                <Row alignitems="center">
                    <Col lg={{span: 6, order: 1}} xs={{order: 2, span: 12}}>
                        <LeftBox>
                            {(title || subtitle) && (
                                <SectionTitle
                                    {...sectionTitleStyle}
                                    title={title}
                                    subtitle={subtitle}
                                />
                            )}
                            {download_link && <Button to={download_link} hover="2">{buttonLabel}</Button>}
                        </LeftBox>
                    </Col>
                    <Col lg={{span: 6, order: 2}} xs={{order: 1, span: 12}}>
                        {image.fluid && (
                            <ImageBox>
                                <Image fluid={image.fluid}
                                       presentationHeight ={369}
                                       presentationWidth={436}
                                       alt={title}/>
                            </ImageBox>
                        )}
                    </Col>
                </Row>
            </Container>
        </ResourcesWrapper>
    ) : null
}

// return (
//     <ResourcesWrapper fluid={ImageData}>
//         <Container fluid>
//             <Row alignitems="center">
//                 <Col lg={{span: 6, order: 1}} xs={{order: 2, span: 12}}>
//                     <LeftBox>
//                         {(title || subtitle) && (
//                             <SectionTitle
//                                 {...sectionTitleStyle}
//                                 title={title}
//                                 subtitle={subtitle}
//                             />
//                         )}
//                         {download_link && <Button to={download_link} hover="2">{buttonLabel}</Button>}
//                     </LeftBox>
//                 </Col>
//                 <Col lg={{span: 6, order: 2}} xs={{order: 1, span: 12}}>
//                     {image.childImageSharp.fluid && (
//                         <ImageBox>
//                             <Image fluid={image.childImageSharp.fluid}
//                                    alt={title}/>
//                         </ImageBox>
//                     )}
//                 </Col>
//             </Row>
//         </Container>
//     </ResourcesWrapper>
// )

Resources.propTypes = {
    sectionTitleStyle: PropTypes.object
}

Resources.defaultProps = {
    sectionTitleStyle: {
        align: "left",
        mb: "30px",
        responsive: {
            medium: {
                align: "center"
            }
        }
    }
}

export default Resources;