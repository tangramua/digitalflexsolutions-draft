import React from 'react';
import PropTypes from 'prop-types'
import {Container, Row, Col} from '../../../../components/ui/wrapper'
import SectionTitle from '../../../../components/ui/section-title'
import SwiperSlider from '../../../../components/ui/swiper'
import Testimonial from '../../../../components/testimonial/layout-one'
import {TestimonialWrapper} from './section.style'

const TestimonialSection = ({sectionTitleStyle, slider, sliderStyle, containerData}) => {
    const testimonials = containerData.content[0].content

    const title =  containerData.accentTitle ? `${containerData.title} <span>${containerData.accentTitle}</span>` : containerData.title
    const subTitle =  containerData.subTitle ? containerData.subTitle : 'TESTIMONIALS'

    return (
        <TestimonialWrapper>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            title={title}
                            subtitle={subTitle}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider {...sliderStyle} settings={slider}>
                            {testimonials.map(testimonial => (
                                <div className="item" key={testimonial.codeId}>
                                    <Testimonial
                                        authorName={testimonial.authorName}
                                        authroRole={testimonial.authorDesignation}
                                        authorImg={testimonial.authorImage.fixed.src}
                                        rating={testimonial.rating}
                                        review={testimonial.review}
                                    />
                                </div>
                            ))}
                        </SwiperSlider>
                    </Col>
                </Row>
            </Container>
        </TestimonialWrapper>
    )
}
 
TestimonialSection.propTypes = {
    sliderStyle: PropTypes.object,
    sectionTitleStyle: PropTypes.object,
    slider: PropTypes.object
}

TestimonialSection.defaultProps = {
    sectionTitleStyle: {
        mb: '40px',
        responsive: {
            small: {
                mb: '30px'
            }
        }
    },
    slider: {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView : 1
            },
            992:{
                slidesPerView : 2
            }
        }
    },
    sliderStyle: {
        pagination: {
            mt: '28px'
        }
    },
}

export default TestimonialSection;
