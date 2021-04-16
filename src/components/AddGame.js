import React, { useState } from 'react'
import {addGame} from '../pages/home/HomeActions'
import { connect } from 'react-redux'
import {Button, Card, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import '../index.css'



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
        <div className="center-card">
            <div className="vertical-center">
                <Card style={{backgroundColor: '#282c34', width: '25rem', }} border="light" >
                    <div className = 'pt-2 px-3'>
                        <h1>Edit Game</h1>
                        <Form onSubmit = {handleSubmit}>
                                
                                <Form.Group controlId="formBasicTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control input={'true'} type="text" value ={title} onChange={handleChange}  placeholder="Enter Title" />
                                    <Form.Text className="text-muted">
                                        Add Game Title Here!
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea"  value ={description} onChange={handleDescChange} placeholder="Enter Description" />
                                    <Form.Text className="text-muted">
                                        Add Game Description Here!
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicImage">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control as="textarea"  value ={image} onChange={handleImageChange} placeholder="Enter Image" />
                                    <Form.Text className="text-muted">
                                        Add Game Image Here!
                                    </Form.Text>
                                </Form.Group>
                            
                            <Button type="submit">Submit</Button>
                            <Link to = "/"><Button variant="danger">Cancel</Button></Link>
                        
                        </Form>
                    </div>
                </Card>
            </div>
        </div>

    )
}

export default connect(state => state, {addGame})(AddGame)
