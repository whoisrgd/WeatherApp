import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getSevenDaysWeather } from "../apis/weatherApi";
import Loading from "./Loading";
import Error from "./Error";
import CurrentWeathers from "../components/CurrentWeathers";
import DailyWeathers from "../components/DailyWeathers";
import HourlyWeathers from "../components/HourlyWeathers";
import useTextAndIcons from "../hooks/useTextAndIcons";
import useCity from "../hooks/useCity";

export default function LocationAllowed() {
  const getCity = useCity();
  const { getWeatherIcon } = useTextAndIcons();
  const { isLoading, isError, isFetching, error, data } = useQuery({
    queryKey: ["SevenDaysWeather"],
    queryFn: getSevenDaysWeather,
    staleTime: 60 * 60 * 1000,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  if (isFetching) return <Loading />;

  const {
    timezone,
    currentTemperature,
    currentWindSpeed,
    currentWindDirection,
    currentWeatherCode,
    isDay,
    hourlyTime,
    hourlyTemperature,
    hourlyWeatherCode,
    hourlyHumidity,
    hourlyApparentTemperature,
    hourlyChanceOfRain,
    hourlyWindSpeed,
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
  } = data;
  const weatherIcon = getWeatherIcon(currentWeatherCode);
  const city = getCity(timezone);

  return (
    <Grid
      gridTemplateRows="repeat(2)"
      w="100vw"
      minH="100vh"
      bgImg={`url("../${isDay ? "day" : "night"}/${weatherIcon}.jpg")`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={2}
        m="10px"
      >
        <CurrentWeathers
          city={city}
          currentTemperature={currentTemperature}
          currentWindSpeed={currentWindSpeed}
          currentWindDirection={currentWindDirection}
          currentWeatherCode={currentWeatherCode}
          sunrise={sunrise}
          sunset={sunset}
          isDay={isDay}
          weatherIcon={weatherIcon}
          dailyTemperatureMax={dailyTemperatureMax}
          dailyTemperatureMin={dailyTemperatureMin}
          hourlyHumidity={hourlyHumidity}
          dailyChanceOfRain={dailyChanceOfRain}
        />
        <HourlyWeathers
          hourlyTime={hourlyTime}
          hourlyTemperature={hourlyTemperature}
          hourlyWeatherCode={hourlyWeatherCode}
          hourlyHumidity={hourlyHumidity}
          hourlyApparentTemperature={hourlyApparentTemperature}
          hourlyChanceOfRain={hourlyChanceOfRain}
          hourlyWindSpeed={hourlyWindSpeed}
          isDay={isDay}
        />
      </Grid>
      <DailyWeathers
        dailyTime={dailyTime}
        dailyWeatherCode={dailyWeatherCode}
        dailyTemperatureMax={dailyTemperatureMax}
        dailyTemperatureMin={dailyTemperatureMin}
        dailyApparentTemperatureMax={dailyApparentTemperatureMax}
        dailyApparentTemperatureMin={dailyApparentTemperatureMin}
        sunrise={sunrise}
        sunset={sunset}
        dailyWindSpeedMax={dailyWindSpeedMax}
        dailyChanceOfRain={dailyChanceOfRain}
        isDay={isDay}
      />
    </Grid>
  );
}
