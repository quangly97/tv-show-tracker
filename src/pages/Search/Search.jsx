import React from 'react';
import { SearchBar, SearchResults, Modal } from "../../components/";
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../../context";

const Search = () => {

    const { state: { isModalOpen, modalContent }, dispatch, getPrograms } = useGlobalContext();

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    }

    const closeSearch = () => {
        getPrograms();
    }

    return (
        <div>
            <Link to='/'><button className='btn' onClick={closeSearch}>x</button></Link>
            {
                isModalOpen && <Modal closeModal={closeModal} modalContent={modalContent} />
            }
            <SearchBar type='searching'/>
            <SearchResults/>
        </div>
    )
}

export default Search;
