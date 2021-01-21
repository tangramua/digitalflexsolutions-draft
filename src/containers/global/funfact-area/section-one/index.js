import React from 'react';
import PropTypes from 'prop-types'
import Section, {Row, Col} from '../../../../components/ui/wrapper'
import Counter from '../../../../components/counter/layout-one'

const FunFactArea = ({sectionStyle, counterStyle, containerData}) => {
    const data = containerData.content[0].listItems
    return(
        <Section {...sectionStyle}>
            <Row>
                {data.map((item,i) => (
                    <Col md={3} sm={6} key={`fun-fact-${i}`}>
                        <Counter
                            {...counterStyle}
                            text={item.title}
                            countTo={item.count}
                        />
                    </Col>
                ))}
            </Row>
        </Section>
    )
}

FunFactArea.propTypes = {
    sectionStyle: PropTypes.object
}

FunFactArea.defaultProps = {
    sectionStyle: {
        pt: '59px',
        pb: '29px',
        bgColor: '#086AD8'
    },
    counterStyle: {
        wrapperStyle: {
            mb: '30px'
        },
        countToStyle: {
            fontSize: '56px',
            fontweight: 700,
            color: '#fff',
            lineHeight: 1,
            mb: '20px'
        },
        textStyle: {
            color: '#ffffffb3'
        }
    }
}

export default FunFactArea;