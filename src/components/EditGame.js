import {editGame} from '../pages/home/HomeActions'
import { connect, useDispatch } from 'react-redux'
import React, { useState } from 'react'
import {Button, Card, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const EditGame = (props) => {
    const [ title, setTitle] = useState("")
    const [ description, setDescription] = useState("")
    const [ image, setImage] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (event) =>{
        event.preventDefault()
        let titleTo = title || props.games.selectedGame.title
        let descTo = description || props.games.selectedGame.description
        let imageTo = image || props.games.selectedGame.image 
        const game = {title: titleTo, description: descTo, image: imageTo, id: props.id}
        console.log("a")
        props.editGame(game)
            .then(res => { 
                dispatch ({ type: 'SELECT_GAME', payload: res}) 
            })
        console.log("b")
        
    }


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

    
        return (
            <div className="center-card">
                <div className="vertical-center">
                    <Card style={{backgroundColor: '#282c34', width: '25rem', height: '23rem'}} border="light" >
                        <div className = 'pt-2 px-3'>
                        <h1>Edit Game</h1>
                        <Form onSubmit = {handleSubmit}>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control input type="text" value ={title} onChange={handleChange}  placeholder="Enter Title" />
                            <Form.Text className="text-muted">
                            Add a unique title so your blog sticks out!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} value ={description} onChange={handleDescChange} placeholder="Enter Description" />
                        </Form.Group>

                        <Form.Group controlId="formBasicImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control as="textarea" rows={3} value ={image} onChange={handleImageChange} placeholder="Enter Image" />
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

export default connect(state => state,{editGame})(EditGame)