import {
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import useTextAndIcons from "../hooks/useTextAndIcons";
import useDay from "../hooks/useDay";
import useTime from "../hooks/useTime";
import TableRow from "./TableRow";

export default function DailyWeathers(props) {
  const {
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
    isDay,
  } = props;
  const Day = useDay();
  const { getWeatherIcon, getWeatherText } = useTextAndIcons();
  const Time = useTime();

  return (
    <TableContainer
      bg={isDay ? "#ffffff50" : "#00000050"}
      backdropFilter="auto"
      backdropBlur="4px"
      border={`1px solid ${isDay ? "#ffffff60" : "#00000060"}`}
      color={isDay ? "cyan.700" : "cyan.50"}
      fontWeight="700"
      alignItems="center"
      m="0 10px 30px"
      p="10px"
    >
      <Table variant="striped" colorScheme="blackAlpha">
        <Thead>
          <Tr bg={isDay ? "#ffffffaa" : "#000000aa"}>
            {dailyTime.map((d, i) => {
              return i ? (
                <Th key={i} color={isDay ? "#0987A0" : "#EDFDFD"}>
                  {i === 1 ? "Tommorrow" : Day(d)}
                </Th>
              ) : (
                <Th
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  key={i}
                  color={isDay ? "#0987A0" : "#EDFDFD"}
                >
                  <Text display={{ lg: "none" }}>Scroll</Text>
                  <Text
                    fontWeight="900"
                    pos="relative"
                    as={motion.p}
                    animate={{
                      x: 20,
                      transition: {
                        type: "tween",
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  >
                    →
                  </Text>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td fontSize="12px" color={isDay ? "cyan.900" : "cyan.50"}>
              Weather
            </Td>
            {dailyWeatherCode.map((code, i) => {
              return i ? (
                <Td key={i}>
                  <Image
                    w="50px"
                    src={`../${isDay ? "day" : "night"}/${getWeatherIcon(
                      code
                    )}.svg`}
                  />
                  <Text fontSize="10px" color="whiteAlpha.900">
                    {getWeatherText(code)}
                  </Text>
                </Td>
              ) : null;
            })}
          </Tr>
          <TableRow
            title={"Max Tempe"}
            data={dailyTemperatureMax}
            unit={"°C"}
            isDay={isDay}
          />
          <TableRow
            title={"Min Tempe"}
            data={dailyTemperatureMin}
            unit={"°C"}
            isDay={isDay}
          />
          <TableRow
            title={"Max Feels Like"}
            data={dailyApparentTemperatureMax}
            unit={"°C"}
            isDay={isDay}
          />
          <TableRow
            title={"Min Feels Like"}
            data={dailyApparentTemperatureMin}
            unit={"°C"}
            isDay={isDay}
          />
          <Tr>
            <Td fontSize="12px" color={isDay ? "cyan.900" : "cyan.50"}>
              Sunrise
            </Td>
            {sunrise.map((t, i) => {
              return i ? <Td key={i}>{Time(t)}</Td> : null;
            })}
          </Tr>
          <Tr>
            <Td fontSize="12px" color={isDay ? "cyan.900" : "cyan.50"}>
              Sunset
            </Td>
            {sunset.map((t, i) => {
              return i ? <Td key={i}>{Time(t)}</Td> : null;
            })}
          </Tr>
          <TableRow
            title={"Chance of Rain"}
            data={dailyChanceOfRain}
            unit={"%"}
            isDay={isDay}
          />
          <TableRow
            title={"Wind Speed"}
            data={dailyWindSpeedMax}
            unit={"km/h"}
            isDay={isDay}
          />
        </Tbody>
      </Table>
    </TableContainer>
  );
}
