import React from 'react'

const Image = (props) => {
    const {url, width} = props
    
    return (
        <div style= {{height:'200px', overflow:'hidden'}}>
            <img src={url} width = {width} height='auto'/> <br/>
        </div>
    )
}

export default Image