import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom' 
import Button from './Button'
import Image from './Image'

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
        <div>
            {game.title} <br/>
            <Image url= {game.image} width= {"400px"}/>
            <Button title={ "Details"} handleClick = {handleClick}/>
        </div>
    )
}

export default GameCard