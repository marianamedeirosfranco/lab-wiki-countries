import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
const apiURL = "https://ih-countries-api.herokuapp.com/countries"

function CountriesList() {
    const [countries, setCountries] = useState ([])
    const [loading, setLoading] = useState(true);
    const getCountries = async () => {
        try {
          let response = await axios.get(apiURL);
          console.log(response);
          setCountries(response.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getCountries();
      }, []);

  
    return (
    <div>
    {countries.map((country)=>{
        return(
            <div>
            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
            </div>
        )
    })
    }
    {loading && <h2>Loading...</h2>}
    </div>
  )
}

export default CountriesList