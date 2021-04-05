import React, {useEffect} from 'react'
import {getGames} from './HomeActions'
import {connect} from 'react-redux'
import GamesList from '../../components/GamesList'

const Home = (props) => {
    console.log(props)
    useEffect(() => {
        props.getGames()
    }, [])
    console.log(props)
    if (props.games.listOfGames.length<1) return null
    return (
        <div>
            <GamesList games = {props.games.listOfGames}/>
        </div>
    )
}

export default connect(state => state, {getGames})(Home)