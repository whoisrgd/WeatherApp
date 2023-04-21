export default function dataFormater(data) {
  const {
    timezone,
    current_weather: {
      temperature: currentTemperature,
      windspeed: currentWindSpeed,
      winddirection: currentWindDirection,
      weathercode: currentWeatherCode,
      is_day: isDay,
    },
    hourly: {
      time: hourlyTime,
      temperature_2m: hourlyTemperature,
      relativehumidity_2m: hourlyHumidity,
      apparent_temperature: hourlyApparentTemperature,
      rain: hourlyRain,
      showers: hourlyShowers,
      weathercode: hourlyWeatherCode,
      windspeed_10m: hourlyWindSpeed,
      winddirection_10m: hourlyWindDirection,
    },
    daily: {
      time: dailyTime,
      weathercode: dailyWeatherCode,
      temperature_2m_max: dailyTemperatureMax,
      temperature_2m_min: dailyTemperatureMin,
      apparent_temperature_max: dailyApparentTemperatureMax,
      apparent_temperature_min: dailyApparentTemperatureMin,
      sunrise,
      sunset,
      windspeed_10m_max: dailyWindSpeedMax,
      precipitation_probability_max: dailyChanceOfRain,
    },
  } = data;
  return {
    timezone,
    currentTemperature,
    currentWindSpeed,
    currentWindDirection,
    currentWeatherCode,
    isDay,
    hourlyTime,
    hourlyTemperature,
    hourlyHumidity,
    hourlyApparentTemperature,
    hourlyRain,
    hourlyShowers,
    hourlyWeatherCode,
    hourlyWindSpeed,
    hourlyWindDirection,
    dailyTime,
    dailyWeatherCode,
    dailyTemperatureMax,
    dailyTemperatureMin,
    dailyApparentTemperatureMax,
    dailyApparentTemperatureMin,
    sunrise,
    sunset,
    dailyWindSpeedMax,
    dailyChanceOfRain,
  };
}
