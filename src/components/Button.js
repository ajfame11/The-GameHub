import React from 'react'

const Button = (props) => {
    const {title, handleClick} = props
    
    return (
        <div>
            <button title = { title } value = { title } onClick = {handleClick} > {title} </button> 
        </div>
    )
}

export default Button