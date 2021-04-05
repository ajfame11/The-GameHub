import {editGame} from '../pages/home/HomeActions'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import {Button, Card, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';

class EditGame extends Component {
    state = {
        title: '',
        description: '',
        image: '',
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const game = {title: this.state.title, description: this.state.description, image: this.state.image}
        console.log("a")
        this.props.editGame(game)
        console.log("b")
        this.setState({
            title: '',
            description: '',
            image: '',
        })
    }


    handleChange = (event) => {
        this.setTitle ({
            title: event.target.value
        })
    }

    handleDescChange = (event) => {
        this.setDescription ({
            description: event.target.value
        })
    }

    handleImageChange = (event) => {
        this.setImage ({
            image: event.target.value
        })
    }

    render() {
        return (
            <div className="center-card">
                <div className="vertical-center">
                    <Card style={{backgroundColor: '#282c34', width: '25rem', height: '23rem'}} border="light" >
                        <div className = 'pt-2 px-3'>
                        <h1>Edit Game</h1>
                        <Form onSubmit = {this.handleSubmit}>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control input type="text" value ={this.state.title} onChange={this.handleChange}  placeholder="Enter Title" />
                            <Form.Text className="text-muted">
                            Add a unique title so your blog sticks out!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} value ={this.state.description} onChange={this.handleDescChange} placeholder="Enter Description" />
                        </Form.Group>

                        <Form.Group controlId="formBasicImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control as="textarea" rows={3} value ={this.state.image} onChange={this.handleImageChange} placeholder="Enter Image" />
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
}

export default connect(null,{editGame})(EditGame)