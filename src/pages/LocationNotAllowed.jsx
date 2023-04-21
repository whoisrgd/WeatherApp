import { Flex, Image, Progress, Text } from "@chakra-ui/react";

export default function LocationNotAllowed() {
  return (
    <Flex
      w={{ base: "90%", sm: "60%", md: "30%", lg: "30%" }}
      h="80%"
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDir="column"
      bg="cyan.50"
      p="20px"
      borderRadius="4px"
      backdropFilter="auto"
      backdropBlur="8px"
    >
      <Image src="../weather.svg" w="100%" mb="20px" />
      <Text
        fontSize="20px"
        fontWeight="700"
        textAlign="center"
        color="cyan.700"
        p="10px"
        w="100%"
        bg="cyan.100"
        borderRadius="4px"
      >
        Allow Location To Get Weather
      </Text>
      <Progress size="xs" w="100%" colorScheme="cyan" isIndeterminate />
    </Flex>
  );
}
