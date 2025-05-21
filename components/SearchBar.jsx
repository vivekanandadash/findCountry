import React from 'react'

const SearchBar = ({setQuery}) => {
  return (
    <div
      className="search-container"
    // onClick={() => document.getElementById('searchInput').focus()}
    >
      <i className="fa-solid fa-magnifying-glass"></i>
      <input onChange={(e) => setQuery(e.target.value.toLowerCase().split(" ").join(""))} type="text" placeholder="Search For a Country" id="searchInput" />
    </div>

  )
}

export default SearchBar