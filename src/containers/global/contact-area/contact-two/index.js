import React from 'react'
import PropTypes from 'prop-types'
import { MdPhone, MdEmail } from "react-icons/md";
import {Container, Row, Col, Box} from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Text from '../../../../components/ui/text'
import Image from '../../../../components/image'
import Ratings from '../../../../components/ratings'
import BoxIcon from '../../../../components/box-icon/layout-four'
import Anchor from '../../../../components/ui/anchor'
import {SectionWrap, ImageBox, ContactInfoBox} from './contact.style'

const ContactArea = ({sectionStyle, imgBoxStyle, rightBoxStyle, boxIconStyle, ratingStyle, textStyle, containerData}) => {
    let bg_image, contact_image, rating, clients, customers, phone, email

    if (containerData){
        bg_image = containerData.bgArea ? containerData.bgArea.sizes
            : containerData.backgroundImage
            ? containerData.backgroundImage.fluid
                : null
        contact_image = containerData.content && containerData.content[0].media ? containerData.content[0].media.fluid : null

        rating = containerData.globalData ? containerData.globalData.find(el => el.node.codeId === 'rating') : null
        clients = containerData.globalData ? containerData.globalData.find(el => el.node.codeId === 'clients-number') : null
        customers = containerData.globalData ? containerData.globalData.find(el => el.node.codeId === 'customers-number') : null
        phone = containerData.globalData ? containerData.globalData.find(el => el.node.codeId === 'phone') : null
        email = containerData.globalData ? containerData.globalData.find(el => el.node.codeId === 'email') : null

        rating = rating ? rating.node.value.value : null
        clients = clients ? clients.node.value.value : null
        customers = customers ? customers.node.value.value : null
        phone = phone ? phone.node.value.value : null
        email = email ? email.node.value.value : null
    }


    return (
        <SectionWrap fluid={bg_image}>
            <Container>
                <Row alignitems="center">
                    <Col lg={7}>
                        <ImageBox>
                            <Image fluid={contact_image} presentationHeight={572}
                            presentationWidth={587} alt="Contact Us"/>
                        </ImageBox>
                    </Col>
                    <Col lg={4} ml="auto">
                        <ContactInfoBox>
                            <Box textalign="center">
                                {rating && <Heading as="h3">{`${rating}/5.0`}</Heading>}
                                <Ratings {...ratingStyle} rating={+rating}/>
                                <Text {...textStyle}>by {customers}+ customers for {clients}+ clients</Text>
                            </Box>
                            <Box>
                                <Anchor display="block" path={`tel:${phone}`}>
                                    <BoxIcon
                                        {...boxIconStyle}
                                        icon={<MdPhone/>}
                                        heading="Call for advice now!"
                                        title={phone}
                                    />
                                </Anchor>
                                <Anchor display="block" path={`mailto:${email}`}>
                                    <BoxIcon
                                        {...boxIconStyle}
                                        icon={<MdEmail/>}
                                        heading="Say hello"
                                        title={email}
                                    />
                                </Anchor>
                            </Box>
                        </ContactInfoBox>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

ContactArea.propTypes = {
    sectionStyle: PropTypes.object
}
 
ContactArea.defaultProps = {
    boxIconStyle: {
        wrapperStyle: {
            alignitems: 'center',
            mt: '55px'
        },
        iconStyle: {
            fontSize: '40px',
            mr: "25px",
            fontweight: 300
        },
        titleStyle: {
            fontSize: '34px',
            mb: "0",
            fontweight: 700,
            lineHeight: 1.17,
            responsive: {
                large: {
                    fontSize: "24px"
                }
            }
        }
    },
    ratingStyle: {
        mt: '10px',
        mb: '10px'
    },
    textStyle: {
        fontSize: '18px'
    }
}

export default ContactArea;