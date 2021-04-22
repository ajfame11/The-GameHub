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

        case 'SELECT_GAME': return {
            ...state,
            selectedGame: action.payload
        }


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

   