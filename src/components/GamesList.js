import React from 'react'
import GameCard from './GameCard'
// import { CardDeck, Card, Form} from 'react-bootstrap'
import '../index.css'

const GamesList = (props) => {
    const games = props.games

    return (
        <div style= {{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent: 'center'}}>
            {/* <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link> */}
            {games.map(game=> <GameCard key = {game.title} game = {game}/>)}
        </div>
    )
}

export default GamesList