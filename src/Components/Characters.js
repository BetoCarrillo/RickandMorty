import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';


function Characters() {
  const [characters, setCharacters] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  
  const fetchData = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`);
      const result = await response.json();
      setCharacters(result.results);
      //console.log(data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData();
  },[page, search]);
 
 
  return (
    <div> <div>
        <SearchBar setSearch={setSearch}/>
    </div >
      < div className='cardsDiv'>
      {characters && characters.map((character, i) => {
      return <div key={i}>
        <CharacterCard character={character}/>
      </div>
      })}
        
      </div >
         <div className='pad'>
        <Pagination setPage={setPage} page={page} />
        </div>
    </div>
  )
}


export default Characters

