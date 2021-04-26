export const reducer = (state, action) => {
    if(action.type === 'ADD_PROGRAM'){
        const updatedWatchlist = [...state.watchlist, action.payload];
        return {
            ...state,
            watchlist: updatedWatchlist,
            isModalOpen: true,
            modalContent: 'show added'
        }
    }else if(action.type === 'REMOVE_PROGRAM'){
        const updatedWatchlist = state.watchlist.filter((program) => program.id !== action.payload);
        return {
            ...state,
            watchlist: updatedWatchlist,
            isModalOpen: true,
            modalContent: 'removed show'
        }
    }else if(action.type === 'NO_INPUT'){
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'please enter a show'
        }
    }else if(action.type === 'CLOSE_MODAL'){
        return {
            ...state, 
            isModalOpen: false
        }
    }else{
        throw new Error('no matching action type');
    }
}