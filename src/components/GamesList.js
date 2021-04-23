import React from 'react'
import GameCard from './GameCard'
import '../index.css'

const GamesList = (props) => {
    const games = props.games

    return (
        <div style= {{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent: 'center'}}>
            {games.map(game=> <GameCard key = {game.title} game = {game}/>)}
        </div>
    )
}

export default GamesList