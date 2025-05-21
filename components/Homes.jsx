import { createContext, useContext, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import '../src/App.css'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { useWindowSize } from '../hooks/useWindowSize' //this code is used for understnading custom hook
import { useTheme } from '../hooks/useTheme'

const Homes = () => {
    const [query , setQuery] = useState('')
    const [isDark] = useTheme()
    // const windowSize = useWindowSize() //this code is used for understnading custom hook
    
  return (
    <>
    <main className={`${isDark?'dark':''}`}>
    <div className="search-filter-container">
        <SearchBar setQuery={setQuery}/>
        <SelectMenu setQuery={setQuery} />
    </div>
    {/* <h1 style={{textAlign:'center'}}>{windowSize.width} X {windowSize.height}</h1> //this code is used for understnading custom hook */}
    <CountriesList query={query} />
</main>
    </>
  )
}

export default Homes