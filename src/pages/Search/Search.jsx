import React from 'react';
import { SearchBar, SearchResults, Modal } from "../../components/";
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../../context";

const Search = () => {

    const { state: { isModalOpen, modalContent }, dispatch } = useGlobalContext();

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    }

    return (
        <div>
            <Link to='/'><button className='btn'>x</button></Link>
            {
                isModalOpen && <Modal closeModal={closeModal} modalContent={modalContent} />
            }
            <SearchBar/>
            <SearchResults/>
        </div>
    )
}

export default Search;
