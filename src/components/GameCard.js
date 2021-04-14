import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom' 
import Button from './Button'
import Image from './Image'
import { CardDeck, Card, Form} from 'react-bootstrap'
import '../index.css'


const GameCard = (props) => {
    const game = props.game
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        dispatch ({ type: 'SELECT_GAME', payload: game})
        localStorage.setItem("selectedItem", game.id)
        history.push('/GameDetails')
    }


    return (
        <div className="center-card">
            <div className="py-3 px-3">
                <Card style={{backgroundColor: '#282c34', width: '30rem'}} border="light"  >
                    {/* <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link> */}
                    {game.title } <br/>
                    <Image url= {game.image} width= {"400px"} height= {"400px"} />
                    <Button title={ "Details"} handleClick = {handleClick}/>
                </Card>
            </div>
        </div>
    )
}

export default GameCard