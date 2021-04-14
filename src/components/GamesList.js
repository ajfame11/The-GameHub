// import React, {useEffect} from 'react'
import GameCard from './GameCard'
// import { CardDeck, Card, Form} from 'react-bootstrap'
import '../index.css'

const GamesList = (props) => {
    const games = props.games

    return (
        <div>
            {/* <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link> */}
            {games.map(game=> <GameCard key = {game.title} game = {game}/>)}
        </div>
    )
}

export default GamesList