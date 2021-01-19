import React from "react";
import Img from "gatsby-image";

const NonStretchedImage = props => {
    let newprops = props
    let normalizedProps = props

    // console.log('props**', props)

    let alignment;
    if(newprops.align === 'right'){
        alignment = '0 0 0 auto'
    } else if(newprops.align === 'left'){
        alignment = '0 auto 0 0'
    }else{
        alignment = '0 auto'
    }

    if (!props.fluid.presentationWidth){
        newprops.fluid.presentationHeight = props.presentationHeight
        newprops.fluid.presentationWidth = props.presentationWidth
        normalizedProps = newprops
    }

   normalizedProps = {...normalizedProps.fluid, aspectRatio: 1}

    if (newprops.fluid && newprops.fluid.presentationWidth) {
        normalizedProps = {
            ...newprops,
            style: {
                ...(newprops.style || {}),
                position: newprops.isAbsolute ? 'absolute' : 'relative',
                width: newprops.isAbsolute ? newprops.fluid.presentationWidth : '',
                maxWidth: newprops.fluid.presentationWidth,
                margin: alignment,
            },
        }
    }
    return <Img {...normalizedProps} />

    // original
    // let alignment;
    // if(props.align === 'right'){
    //     alignment = '0 0 0 auto'
    // } else if(props.align === 'left'){
    //     alignment = '0 auto 0 0'
    // }else{
    //     alignment = '0 auto'
    // }
    //
    // normalizedProps = {...normalizedProps.fluid, aspectRatio: 1}
    // if (props.fluid && props.fluid.presentationWidth) {
    //     normalizedProps = {
    //         ...props,
    //         style: {
    //             ...(props.style || {}),
    //             position: props.isAbsolute ? 'absolute' : 'relative',
    //             width: props.isAbsolute ? props.fluid.presentationWidth : '',
    //             maxWidth: props.fluid.presentationWidth,
    //             margin: alignment,
    //         },
    //     }
    // }
    // return <Img {...normalizedProps} />
}

export default NonStretchedImage;