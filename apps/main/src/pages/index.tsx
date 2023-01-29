import { Flex } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import {Navbar} from "@finances/ui";
import {Footer} from "@finances/ui";

export default function Home() {
  return (
    <>
      <Navbar/>
        <Flex
            bg="primary.100"
            maxW="100%"
            minH="100vh"
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Center
                bg="primary.300"
                h="100px"
                color="white"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                padding={5}
            >
                Welcome to finances!!
            </Center>
        </Flex>
        <Footer/>
    </>
  )
}
