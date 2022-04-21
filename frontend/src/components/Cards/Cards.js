import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

const Cards = ({
  data: { data:{TotalConfirmed, TotalDeaths, TotalRecovered,} ,Date },
}) => {
  console.log(TotalConfirmed);
  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2" spacing={2} m={200}>
        Global Stastics
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={TotalConfirmed}
          lastUpdate={Date}
          cardSubtitle="Number of active cases caused by COVID-19"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={TotalRecovered}
          lastUpdate={Date}
          cardSubtitle="Number of recoveries caused by COVID-19"
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={TotalDeaths}
          lastUpdate={Date}
          cardSubtitle="Number of deaths caused by COVID-19"
        />
      </Grid>
    </div>
  );
};

export default Cards;
