import React, {useEffect} from 'react'
import {getGames} from './HomeActions'
import {connect} from 'react-redux'

const Home = (props) => {
    useEffect(() => {
        getGames()
    }, [])
    console.log(props)
    return (
        <div>
            Hello
        </div>
    )
}

export default connect(state => state, null)(Home)