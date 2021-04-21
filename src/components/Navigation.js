import React from 'react'

// import {useHistory} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
            <a href={ "/"}> Home </a>
            <a href={ "/AddGame"}> Add New Game </a>
        </div>
    )
}

export default  Navigation