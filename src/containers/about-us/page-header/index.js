import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import {PageHeaderWrap} from './page-header.style'

const PageHeader = ({sectionStyle, titleStyle, descStyle, containerData}) => {
    const title = containerData.title
    const desc = containerData.subTitle
    const imageData = containerData.bgPage.fluid

    return (
        <PageHeaderWrap fluid={imageData}>
            <Container>
                <Row textalign="center">
                    <Col lg={8} ml="auto" mr="auto">
                        {title && <Heading {...titleStyle}>{title}</Heading>}
                        {desc && <Heading {...descStyle}>{desc}</Heading>}
                    </Col>
                </Row>
            </Container>
        </PageHeaderWrap>
    )
}

PageHeader.propTypes = {
    descStyle: PropTypes.object,
    titleStyle: PropTypes.object
}

PageHeader.defaultProps = {
    titleStyle: {
        as: 'h1',
        color: "#fff",
        mb: '15px'
    },
    descStyle: {
        as: "h5",
        color: "#fff",
        fontweight: 400
    }
}

export default PageHeader;