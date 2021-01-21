import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Button from '../../../components/ui/button'
import Image from '../../../components/image'
import {ResourcesWrapper, LeftBox, ImageBox} from './resources-area.style'

const Resources = ({sectionTitleStyle, containerData}) => {
    const title = containerData.accentTitle ? `${containerData.subTitle} <span>${containerData.accentTitle}</span>` : containerData.subTitle
    const subtitle = containerData.title
    const buttonLabel = containerData.content[0].button.label
    const download_link = containerData.content[0].button.link.page.slug
    const image = containerData.content[0].image

    const ImageData = containerData.content[0].backgroundImage.fluid

    return (
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
    )
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