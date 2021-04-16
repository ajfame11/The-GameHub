import React, {useEffect, useState} from 'react'
import {Button, Card} from 'react-bootstrap'
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
        <div className="center-card">
            <Card border = "light" style={{backgroundColor: '#282c34', width: '60rem'}}>
                <div className="px-3 py-3">
                    {game.title} <br/>
                    <img src={game.image} width='400px' height='auto'/> <br/>
                    {game.description}<br/><br/>
                    <button onClick={handleDelete}> Delete</button>
                    <button onClick={handleClick}> Edit</button>
                    {
                        edit
                        ? <EditGame id = {game.id}/>
                        : null
                    }
                </div>
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        game: state.games.selectedGame
    }
}
export default connect(mapStateToProps, { deleteGame }) (GameDetails)