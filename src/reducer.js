export const reducer = (state, action) => {
    if(action.type === 'ADD_PROGRAM'){
        const updatedWatchlist = [...state.watchlist, action.payload];
        const updatedEndedWatchlist = updatedWatchlist.filter((program) => program.status === 'Ended');
        const updatedRunningWatchlist = updatedWatchlist.filter((program) => program.status === 'Running');

        return {
            ...state,
            watchlist: updatedWatchlist,
            endedWatchlist: updatedEndedWatchlist,
            runningWatchlist: updatedRunningWatchlist,
            isModalOpen: true,
            modalContent: 'show added'
        }
    }else if(action.type === 'REMOVE_PROGRAM'){
        const updatedWatchlist = state.watchlist.filter((program) => program.id !== action.payload);
        const updatedEndedWatchlist = state.endedWatchlist.filter((program) => program.id !== action.payload);
        const updatedRunningWatchlist = state.runningWatchlist.filter((program) => program.id !== action.payload);

        return {
            ...state,
            watchlist: updatedWatchlist,
            endedWatchlist: updatedEndedWatchlist,
            runningWatchlist: updatedRunningWatchlist,
            isModalOpen: true,
            modalContent: 'show removed'
        }
    }else if(action.type === 'INTIALIZE_PROGRAMS'){
        const endedWatchlist = action.payload.filter((program) => program.status === 'Ended');
        const runningWatchlist = action.payload.filter((program) => program.status === 'Running');
        
        return {
            ...state,
            watchlist: action.payload,
            endedWatchlist: endedWatchlist,
            runningWatchlist: runningWatchlist
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