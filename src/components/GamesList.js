import React, {useEffect} from 'react'
import GameCard from './GameCard'

const GamesList = (props) => {
    const games = props.games

    return (
        <div>
            {games.map(game=> <GameCard key = {game.title} game = {game}/>)}
        </div>
    )
}

export default GamesList