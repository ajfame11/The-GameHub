import React from 'react'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom' 
import Button from './Button'
import Image from './Image'
import { Card } from 'react-bootstrap'
import '../index.css'


const GameCard = (props) => {
    const game = props.game
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        dispatch ({ type: 'SELECT_GAME', payload: game})
        localStorage.setItem("selectedItem", game.id)
        console.log(game)
        history.push('/games/'+game.id)
    }
    // const handleClick = () => {
    //     dispatch ({ type: 'SELECT_GAME', payload: game}).sort(function(obj1, obj2) {
    //   return obj1.id - obj2.id;
    // }


    return (
        <div className="center-card">
            <div className="py-3 px-3">
                <Card style={{backgroundColor: '#282c34', width: '30rem'}} border="light"  >
                    {game.title } <br/>
                    <Image url= {game.image} width= {"400px"} height= {"400px"} />
                    <Button title={ "Details"} handleClick = {handleClick}/>
                </Card>
            </div>
        </div>
    )
}

export default GameCard