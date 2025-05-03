import {Box, Flex, Container, Stack, Heading, Text, Image} from "@chakra-ui/react";

export function Contacto() {
    return (
        <>
            <Box bg="bg.subtle">
                <Container maxW={1440}>
                    <Flex my='50px' px={{ lg: '50px', base: '20px' }}  gap='30px' display={{ lg: 'flex', base: 'grid' }}>
                        <Stack>
                            <Box flexBasis='50%'>
                                <Heading size='2xl' color={{base:"#072C51", _dark:"#CDF120    "}}>Envíanos un mensaje</Heading>
                                <Text mt={5}> contentsdas of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
                            </Box>
                            <Box>
                                <Image mx='auto' src='/PORTADA.png' alt='Us' />
                            </Box>
                        </Stack>
                    </Flex>
                </Container>

            </Box>

        </>
    )
}