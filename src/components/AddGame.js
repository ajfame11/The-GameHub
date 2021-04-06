import React, { useState } from 'react'
import {addGame} from '../pages/home/HomeActions'
import { connect } from 'react-redux'
import {Button, Card, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';



const AddGame = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const handleChange = (event) => {
        setTitle (
            event.target.value
        )
    }

    const handleDescChange = (event) => {
        setDescription (
            event.target.value
        )
    }

    const handleImageChange = (event) => {
        setImage (
            event.target.value
        )
    }

    const handleSubmit = () => {
        props.addGame(
            {
                title: title,
                image: image,
                description: description
            }
        )
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Name:
                <input type="text" value={title} onChange={handleChange} />
                </label>
                <label>
                Description:
                <input type="text" value={description} onChange={handleDescChange} />
                </label>
                <label>
                Image:
                <input type="text" value={image} onChange={handleImageChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default connect(state => state, {addGame})(AddGame)
