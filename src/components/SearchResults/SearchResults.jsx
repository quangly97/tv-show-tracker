import React from 'react'
import { useGlobalContext } from '../../context'
import parse from 'html-react-parser'

const SearchResults = () => {

    const { programs, setPrograms, state, dispatch, getEpisodes } = useGlobalContext();

    const addToList = async (program) => {
        const {show: {id, image, name, premiered, summary}} = program;
        if(!showInList(id)){
            const episodeList = await getEpisodes(id);
            const episodes = episodeList.map((episode) => {
                const {airdate, airstamp, id, image, name, number, season, summary} = episode;
                return {
                    airdate, airstamp, id, image, name, number, season, summary, 
                    watched: false,
                }
            })
            const updatedProgram = {id, image, name, premiered, summary, episodes, unseenEpisodes: episodeList.length};
            dispatch({ type: 'ADD_PROGRAM', payload: updatedProgram });
        }
    }

    const showInList = (id) => {
        if(state.watchlist.filter((program) => id === program.id).length > 0){
            return true;
        }
        return false;
    }

    const closeSearch = () => {
        setPrograms([]);
    }

    return (
      <>
        {programs.length > 0 && (
          <div>
            <button onClick={closeSearch} className="btn">
              Close
            </button>
            {programs.map((program) => {
              const { show: { id, name, summary, premiered, image } } = program;
              return (
                <section className="product" key={id}>
                  {image && <img alt={name} src={image.original} />}
                  <h4>{premiered && premiered.substring(0, 4)}</h4>
                  <h3>{name}</h3>
                  {summary && parse(summary)}
                  <button onClick={() => addToList(program)}>+</button>
                </section>
              );
            })}
          </div>
        )}
      </>
    );
}

export default SearchResults
