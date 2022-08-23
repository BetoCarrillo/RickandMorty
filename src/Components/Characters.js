import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard';




function Characters() {
  const [characters, setCharacters] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character/");
      const result = await response.json();
      setCharacters(result.results);
      //console.log(result.results);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 
  return (
    <div className='cardsDiv'>
    {characters && characters.map((character, i) => {
      return <div key={i}>
        <CharacterCard character={character}/>
      </div>
    })}
    </div>
  )
}


export default Characters

