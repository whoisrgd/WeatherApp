import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { BiCurrentLocation, BiWind } from "react-icons/bi";
import { WiHumidity, WiRaindrop, WiSunrise, WiSunset } from "react-icons/wi";
import { GiWindpump } from "react-icons/gi";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import useTextAndIcons from "../hooks/useTextAndIcons";
import useWindDirection from "../hooks/useWindDirection";
import useTime from "../hooks/useTime";
import WeatherCard from "./WeatherCard";

export default function CurrentWeathers(props) {
  const {
    city,
    currentTemperature,
    currentWindSpeed,
    currentWindDirection,
    currentWeatherCode,
    sunrise,
    sunset,
    dailyTemperatureMax,
    dailyTemperatureMin,
    isDay,
    weatherIcon,
    hourlyHumidity,
    dailyChanceOfRain,
  } = props;
  const getWindDirection = useWindDirection();
  const { getWeatherText } = useTextAndIcons();
  const Time = useTime();
  const weatherText = getWeatherText(currentWeatherCode);
  const windDirection = getWindDirection(currentWindDirection);
  const sunriseTime = Time(sunrise[0]);
  const sunsetTime = Time(sunset[0]);
  const TempMax = dailyTemperatureMax[0];
  const TempMin = dailyTemperatureMin[0];

  return (
    <Box
      bg={isDay ? "#ffffff50" : "#00000050"}
      backdropFilter="auto"
      backdropBlur="4px"
      border={`1px solid ${isDay ? "#ffffff60" : "#00000060"}`}
      p="10px"
      // m={{ base: "10px 10px 0", md: "20px 0 20px 20px" }}
      color={isDay ? "cyan.700" : "cyan.50"}
      fontWeight="700"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <Box display="flex" justifyContent="start" alignItems="center">
        <BiCurrentLocation color="#00bbee" />
        <Text ml="6px">{city}</Text>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          w="40%"
          src={`../${isDay ? "day" : "night"}/${weatherIcon}.svg`}
        />
        <Box pos="relative" top="-30px">
          <Text fontSize="40px">
            {currentTemperature} °<sup style={{ fontSize: "25px" }}>C</sup>
          </Text>
          <Text
            p="4px 20px"
            fontSize="12px"
            textAlign="center"
            borderRadius="4px"
            bg={isDay ? "cyan.100" : "cyan.700"}
          >
            {weatherText}
          </Text>
        </Box>
      </Box>
      <Grid
        mt="10px"
        alignItems="center"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={2}
      >
        <WeatherCard
          icon1={<WiSunrise color="orange" />}
          value1={sunriseTime}
          title1={"Sunrise"}
          icon2={<WiSunset color="red" />}
          value2={sunsetTime}
          title2={"Sunset"}
          isDay={isDay}
        />
        <WeatherCard
          icon1={<BiWind color="#90CDF4" />}
          value1={currentWindSpeed + " km/h"}
          title1={"Wind Speed"}
          icon2={<GiWindpump color="#D69E2E" />}
          value2={windDirection}
          title2={"Direction"}
          isDay={isDay}
        />
        <WeatherCard
          icon1={<FaTemperatureHigh color="#F56565" />}
          value1={TempMax + " °C"}
          title1={"High Temp"}
          icon2={<FaTemperatureLow color="#63B3ED" />}
          value2={TempMin + " °C"}
          title2={"Low Temp"}
          isDay={isDay}
        />
        <WeatherCard
          icon1={<WiRaindrop color="#9DECF9" />}
          value1={dailyChanceOfRain[0] + " %"}
          title1={"Rain"}
          icon2={<WiHumidity color="#FEFCBF" />}
          value2={hourlyHumidity[0] + " %"}
          title2={"Humidity"}
          isDay={isDay}
        />
      </Grid>
    </Box>
  );
}
