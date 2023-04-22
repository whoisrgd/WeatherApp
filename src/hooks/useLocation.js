import axios from "axios";
import { useEffect, useState } from "react";

export default function useLocation() {
  const [isLocationAllowed, setIsLocationAllowed] = useState(true);

  useEffect(() => {
    setIsLocationAllowed(false);
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success({ coords }) {
      axios.defaults.baseURL = `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,windspeed_10m_max,precipitation_probability_max&current_weather=true&timeformat=unixtime&timezone=auto`;
      setIsLocationAllowed(true);
    }
    function error(err) {
      setIsLocationAllowed(false);
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return isLocationAllowed;
}
