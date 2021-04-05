import React, {useEffect} from 'react'
import { connect } from 'react-redux'

const GameDetails = (props) => {
    const game = props.game
    console.log(props)
    return (
        <div>
            {game.title} <br/>
            <img src={game.image} width='400px' height='auto'/> <br/>
            {game.description}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        game: state.games.selectedGame
    }
}
export default connect(mapStateToProps) (GameDetails)