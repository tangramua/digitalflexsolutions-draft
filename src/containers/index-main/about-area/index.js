import React, { Fragment, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "../../../components/image";
import { Container, Row, Col } from "../../../components/ui/wrapper";
import SectionTitle from "../../../components/ui/section-title";
import AccordionWrap from "../../../components/ui/accordion";
import VideoButton from "../../../components/ui/video-button";
import ModalVideo from "../../../components/ui/modal-video";
import {
  AboutAreaWrap,
  AboutTextBox,
  AboutImageBox,
  ImageBox1,
  ImageBox2,
  ImageBox3,
  ImageBox4,
  MainImageBox,
  VideoBtnWrap,
} from "./about-area.style";
import { Location } from "@reach/router";

const AboutArea = ({ sectionTitleStyle }) => {
  const AboutData = useStaticQuery(graphql`
    query MainAboutQuery {
      contentfulPage(codeId: { eq: "home-page" }) {
        contentContainers {
          title
          subTitle
          accentTitle
          content {
            ... on ContentfulTextsMediaContainer {
              id
              externalName
              textsList {
                externalName
                description {
                  description
                }
              }
              mediaBlock {
                altText
                mainImage {
                  fluid(maxWidth: 570, maxHeight: 350, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                  }
                }
                image1 {
                  fluid(maxWidth: 310, maxHeight: 190, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                  }
                }
                image2 {
                  fluid(maxWidth: 188, maxHeight: 115, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                  }
                }
                image3 {
                  fluid(maxWidth: 188, maxHeight: 115, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                  }
                }
                image4 {
                  fluid(maxWidth: 190, maxHeight: 190, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                  }
                }
              }
            }
          }
        }
      }

      indexProcessingJson(id: { eq: "processing-about-content" }) {
        title
        subtitle
        video_link
      }
    }
  `);
  // console.log('AboutData', AboutData)

  const {
    video_link,
    image1,
    image2,
    image3,
    image4,
    main_image,
  } = AboutData.indexProcessingJson;

  const textList =
    AboutData.contentfulPage.contentContainers[0].content[0].textsList;
  // console.log('textList', textList)
  const title = AboutData.contentfulPage.contentContainers[0].title;
  const subtitle = AboutData.contentfulPage.contentContainers[0].subtitle;

  let video_arr, video_id, video_channel;
  if (video_link) {
    video_arr = video_link.split("=", -1);
    video_id = video_arr[1];
    video_channel = video_link.split(".")[1];
  }
  const [videoOpen, setVideoOpen] = useState(false);
  const modalVideoOpen = () => {
    setVideoOpen(true);
  };

  const modalVideoClose = () => {
    setVideoOpen(false);
  };
  return (
    <Location>
      {({ location }) => (
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
                          {textList.map((el, index) => {
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
                            );
                          })}
                        </Accordion>
                      </AccordionWrap>
                    )}
                  </AboutTextBox>
                </Col>
                <Col lg={6}>
                  <AboutImageBox>
                    {image1 && (
                      <ImageBox1 className="animation_image one">
                        {/* {location.pathname.includes("amp") ? (
                          <amp-img
                            src={image1.childImageSharp.fluid.src}
                            width={
                              image1.childImageSharp.fluid.presentationWidth
                            }
                            height={
                              image1.childImageSharp.fluid.presentationHeight
                            }
                            alt={"data.image.altText"}
                          />
                        ) : (
                          <Image
                            fluid={image1.childImageSharp.fluid}
                            isAbsolute
                            alt="About Banner"
                          />
                        )} */}
                        <Image
                          fluid={image1.childImageSharp.fluid}
                          isAbsolute
                          alt="About Banner"
                        />
                      </ImageBox1>
                    )}
                    {image2 && (
                      <ImageBox2 className="animation_image two">
                        <Image
                          fluid={image2.childImageSharp.fluid}
                          isAbsolute
                          alt="About Banner"
                        />
                      </ImageBox2>
                    )}
                    {main_image && (
                      <MainImageBox>
                        {location.pathname.includes("amp") ? (
                          <amp-img
                            src={main_image.childImageSharp.fluid.src}
                            width={
                              main_image.childImageSharp.fluid.presentationWidth
                            }
                            height={
                              main_image.childImageSharp.fluid
                                .presentationHeight
                            }
                            alt={"data.image.altText"}
                          />
                        ) : (
                          <Image
                            fluid={main_image.childImageSharp.fluid}
                            alt="About Banner"
                          />
                        )}

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
                        <Image
                          fluid={image3.childImageSharp.fluid}
                          isAbsolute
                          alt="About Banner"
                        />
                      </ImageBox3>
                    )}
                    {image4 && (
                      <ImageBox4 className="animation_image four">
                        <Image
                          fluid={image4.childImageSharp.fluid}
                          isAbsolute
                          alt="About Banner"
                        />
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
      )}
    </Location>
  );
};

AboutArea.propTypes = {
  sectionTitleStyle: PropTypes.object,
};

AboutArea.defaultProps = {
  sectionTitleStyle: {
    mb: "40px",
    align: "left",
  },
};

export default AboutArea;
