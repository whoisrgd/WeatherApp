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
          <Tr
            bg={isDay ? "#ffffffaa" : "#000000aa"}
            color={isDay ? "cyan.700" : "cyan.50"}
          >
            {dailyTime.map((d, i) => {
              return i ? (
                <Th
                  key={i}
                  fontSize="10px"
                  color={isDay ? "#0987A0AA" : "#EDFDFDAA"}
                >
                  {i === 1 ? "Tommorrow" : Day(d)}
                </Th>
              ) : (
                <Th key={i}></Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td fontSize="12px">Weather</Td>
            {dailyWeatherCode.map((code, i) => {
              return i ? (
                <Td key={i}>
                  <Image
                    w="50px"
                    src={`../${isDay ? "day" : "night"}/${getWeatherIcon(
                      code
                    )}.svg`}
                  />
                  <Text fontSize="10px">{getWeatherText(code)}</Text>
                </Td>
              ) : null;
            })}
          </Tr>
          <TableRow
            title={"Max Tempe"}
            data={dailyTemperatureMax}
            unit={"°C"}
          />
          <TableRow
            title={"Min Tempe"}
            data={dailyTemperatureMin}
            unit={"°C"}
          />
          <TableRow
            title={"Max Feels Like"}
            data={dailyApparentTemperatureMax}
            unit={"°C"}
          />
          <TableRow
            title={"Min Feels Like"}
            data={dailyApparentTemperatureMin}
            unit={"°C"}
          />
          <Tr>
            <Td fontSize="12px">Sunrise</Td>
            {sunrise.map((t, i) => {
              return i ? <Td key={i}>{Time(t)}</Td> : null;
            })}
          </Tr>
          <Tr>
            <Td fontSize="12px">Sunset</Td>
            {sunset.map((t, i) => {
              return i ? <Td key={i}>{Time(t)}</Td> : null;
            })}
          </Tr>
          <TableRow
            title={"Chance of Rain"}
            data={dailyChanceOfRain}
            unit={"%"}
          />
          <TableRow
            title={"Wind Speed"}
            data={dailyWindSpeedMax}
            unit={"km/h"}
          />
        </Tbody>
      </Table>
    </TableContainer>
  );
}
