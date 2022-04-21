import React, { useEffect, useState } from "react";
import { fetchData } from "./apicall";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import image from './Covid.jfif'
import CountryPick from "./components/CountryPick/CountryPick";
import styles from "./App.module.css";
const App = () => {
  const [datai, setdata] = useState({});
  const [country, setcountry] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData();

      setdata(data);
    };
    fetch();
  }, [fetchData, setdata]);
  const countrychange = async (country) => {
    const data = datai.Countries.find((e) => e.Country === country);
console.log(data);
    setcountry({ data: data, Date: datai.Date });
  };
  return (
    <div className={styles.container}>
      <p>Covid Tracker</p>
      <img className={styles.image} src={image} alt="Covid" />
      {country == null ? <p></p> : <Cards data={country} />}
      <CountryPick
        handleCountryChange={countrychange}
        countries={datai.Countries}
      />
      {country == null ? <p>No Country Selected</p> : <Chart country={country} />}
    </div>
  );
};

export default App;
