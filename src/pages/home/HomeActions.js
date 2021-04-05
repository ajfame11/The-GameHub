

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




// export const getGames = () => {
//     return dispatch => {
//         dispatch({type: 'GET_ALL_GAMES'})
//         fetch("http://localhost:4000/games") 
//         .then(res => res.json())
//         .then(games => dispatch({type: "GAMES_LOADED", payload: games}))
//         .catch((error) => {
//             console.error('Error:', error);
//           })
//     }
// }

export const addGame = (game) => {
    return dispatch => { //thunk allows us to do asyn actions 
        dispatch({type: "ADDING_GAME"})
        console.log("C")
        fetch("http://localhost:4000/games",{ //initial order The Fetch API provides a JavaScript interface for accessing and manipulating our db, using a requests and responses.
            method: "POST",
            body: JSON.stringify(game),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json()) //promise is returned and we further process it.
        .then(game => { //another promise is returned and we further process it
            console.log("e")
            dispatch({type: "GAME_ADDED", payload: game})})
          
        .catch((error) => {
            console.error('Error:', error);
          })

          console.log("d") //asynk process which is why its after c
    }
}

export const editGame = (gamepassed) => { 
    let game = {title: gamepassed.title, description: gamepassed.description, image: gamepassed.image}
    return dispatch => {
        dispatch({type: "EDITING_GAME"})
        fetch(`/http://localhost:4000/games/${game.id}`,{
            method: 'PATCH',
            body: JSON.stringify(game),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => dispatch({type: "GAME_EDITED", payload: game}))
        .catch((error) => {
            console.error('Error:', error);
          })
    }
}

// export const deleteGame = (id) => {
//     return dispatch => {
//         dispatch({type: "DELETENG_GAME"})
//         fetch(`/http://localhost:4000/games/${id}`,{
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             }
//         })
//         .then(() => dispatch({type: "GAME_DELETED", payload: id}))
//         .catch((error) => {
//             console.error('Error:', error);
//           })
//     }
// }