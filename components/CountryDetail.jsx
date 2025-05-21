import React, { useContext, useEffect, useState } from 'react'
import  './CountryDetails.css'
import { Link, useLocation, useOutletContext, useParams } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
// import { useWindowSize } from '../hooks/useWindowSize';// this code is used for understnading custom hook
import { useTheme } from '../hooks/useTheme';

const CountryDetail = () => {
    const params = useParams()
    const [isDark] = useTheme()
    // console.log(params);
    const countryName = params.country
    // console.log(countryName);
    const {state} = useLocation()
    // console.log(state);
    // const windowSize = useWindowSize() // this code is used for understnading custom hook
    
    
    const [countryData, setCountryData] = useState(null)
    const [notfound , setNotfound] = useState(false)    

    function updateCountryData(countryData){
          setCountryData({
                    flag:countryData.flags.svg,
                    // countryData name
                    name:countryData.name.common,

                    // nativeName
                    nativeName:countryData.name.nativeName 
                    ? Object.values(countryData.name.nativeName)[0].common 
                    : countryData.name.common,

                    // population
                    population:countryData.population.toLocaleString("en-IN"),

                    //region
                    region:countryData.region,

                    //sub-region
                    subRegion:countryData.subregion?countryData.subregion:"NA",

                    // capital
                    capital:countryData.capital?countryData.capital.join(" , "):"NA",

                    // topLevel Domain
                    domain:countryData.tld?countryData.tld.join(" , "):"NA",

                    //Country Currency if have then map and find its currrencies name 
                    Currencies:countryData.currencies?Object.values(countryData.currencies).
                    map((currency)=>currency.name).join(" , "):"NA",

                    // Language
                    language:countryData.languages?Object.values(countryData.languages).slice(0,2).join(' , '):"NA",

                    // Borders
                    borders:[]
                    
                
                })
                
                if(!countryData.borders){
                countryData.borders = []
                }
              if(countryData.borders){
                Promise.all(
                    countryData.borders.map((border)=>{
                        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                          .then((res)=> res.json())
                          .then(([borderCountry])=> borderCountry.name.common)
                      })
                   ).then((allBorderCountryData)=>{
                    setCountryData((previousState)=>({...previousState , borders:allBorderCountryData}))
                    // console.log(allBorderCountryData);
                    
                   })
              }
    }

    useEffect(() => {

        if (state){
        updateCountryData(state)
        return
        }
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then(res => res.json())
            .then(([countryData]) => {
                // console.log(countryData);
            updateCountryData(countryData)
            }).catch(err=>{
                setNotfound(true)
            })
    },[countryName])
    if(notfound){
        return <div>Country Not found</div>
    }
    return countryData === null ?(
    'loading...'
    ):
     (
        <main className={`${isDark?'dark':''}`}>
           {/* <h1 style={{textAlign:'center'}}>{windowSize.width} X {windowSize.height}</h1> this code is used for understnading custom hook */}
            <div className="back-home">
                <span className="back-button" onClick={()=>history.back()}> <i className="fa-solid fa-arrow-left"></i>&nbsp;  Back</span>
                <a href="/"><i className="fa-solid fa-house fa-xl"></i></a>
            </div>

            <div className="country-deatils">
                <img src={countryData.flag} alt="country-flag" />


                <div className="details-text-container">
                    <h1>{countryData.name}</h1>
                    <div className="details-text">
                        <p><b>Native Name :</b><span id="countryNativeName">{countryData.nativeName}</span></p>
                        <p><b>Population : </b><span id="countryPopulation"></span>{countryData.population}</p>
                        <p><b>region : </b><span id="countryregion"></span>{countryData.region}</p>
                        <p><b>Subregion : </b><span id="countrySubregion"></span>{countryData.subRegion}</p>
                        <p><b>Capital : </b><span id="coutryCapital"></span>{countryData.capital}</p>
                        <p><b>Top Level Domain : </b><span id="countryTopLevelDomain"></span>{countryData.domain}</p>
                        <p><b>Currency : </b><span id="countryCurrency"></span>{countryData.Currencies}</p>
                        <p><b>Language : </b><span id="countryLanguage"></span>{countryData.language}</p>
                    </div>
                    {countryData.borders.length !==0 && <div id="border-countries">
                        <b>Border Countries :</b>&nbsp;&nbsp; <span id="countryNames">
                            {
                                countryData.borders.map((border)=> <Link key={border} to={`/${border}`}>{border}</Link>)
                            }
                        </span>
                    </div>}
                </div>
            </div>
        </main>
    )
}

export default CountryDetail