import { Flex, Text } from "@chakra-ui/react";
import LocationAllowed from "../pages/LocationAllowed";
import LocationNotAllowed from "../pages/LocationNotAllowed";
import useLocation from "../hooks/useLocation";

export default function MainLayout() {
  const isLocationAllowed = useLocation();

  return (
    <Flex
      maxW="100vw"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="cyan.100"
    >
      {isLocationAllowed ? <LocationAllowed /> : <LocationNotAllowed />}
      <Text
        fontSize="10px"
        color="cyan.50"
        fontWeight="500"
        position="absolute"
        bottom="2px"
      >
        &copy; {new Date().getFullYear()} RGD
      </Text>
    </Flex>
  );
}
