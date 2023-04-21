import axios from "axios";
import dataFormater from "../helpers/dataFormater";

export const getThreeDaysWeather = async () => {
  const { data } = await axios.get("", { params: { forecast_days: 3 } });
  return dataFormater(data);
};

export const getSevenDaysWeather = async () => {
  const { data } = await axios.get("");
  return dataFormater(data);
};

export const getForteenDaysWeather = async () => {
  const { data } = await axios.get("", { params: { forecast_days: 14 } });
  return dataFormater(data);
};

export const getSixteenDaysWeather = async () => {
  const { data } = await axios.get("", { params: { forecast_days: 16 } });
  return dataFormater(data);
};
