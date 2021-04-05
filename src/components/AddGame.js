// import React, { useState } from 'react'
import {addGame} from '../pages/home/HomeActions'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import {Button, Card, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';



// const AddGame = (props) => {
//     const [title, setTitle] = useState('')
//     const [description, setDescription] = useState('')
//     const [image, setImage] = useState('')

//     const handleChange = (event) => {
//         setTitle (
//             event.target.value
//         )
//     }

//     const handleDescChange = (event) => {
//         setDescription (
//             event.target.value
//         )
//     }

//     const handleImageChange = (event) => {
//         setImage (
//             event.target.value
//         )
//     }

//     const handleSubmit = () => {
//         props.addGame(
//             {
//                 title: title,
//                 image: image,
//                 description: description
//             }
//         )
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                 Name:
//                 <input type="text" value={title} onChange={handleChange} />
//                 </label>
//                 <label>
//                 Description:
//                 <input type="text" value={description} onChange={handleDescChange} />
//                 </label>
//                 <label>
//                 Image:
//                 <input type="text" value={image} onChange={handleImageChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//     )
// }

// export default connect(state => state, {addGame})(AddGame)

class AddGame extends Component {
    state = {
        title: '',
        description: '',
        image: '',
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const game = {title: this.state.title, description: this.state.description, image: this.state.image}
        console.log("a")
        this.props.addGame(game)
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
                        <h1>Create Your Game</h1>
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

export default connect(null,{addGame})(AddGame)