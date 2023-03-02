import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function CountriesDetails({countriesList}) {
    const [countries, setCountries] = useState(null);
  
    // projectId needs to be called this way because in App.jsx we declared the route with /projects/:projectId <-
    const { countryId } = useParams();
  
    const foundCountry = countriesList.find((country) => {
      return country.alpha3Code === countryId;
    });
  
    return (
      <div className="details">
        {foundCountry && (
            <>
            <h3>{foundCountry.name.common}</h3>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt=""
          />
            </>
        )}
        <Link to="/">Back to Countries</Link>
        </div>
    )
  }
  
  export default CountriesDetails;
  