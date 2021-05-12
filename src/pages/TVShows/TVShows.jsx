import React from 'react';
import { SearchBar, SearchResults, WatchList, Modal } from '../../components/';
import { useGlobalContext } from '../../context';

const TVShows = () => {

    const { state: { isModalOpen, modalContent }, dispatch } = useGlobalContext();

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    }

    return (
        <div>
            {
                isModalOpen && <Modal closeModal={closeModal} modalContent={modalContent} />
            }
            <SearchBar/>
            <SearchResults/>
            <WatchList/>
        </div>
    )
}

export default TVShows;
