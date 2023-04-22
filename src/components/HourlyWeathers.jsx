import { Box, Grid, Image, Text } from "@chakra-ui/react";
import useTime from "../hooks/useTime";
import useNextHours from "../hooks/useNextHours";
import useTextAndIcons from "../hooks/useTextAndIcons";

export default function HourlyWeathers(props) {
  const {
    hourlyTime,
    hourlyTemperature,
    hourlyWeatherCode,
    hourlyHumidity,
    hourlyApparentTemperature,
    hourlyChanceOfRain,
    hourlyWindSpeed,
    isDay,
  } = props;
  const { getWeatherIcon, getWeatherText } = useTextAndIcons();
  const getNextHoursArr = useNextHours();
  const Time = useTime();
  const TimeArr = getNextHoursArr(hourlyTime);
  const TempArr = getNextHoursArr(hourlyTemperature);
  const CodeArr = getNextHoursArr(hourlyWeatherCode);
  const HumidityArr = getNextHoursArr(hourlyHumidity);
  const FLTempArr = getNextHoursArr(hourlyApparentTemperature);
  const RainArr = getNextHoursArr(hourlyChanceOfRain);
  const WindSpeedArr = getNextHoursArr(hourlyWindSpeed);

  return (
    <Grid
      p="10px"
      bg={isDay ? "#ffffff50" : "#00000050"}
      backdropFilter="auto"
      backdropBlur="4px"
      border={`1px solid ${isDay ? "#ffffff60" : "#00000060"}`}
      color={isDay ? "cyan.700" : "cyan.50"}
      fontWeight="700"
      alignItems="center"
      gridTemplateColumns="repeat(4, 1fr)"
      gridTemplateRows="repeat(2, 1fr)"
      gap={2}
    >
      {TimeArr.map((t, i) => {
        return (
          <Box
            key={i}
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            bg={isDay ? "#ffffff30" : "#00000030"}
            color={isDay ? "cyan.700" : "cyan.50"}
            border={`1px solid ${isDay ? "#ffffff60" : "#00000060"}`}
            p={{ base: "10px 0", lg: "30px 10px" }}
            borderRadius="4px"
          >
            <Text fontSize="8px" color={isDay ? "#0987A050" : "#EDFDFD50"}>
              {i ? Time(t) : "Now"}
            </Text>
            <Image
              src={`../${isDay ? "day" : "night"}/${getWeatherIcon(
                CodeArr[i]
              )}.svg`}
            />
            <Text fontSize="10px">{getWeatherText(CodeArr[i])}</Text>
            <Text>{TempArr[i]} °C</Text>
            <Box
              fontSize={{ base: "8px", md: "10px" }}
              m="2px 0"
              w="90%"
              display="flex"
              justifyContent="space-between"
              borderBottom={`1px solid ${isDay ? "#ffffff90" : "#00000090"}`}
            >
              <Text>Feel</Text>
              <Text>{FLTempArr[i]} °C</Text>
            </Box>
            <Box
              fontSize={{ base: "8px", md: "10px" }}
              m="2px 0"
              w="90%"
              display="flex"
              justifyContent="space-between"
              borderBottom={`1px solid ${isDay ? "#ffffff90" : "#00000090"}`}
            >
              <Text>Humidity</Text>
              <Text>{HumidityArr[i]} %</Text>
            </Box>
            <Box
              fontSize={{ base: "8px", md: "10px" }}
              m="2px 0"
              w="90%"
              display="flex"
              justifyContent="space-between"
              borderBottom={`1px solid ${isDay ? "#ffffff90" : "#00000090"}`}
            >
              <Text>Rain</Text>
              <Text>{RainArr[i]} %</Text>
            </Box>
            <Box
              fontSize={{ base: "8px", md: "10px" }}
              m="2px 0"
              w="90%"
              display="flex"
              justifyContent="space-between"
              borderBottom={`1px solid ${isDay ? "#ffffff90" : "#00000090"}`}
            >
              <Text>Wind</Text>
              <Text>{WindSpeedArr[i]} km/h</Text>
            </Box>
          </Box>
        );
      })}
    </Grid>
  );
}
