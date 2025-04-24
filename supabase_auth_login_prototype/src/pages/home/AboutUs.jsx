import {Box, Container, Heading, Flex, Image, Text, Separator, Stack} from "@chakra-ui/react";
import {Fragment} from "react";

export function AboutUsPage() {
    return (
<Fragment>
        <Box bg={{base: "#F4F4F6", _dark:"#2F2F30"}}>
            <Container maxW={1400} >
                <Flex gap={{base:"40px", md: "60px", lg:"80px"}} my="80px" px={{ md: '30px', base: '20px' }} display={{ lg: 'flex', base: 'grid' }} alignItems="center">
                    <Box flexBasis='50%'>
                            <Image mx='auto' src='/PORTADA.png' alt='Us' rounded="xl"/>
                    </Box>
                    <Box flexBasis='50%'>
                            <Heading size='2xl' fontWeight="bold" color={{base:"#072C51", _dark:"#CDF120"}}>
                                NOSOTROS
                            </Heading>
                            <Text mt={5}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    <Box bg={{base: "white", _dark:"#2F2F30"}}>
        <Container maxW={1400}  >
            <Stack direction={{ base: "column", md: "row" }} align={{ base: "center", md: "stretch" }} justifyContent="space-around" px={{ md: '30px', base: '20px' }} my="80px"
            >
                <Box minW="300px" maxW="400px">
                    <Heading size='2xl' fontWeight="bold" alignItems="center" textAlign="center" color={{base:"#072C51", _dark:"#CDF120"}}>
                        VISIÓN
                    </Heading>
                    <Text textAlign="center" mt={5}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper suscipit lobortis nisl
                    </Text>
                </Box>
                <Separator orientation={{ base: "horizontal", md: "vertical" }} size="xl" />
                <Box minW="300px" maxW="400px" mt={{base:"30px", md:"0px"}}>
                    <Heading size='2xl' fontWeight="bold" textAlign="center" color={{base:"#072C51", _dark:"#CDF120"}}>
                        MISIÓN
                    </Heading>
                    <Text textAlign="center" mt={5}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper suscipit lobortis nisl
                    </Text>
                </Box>
            </Stack>
        </Container>
    </Box>
</Fragment>
    )
}

