import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import EditGame from '../components/EditGame'



const GameDetails = (props) => {
    const [edit, setEdit] = useState(false)
    const game = props.game
    const handleClick = () => {
        setEdit(!edit)
    }
if(game == undefined) return null
    console.log(props)
    return (
        <div>
            {game.title} <br/>
            <img src={game.image} width='400px' height='auto'/> <br/>
            {game.description}
            <button onClick={handleClick}> Edit</button>
            {
                edit
                ? <EditGame id = {game.id}/>
                : null
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        game: state.games.selectedGame
    }
}
export default connect(mapStateToProps) (GameDetails)