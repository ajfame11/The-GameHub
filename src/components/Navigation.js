import React from 'react'
import {useHistory} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <a href={ "/"}> Home </a>
            <a href={ "/AddGame"}> Add New Game </a>
        </div>
    )
}

export default  Navigation