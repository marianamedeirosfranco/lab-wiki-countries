import React, { useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import Header from './components/Header';
import CountriesDetails from './components/CountriesDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  //function to call the api and set the state
  const [countries, setCountries] = useState([]);
  return (
    <div className="App">
      <h3>List of Countries</h3>
      <Header />
      <CountriesList countriesList={countries} />
      <Routes>
        <Route
          path="/country/:id"
          element={<CountriesDetails countriesList={countries} />}
        />
      </Routes>
    </div>
  );
}
export default App;
