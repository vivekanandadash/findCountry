import React from 'react'

const SelectMenu = ({setQuery}) => {
  return (
    <select className="filter-by-region" onChange={(e)=>setQuery(e.target.value.toLocaleLowerCase())}>
                <option hidden>Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
  )
}

export default SelectMenu