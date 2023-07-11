import {
    Avatar,
    Box, Button,
    Center, Flex,
    HStack,
    Link, Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Stack
} from '@chakra-ui/react'
import {Logo} from '@finances/ui'
export default function Navbar() {
//inset -1px 2px 20px 0px #2e2e2e73;
    return (
        <>
            <Box
                bg="primary.600"
                px={4}
                boxShadow='dark-lg'
            >
                <Box h={24} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box w="42" alignItems="center" mx="8">
                            <Link href={'/'}>
                                <Logo widht={'1000px'} />
                            </Link>
                        </Box>

                    </HStack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    aria-label={'user options'}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                >
                                    <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar size={'2xl'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>{'Username'}</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem as={'button'} >
                                        Logout
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Box>
            </Box>
        </>
    )


}