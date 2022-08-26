import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';


function Characters() {
  const [characters, setCharacters] = useState(0);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const [maxpages, setMaxpages] = useState("");
  
  const fetchData = async () => {
  
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`);
      const result = await response.json();
      setMaxpages(result.info.pages)
      setCharacters(result.results); 
      setLoader(false);
    } catch (error) {
      console.log(error)
      
    } 
    
  };

 

  useEffect(() => {
    fetchData();
  },[search, page]);
 

  return (
    <div>
      
      

      <SearchBar setSearch={setSearch} setCharacters={setCharacters}/>
   
      < div className='cardsDiv'>
        {!loader ? (characters && characters.map((character, i) => {
          return <div key={i}>
            <CharacterCard character={character} />
          </div>
        })) : ("")}
        
      </div >
      {fetchData() ? <Pagination setPage={setPage} page={page}  maxpages={maxpages} setMaxpages ={setMaxpages}  /> : ("")
      }
      <div className='pad'>
        
      </div>
    </div>
  )
}


export default Characters

