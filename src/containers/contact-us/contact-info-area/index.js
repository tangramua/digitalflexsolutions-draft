import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Anchor from '../../../components/ui/anchor'
import {ContactInfoWrapper, InfoBoxWrap, InfoBox} from './contact-info-area.style'

const ContactInfoArea = ({headingStyle, textStyle, phoneStyle, containerData}) => {
    // const contactInfo = useStaticQuery(graphql `
    //     query {
    //         site {
    //             siteMetadata {
    //                 contact {
    //                     addressInfos {
    //                         id
    //                         state
    //                         address
    //                         email
    //                         phone
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);
    // const {addressInfos} = contactInfo.site.siteMetadata.contact;
    const addressInfos = containerData && containerData.content ? containerData.content : null

    const linkStyle = {...textStyle, color: '#fd5b01'}

    return (
        <ContactInfoWrapper>
            <Container>
                <Row>
                    {addressInfos && addressInfos.map(info => (
                        <Col lg={4} key={info.id}>
                            <InfoBoxWrap>
                                {info.state && <Heading {...headingStyle}>{info.state}</Heading>}
                                <InfoBox>
                                    {info.address && <Text {...textStyle}>{info.address}</Text>}
                                    {info.email && <Anchor {...linkStyle} path={`mailto:${info.email}`}>{info.email}</Anchor>}
                                    {info.phone && <Text {...textStyle} {...phoneStyle}>{info.phone}</Text>}
                                </InfoBox>
                            </InfoBoxWrap>
                        </Col>
                    ))}
                </Row>
            </Container>
        </ContactInfoWrapper>
    )
}

ContactInfoArea.propTypes = {
    headingStyle: PropTypes.object,
    textStyle: PropTypes.object,
    phoneStyle: PropTypes.object,
}

ContactInfoArea.defaultProps = {
    headingStyle: {
        as: "h5",
        mb: "20px",
        color: '#1e1c1c'
    },
    textStyle: {
        mb: "7px"
    },
    phoneStyle: {
        fontweight: 800,
        color: 'headingColor'
    }
}

export default ContactInfoArea;