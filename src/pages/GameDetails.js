import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import EditGame from '../components/EditGame'
import {deleteGame} from '../pages/home/HomeActions'
import {useHistory} from 'react-router-dom'



const GameDetails = (props) => {
    const [edit, setEdit] = useState(false)
    const history = useHistory()
    const game = props.game
    const handleClick = () => {
        setEdit(!edit)
    }
    const handleDelete = () => {
        props.deleteGame(game.id)
        
        history.push("/")
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
            <button onClick={handleDelete}> Delete</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        game: state.games.selectedGame
    }
}
export default connect(mapStateToProps, { deleteGame }) (GameDetails)