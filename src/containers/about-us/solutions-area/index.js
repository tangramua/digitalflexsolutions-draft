import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { MdDone } from "react-icons/md";
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import BoxIcon from '../../../components/box-icon/layout-four'
import {SolutionsWrapper, SolutionBox, SolutionBoxItem} from './solutions-area.style'

const Solutions = ({headingStyle, containerData}) => {
    const title = containerData.accentTitle ? `${containerData.title} <span>${containerData.accentTitle}</span>` : containerData.title
    const solutions = containerData.content[0].listItems

    headingStyle.color = 'black' // new

    return (
        <SolutionsWrapper>
            <Container>
                <Row>
                    <Col lg={12}>
                        {title && <Heading {...headingStyle}>{parse(title)}</Heading>}
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SolutionBox>
                            {solutions && solutions.map(solution => (
                                <SolutionBoxItem key={solution.id}>
                                    <BoxIcon 
                                        icon={<MdDone/>}
                                        title={solution.externalName}
                                        desc={solution.summary}
                                    />
                                </SolutionBoxItem>
                            ))}
                        </SolutionBox>
                    </Col>
                </Row>
            </Container>
        </SolutionsWrapper>
    )
}

Solutions.propTypes = {
    headingStyle: PropTypes.object
}

Solutions.defaultProps = {
    headingStyle: {
        as: "h3",
        textalign: "center",
        mb: "30px",
        responsive: {
            medium: {
                mb: "10px"
            }
        }
    }
}

export default Solutions;