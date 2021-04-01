// import {useDispatch} from 'react-redux'
// const dispatch = useDispatch()

export const getGames = () => {
    return dispatch => {
       fetch("http://localhost:4000/games")
        .then(res=>{
            console.log(res)
           return res.json()
        })
        .then(res=>{
            dispatch({
                type: 'GET_ALL_GAMES', payload: res
            })
        })
        .catch(console.log)  
    }
   
}