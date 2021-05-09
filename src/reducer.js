export const reducer = (state, action) => {
    if(action.type === 'ADD_PROGRAM'){
        const updatedWatchlist = [...state.watchlist, action.payload];
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));

        if(action.payload.status === 'Ended'){
            const updatedEndedWatchlist = [...state.endedWatchlist, action.payload];
            localStorage.setItem("endedWatchlist", JSON.stringify(updatedEndedWatchlist));
            return {
                ...state,
                watchlist: updatedWatchlist,
                endedWatchlist: updatedEndedWatchlist,
                isModalOpen: true,
                modalContent: 'show added'
            }
        }else if(action.payload.status === 'Running'){
            const updatedRunningWatchlist = [...state.runningWatchlist, action.payload];
            localStorage.setItem("runningWatchlist", JSON.stringify(updatedRunningWatchlist));
            return {
                ...state,
                watchlist: updatedWatchlist,
                runningWatchlist: updatedRunningWatchlist,
                isModalOpen: true,
                modalContent: 'show added'
            }
        }
    }else if(action.type === 'REMOVE_PROGRAM'){
        const updatedWatchlist = state.watchlist.filter((program) => program.id !== action.payload);
        const updatedEndedWatchlist = state.endedWatchlist.filter((program) => program.id !== action.payload);
        const updatedRunningWatchlist = state.runningWatchlist.filter((program) => program.id !== action.payload);
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
        localStorage.setItem("endedWatchlist", JSON.stringify(updatedEndedWatchlist));
        localStorage.setItem("runningWatchlist", JSON.stringify(updatedRunningWatchlist));

        return {
            ...state,
            watchlist: updatedWatchlist,
            endedWatchlist: updatedEndedWatchlist,
            runningWatchlist: updatedRunningWatchlist,
            isModalOpen: true,
            modalContent: 'removed show'
        }
    }else if(action.type === 'INTIALIZE_PROGRAMS'){
        const localWatchlist = state.watchlist.concat(action.payload[0]);
        const localEndedWatchlist = state.endedWatchlist.concat(action.payload[1]);
        const localRunningWatchlist = state.runningWatchlist.concat(action.payload[2]);
        return {
            ...state,
            watchlist: localWatchlist,
            endedWatchlist: localEndedWatchlist,
            runningWatchlist: localRunningWatchlist
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