import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPick.module.css";

const CountryPick = ({ handleCountryChange, countries }) => {
 

  return (
    <FormControl className={styles.formControl}>
      {countries == null ? (
        <p>No countries</p>
      ) : (
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">United States</option>
          {countries.map((country, i) => (
            <option key={i} value={country.Country}>
              {country.Country}
            </option>
          ))}
        </NativeSelect>
      )}
    </FormControl>
  );
};

export default CountryPick;
