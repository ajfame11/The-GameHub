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
    
        default: return state
    }
  }

   