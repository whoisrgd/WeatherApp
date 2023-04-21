import { Box, Grid, Text } from "@chakra-ui/react";

export default function WeatherCard(props) {
  const { icon1, icon2, title1, value1, title2, value2, isDay } = props;
  return (
    <Grid
      bg={isDay ? "#ffffff30" : "#00000030"}
      color={isDay ? "cyan.700" : "cyan.50"}
      border={`1px solid ${isDay ? "#ffffff60" : "#00000060"}`}
      p={{ base: "4px", lg: "8px 20px" }}
      gap={2}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Box pb="10px" borderBottom="4px solid #EDFDFD70" w="100%">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          fontSize="30px"
        >
          {icon1}
        </Box>
        <Text fontSize="14px">{value1}</Text>
        <Text fontSize="8px" color={isDay ? "#0987A050" : "#EDFDFD50"}>
          {title1}
        </Text>
      </Box>
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          fontSize="30px"
        >
          {icon2}
        </Box>
        <Text fontSize="14px">{value2}</Text>
        <Text fontSize="8px" color={isDay ? "#0987A050" : "#EDFDFD50"}>
          {title2}
        </Text>
      </Box>
    </Grid>
  );
}
