import { Flex, Image, Text } from "@chakra-ui/react";

export default function Error({ error }) {
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
        fontSize="18px"
        fontWeight="700"
        textAlign="center"
        color="red.400"
        p="10px"
        w="100%"
        bg="cyan.100"
        borderRadius="4px"
        border="2px solid #ff1000"
      >
        Sorry! Please try again later. {error.message}
      </Text>
    </Flex>
  );
}
