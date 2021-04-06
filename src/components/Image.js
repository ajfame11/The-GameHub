import React from 'react'

const Image = (props) => {
    const {url, width} = props
    
    return (
        <div>
            <img src={url} width = {width} height='auto'/> <br/>
        </div>
    )
}

export default Image