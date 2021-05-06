import React from 'react'
import { SearchResults, WatchList, Modal } from '../../components/'
import { useGlobalContext } from '../../context'

const TVShows = () => {

    const { state: { isModalOpen, modalContent }, dispatch, setPrograms } = useGlobalContext();

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' })
    }

    return (
        <div>
            {
                isModalOpen && <Modal closeModal={closeModal} modalContent={modalContent} />
            }
            <SearchResults/>
            <WatchList/>
        </div>
    )
}

export default TVShows
