import axios from "axios";

const url = "https://api.covid19api.com/summary";

export const fetchData = async () => {
  try {
    const { data: data } = await axios.get(url);
    
    const {
      Global: { TotalConfirmed, TotalDeaths, TotalRecovered },
      Countries: Countries,
      Date:Date
    } = data;
    return { Date,TotalConfirmed, TotalDeaths, TotalRecovered, Countries };
  } catch (error) {
    return error;
  }
};


