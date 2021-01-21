import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import ContactForm from '../../../components/forms/contact-form'
import {ContactFormWrapper, LeftBox} from './contact-form-area.style'
import parse from "html-react-parser";

const ContactFormArea = ({headingStyle, textStyle, containerData}) => {
    let headText = containerData && containerData.title ? containerData.title : `To make requests for <br/> further information, <br/> <span>contact us</span> via our social channels.`
    let text = containerData && containerData.subTitle ? containerData.subTitle : `We just need a couple of hours! No more than 2 working days since receiving your issue ticket`
    headingStyle.color = '#1e1c1c'

    return (
        <ContactFormWrapper>
            <Container>
                <Row alignitems="center">
                    <Col lg={6}>
                        <LeftBox>
                            <Heading {...headingStyle}>{parse(headText)}</Heading>
                            <Text {...textStyle}>{text}</Text>
                        </LeftBox>
                    </Col>
                    <Col lg={6}>
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
        </ContactFormWrapper>
    )
}

ContactFormArea.propTypes = {
    headingStyle: PropTypes.object,
    textStyle: PropTypes.object
}

ContactFormArea.defaultProps = {
    headingStyle: {
        as: "h3",
        position: "relative",
        pl: '34px',
        lineheight: 1.67,
        fontweight: 600,
        child: {
            color: 'primary'
        },
        layout: 'quote'
    },
    textStyle: {
        mt: '15px',
        fontSize: '18px',
        ml: '34px',
        color: '#696969'
    }
}

export default ContactFormArea;