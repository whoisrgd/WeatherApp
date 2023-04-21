import { Box, Spinner } from "@chakra-ui/react";
import { getSevenDaysWeather } from "../apis/weatherApi";
import { useQuery } from "@tanstack/react-query";

export default function Loading() {
  useQuery({
    queryKey: ["SevenDaysWeather"],
    queryFn: getSevenDaysWeather,
    staleTime: 60 * 60 * 1000,
  });

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="blackAlpha.700"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        thickness="4px"
        speed="0.6s"
        emptyColor="cyan.100"
        color="cyan.700"
        size="xl"
      />
    </Box>
  );
}
