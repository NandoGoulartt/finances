import { Center, Box, SimpleGrid } from "@chakra-ui/react";
import {Navbar} from "@finances/ui";
import { gql, useQuery} from "@apollo/client";


const GET_USER = gql`
    query {
     users {
         id,
         name
     }
    }
`;

export default function Home() {
    const { data } = useQuery(GET_USER)
    console.log(data)

  return (
    <SimpleGrid minW={'100%'} grid-auto-columns={true}>
      <Navbar/>
        <Box
            bg="primary.100"
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
        </Box>
    </SimpleGrid>
  )
}
