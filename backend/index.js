const express = require("express");
const app = express();
const cors = require("cors");
const axios = require('axios').default;



app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});



const url = "https://api.covid19api.com/summary";

app.get("/stats", async (req, res) => {
  console.log(req.body);
  try {
    const { data: data } = await axios.get(url);
    
    const {
      Global: { TotalConfirmed, TotalDeaths, TotalRecovered },
      Countries: Countries,
      Date:Date
    } = data;
    res.status(200).json({ Date,TotalConfirmed, TotalDeaths, TotalRecovered, Countries });
  } catch (error) {
    return error;
  }
    
});

app.listen(8080, () => {
  console.log("Connected");
});
