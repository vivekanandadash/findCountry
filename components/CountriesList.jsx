import React, { useEffect, useState } from 'react'
// import countriesData from '../CountriesData'
import CountryCard from './CountryCard';
import CountryListShimmer from './CountryListShimmer';


const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([])
  useEffect(() => {
    // console.log('hello useEffect');
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
      })

  }, [])

  return (
    <>
      {!countriesData.length ?(
       <CountryListShimmer/>):(<div className='countries-container'>
        {
          countriesData.filter((country) =>
            country.name.common.toLowerCase().split(" ").join("").includes(query) || country.region.toLowerCase().split(" ").join("").includes(query))
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  countryFlag={country.flags.svg}
                  name={country.name.common}
                  population={country.population.toLocaleString("en-IN")}
                  region={country.region}
                  capital={country.capital?.[0]}
                  data={country}
                />
              )
            })
          }
      </div>)
      }
    </>
  )
}

export default CountriesList