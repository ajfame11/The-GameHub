const defaultState = {
    listOfGames: [],
    selectedGame: null

}

export const homeReducer = (state = defaultState, action) => {
    switch (action.type) {

            
        //INDEX    
        case 'GET_ALL_GAMES': return {
            ...state,
            listOfGames: action.payload
            
        }

        // case 'GAMES_LOADED': return {
        //     ...state,
        //     gamesLoaded: true
        // }

        case 'SELECT_GAME': return {
            ...state,
            selectedGame: action.payload
        }

        // //CREATE    //Ask about this piece of code
        // case 'ADDING_GAME': return {
        //     ...state,
        //     listOfGames: [...state.listOfGames, action.payload]
            
        // }

        //EDIT    
        case 'EDITING_GAME': return {
            ...state,
            selectedGame: [...state.listOfGames, action.payload]
            
        }

        //DELETE    
        case 'DELETE_GAME': return {
            ...state,
            listOfGames: [...state.listOfGames.filter(item => item.id !== action.payload)]
            
        }
    
        //DEFAULT
        default: return state
    }
  }

   