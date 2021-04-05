import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom' 

const GameCard = (props) => {
    const game = props.game
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        dispatch ({ type: 'SELECT_GAME', payload: game})
        history.push('/GameDetails')
    }


    return (
        <div>
            {game.title} <br/>
            <img src={game.image} width='400px' height='auto'/> <br/>
            <button onClick={handleClick}> Details</button>
        </div>
    )
}

export default GameCard