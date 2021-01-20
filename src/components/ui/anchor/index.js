import React from 'react'
import PropTypes from 'prop-types';
import {LinkWrapper, AnchorTag, LinkWrapperAmp, AnchorTagAmp} from './anchor.style'

const Anchor = ({path, children, ...props}) => {
    const internal = /^\/(?!\/)/.test(path)
    if(internal){
        return <LinkWrapper to={path} {...props}>{children}</LinkWrapper>
    }
    return (
        <AnchorTag href={path} {...props}>
          {children}
        </AnchorTag>
    )
} 
 
Anchor.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    align: PropTypes.string,
    lineheight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    pt: PropTypes.string,
    pb: PropTypes.string,
    mt: PropTypes.string,
    mb: PropTypes.string,
    maxWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    fontWeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export const AnchorAmp = ({path, children, ...props}) => {
    const internal = /^\/(?!\/)/.test(path)
    if(internal){
        return <LinkWrapperAmp to={path} {...props}>{children}</LinkWrapperAmp>
    }
    return (
        <AnchorTagAmp href={path} {...props}>
          {children}
        </AnchorTagAmp>
    )
} 
 
AnchorAmp.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    align: PropTypes.string,
    lineheight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    pt: PropTypes.string,
    pb: PropTypes.string,
    mt: PropTypes.string,
    mb: PropTypes.string,
    maxWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    fontWeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}


export default Anchor


 