export const reducer = (state, action) => {
    if(action.type === 'ADD_PROGRAM'){
        const updatedWatchlist = [...state.watchlist, action.payload];
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        return {
            ...state,
            watchlist: updatedWatchlist,
            isModalOpen: true,
            modalContent: 'show added'
        }
    }else if(action.type === 'REMOVE_PROGRAM'){
        const updatedWatchlist = state.watchlist.filter((program) => program.id !== action.payload);
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
        return {
            ...state,
            watchlist: updatedWatchlist,
            isModalOpen: true,
            modalContent: 'removed show'
        }
    }else if(action.type === 'INTIALIZE_PROGRAMS'){
        const localstorage = state.watchlist.concat(action.payload);
        return {
            ...state,
            watchlist: localstorage
        }
    }else if(action.type === 'SORT_ALPHABETICAL'){
        const sorted = state.watchlist.sort((a, b) => {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });
        return {
            ...state,
            watchlist: sorted
        }
    }else if(action.type === 'SORT_ASCENDING'){
        const sorted = state.watchlist.sort((a, b) => {
            return a.unseenEpisodes - b.unseenEpisodes;
        });
        return {
            ...state,
            watchlist: sorted
        }
    }else if(action.type === 'SORT_DESCENDING'){
        const sorted = state.watchlist.sort((a, b) => {
            return b.unseenEpisodes - a.unseenEpisodes;
        });
        return {
            ...state,
            watchlist: sorted
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
    }else if(action.type === 'SET_PAGE'){
        return {
            ...state,
            previousPage: action.payload
        }
    }else{
        throw new Error('no matching action type');
    }
}