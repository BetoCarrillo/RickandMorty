import React, { useEffect } from 'react'
import fetchData from './Characters'


function SearchBar({setSearch}) {

  return (
    <div className="header">
      <input placeholder="   Search" className='searchBar' onChange={e => { setSearch(e.target.value) }}></input>    
      
</div>
 
  )
}

export default SearchBar
