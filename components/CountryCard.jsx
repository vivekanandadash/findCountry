import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({name , countryFlag , population , region ,capital , data}) => {
    // console.log(name);
    return (
        <div>
            <Link className="country-card" to={`/${name}`} state={data}>
                <img src={countryFlag} alt={name + countryFlag} />
                <div className="card-text">
                    <h3 className="card-title">{name}</h3>
                    <p><b>Population : </b>{population}</p>
                    <p><b>region : </b>{region} </p>
                    <p><b>Capital : </b>{capital?capital:'NA'}</p>
                </div>      

            </Link>
        </div>
    )
}

export default CountryCard