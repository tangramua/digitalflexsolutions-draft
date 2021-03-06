import React, { Fragment, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Image from '../../../components/image'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import AccordionWrap from '../../../components/ui/accordion'
import VideoButton from '../../../components/ui/video-button'
import ModalVideo from '../../../components/ui/modal-video'
import {
    AboutAreaWrap,
    AboutTextBox,
    AboutImageBox,
    ImageBox1,
    ImageBox2,
    ImageBox3,
    ImageBox4,
    MainImageBox,
    VideoBtnWrap
} from './about-area.style'

const AboutArea = ({ sectionTitleStyle, containerData }) => {
    // const AboutData = useStaticQuery(graphql`
    //     query MainAboutQuery {
    //         indexProcessingJson(id: {eq: "processing-about-content"}) {
    //             title
    //             subtitle
    //             video_link
    //         }
    //     }
    // `);

    // const { video_link, image1, image2, image3, image4, main_image } = AboutData.indexProcessingJson;
    // const { video_link } = AboutData.indexProcessingJson;

    const mediaBlock = containerData && containerData.content && containerData.content[0].mediaBlock
        ? containerData.content[0].mediaBlock
        : null

    const image1 = mediaBlock && mediaBlock.image1 ? mediaBlock.image1 : null
    const image2 = mediaBlock && mediaBlock.image2 ? mediaBlock.image2 : null
    const image3 = mediaBlock && mediaBlock.image3 ? mediaBlock.image3 : null
    const image4 = mediaBlock && mediaBlock.image4 ? mediaBlock.image4 : null
    const main_image = mediaBlock && mediaBlock.mainImage ? mediaBlock.mainImage : null

    const textList = containerData && containerData.content && containerData.content[0].textsList ? containerData.content[0].textsList : null
    const title = containerData && containerData.title ? containerData.title : null
    const subtitle = containerData && containerData.subtitle ? containerData.subtitle : null

    const video_link = mediaBlock && mediaBlock.videoLink ? mediaBlock.videoLink.externalUrl : null

    let video_arr, video_id, video_channel;
    if (video_link) {
        video_arr = video_link.split('=', -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }

    const [videoOpen, setVideoOpen] = useState(false);
    const modalVideoOpen = () => {
        setVideoOpen(true)
    }

    const modalVideoClose = () => {
        setVideoOpen(false)
    }
    return containerData ? (
        <Fragment>
            <AboutAreaWrap>
                <Container fluid>
                    <Row alignitems="center">
                        <Col lg={6}>
                            <AboutTextBox>
                                <SectionTitle
                                    {...sectionTitleStyle}
                                    title={title}
                                    subtitle={subtitle}
                                />
                                {textList && (
                                    <AccordionWrap>
                                        <Accordion allowZeroExpanded preExpanded={[0]}>
                                            {
                                                textList.map((el, index) => {
                                                    return (
                                                        <AccordionItem id={el.id} key={index}>
                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    {el.externalName}
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                <p>{el.description.description}</p>
                                                            </AccordionItemPanel>
                                                        </AccordionItem>
                                                    )
                                                })
                                            }
                                        </Accordion>
                                    </AccordionWrap>
                                )}
                            </AboutTextBox>
                        </Col>
                        <Col lg={6}>
                            <AboutImageBox>
                                {image1 && (
                                    <ImageBox1 className="animation_image one">
                                        <Image fluid={image1.fluid}
                                               presentationHeight ={190}
                                               presentationWidth={310} isAbsolute alt="About Banner" />
                                    </ImageBox1>
                                )}
                                {image2 && (
                                    <ImageBox2 className="animation_image two">
                                        <Image fluid={image2.fluid} presentationHeight ={113}
                                               presentationWidth={184} isAbsolute alt="About Banner" />
                                    </ImageBox2>
                                )}
                                {main_image && (
                                    <MainImageBox>
                                        <Image fluid={main_image.fluid}
                                               presentationHeight ={350}
                                               presentationWidth={570} alt="About Banner" />
                                        {video_link && (
                                            <VideoBtnWrap>
                                                <VideoButton
                                                    skin="primary"
                                                    onClick={modalVideoOpen}
                                                />
                                            </VideoBtnWrap>
                                        )}
                                    </MainImageBox>
                                )}
                                {image3 && (
                                    <ImageBox3 className="animation_image three">
                                        <Image fluid={image3.fluid} resentationHeight ={115}
                                               presentationWidth={188} isAbsolute alt="About Banner" />
                                    </ImageBox3>
                                )}
                                {image4 && (
                                    <ImageBox4 className="animation_image four">
                                        <Image fluid={image4.fluid} resentationHeight ={190}
                                               presentationWidth={190} isAbsolute alt="About Banner" />
                                    </ImageBox4>
                                )}
                            </AboutImageBox>
                        </Col>
                    </Row>
                </Container>
            </AboutAreaWrap>
            <ModalVideo
                channel={video_channel}
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
    ) : null
}

AboutArea.propTypes = {
    sectionTitleStyle: PropTypes.object
}

AboutArea.defaultProps = {
    sectionTitleStyle: {
        mb: '40px',
        align: 'left'
    }
}

export default AboutArea;