import {Box, Container, Flex, HStack, Stack, Text} from '@chakra-ui/react'
import {Logo} from "../Logo/Logo";
import { FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';
import { Button } from '@chakra-ui/react'
export default function Navbar() {

    return (
            <Box
                maxW={"100%"}
                minW={"100%"}
                maxH={'50px'}
                bg="primary.600"
                px={4}
                boxShadow='dark-lg'
                position={"absolute"}
                zIndex={999}
                bottom={0}
                overflowY='hidden'
            >
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    px={4}
                    direction={'row'}
                    justify={"space-between"}
                    align={'center'}
                    maxH={"50px"}
                >
                    <Flex w="36" alignItems="center" mx="5" justifyContent="space-between">
                        <Logo />
                    </Flex>
                    <Text textAlign={'center'} fontSize={"xs"}>
                        ©Finances|2023
                    </Text>
                    <HStack>
                        <Button colorScheme='transparent' leftIcon={<FaGithub />}>
                            Github
                        </Button>
                        <Button colorScheme='transparent' leftIcon={<FaTwitter />}>
                            Twitter
                        </Button>
                        <Button colorScheme='transparent' leftIcon={<FaInstagram />}>
                            Instagram
                        </Button>
                    </HStack>
                </Container>
            </Box>
    )
}