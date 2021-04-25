import React from 'react'
import { SearchBar, SearchResults, WatchList, Modal } from '../../components/'
import { useGlobalContext } from '../../context'

const TVShows = () => {

    const { state, dispatch } = useGlobalContext();

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' })
    }

    return (
        <div>
            {
                state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />
            }
            <SearchBar/>
            <SearchResults/>
            <WatchList/>
        </div>
    )
}

export default TVShows
