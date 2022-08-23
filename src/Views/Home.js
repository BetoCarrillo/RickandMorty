import React from 'react'
import Characters from '../Components/Characters';
import SearchBar from '../Components/SearchBar';



function Home() {
  return (
      <div>
      <SearchBar/>
      <Characters />
    </div>
  )
}

export default Home