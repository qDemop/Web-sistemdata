import {Link} from "react-router-dom";

import {Box, Flex, Container, Image, Heading, Text, HStack, Button, Card, VStack} from "@chakra-ui/react";





function Home() {

    return (

        <>
            {/*inicio*/}
            <Box wight="100%">

                <Container maxW={1400}>

                    <Flex gap="20px" my="100px" px={{ md: '50px', base: '20px' }} display={{ lg: 'flex', base: 'grid' }} alignItems="center">

                        <Box flexBasis="60%">

                            <Heading as="h1" textStyle={{base: "4xl", md: "5xl", lg: "6xl"}} fontWeight="extrabold" color={{base:"#072C51", _dark:"white"}}>EXPLORA DATOS AMBIENTALES</Heading>

                            <Text
                                mt={{base: 3, md: 6}}
                                textStyle={{base: "lg", md: "2xl"}}
                                fontWeight={350}
                                color={{base:"gray.700", _dark:"white"}}
                            >
                                Conoce, analiza y predice los datos ambientales de
                                la ciudad de Juliaca.</Text>
                            <HStack spacing={4} mt={5}>
                                <Button
                                    variant="outline"
                                    rounded="lg"
                                    borderColor="#C9EF26"
                                    textStyle={{base: "sm", md: "md"}}
                                    color={{base:"#072C51", _dark:"white"}}
                                    w={{base: "auto", md: "100px"}}
                                    position="relative"
                                    overflow="hidden"
                                    bg="transparent"
                                    _hover={{
                                        color: "white",
                                        textDecoration: "none",
                                        border:"none",
                                        _after: {
                                            width: "100%",
                                        },
                                    }}
                                    _after={{
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "0%",
                                        height: "100%",
                                        background: "linear-gradient(to right, #C9EF26, #00B5BB)",
                                        transition: "width 0.3s ease-in-out",
                                        zIndex: -1,
                                    }}
                                >
                                    <Link to="/login">Iniciar</Link>
                                </Button>
                                <Button
                                    rounded="lg"
                                    textStyle={{base: "sm", md: "md"}}
                                    color="white"
                                    border="none"
                                    w={{base: "auto", md: "100px"}}
                                    bg="transparent"
                                    bgGradient="to-r" gradientFrom="#C9EF26" gradientTo="#00B5BB"
                                    _hover={{
                                        textDecoration: "none",
                                        shadow: "lg",
                                        transform: "scale(1.05)",
                                    }}
                                >
                                    <Link to="/data">Buscar</Link>
                                </Button>
                            </HStack>

                        </Box>

                        <Box flexBasis="60%">

                            <Image mx="auto" src="/PORTADA.png"/>

                        </Box>



                    </Flex>

                </Container>

            </Box>
            {/*Separator*/}
            <Box maxW="full" minH={{base:"40px", md:"50px"}} maxH="60xpx" bg="#CDF720" bgGradient="to-r" gradientFrom="#C9EF26" gradientTo="#00B5BB"></Box>
            {/*sensor info*/}
            <Box>
                <Container maxW={1400}>
                    <Flex gap="20px" my="100px" px={{ md: '50px', base: '20px' }} display={{ lg: 'flex', base: 'grid' }} alignItems="center">
                        <VStack gap={10}>
                        <Heading as="h1" textStyle={{base: "4xl", md: "5xl", lg: "6xl"}} fontWeight="extrabold" color={{base:"#072C51", _dark:"white"}} alignSelf="start">EXPLORA</Heading>
                            <HStack gap={20}>
                        <Card.Root maxW="sm" overflow="hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt="Green double couch with wooden legs"
                            />

                            <Card.Body gap="2">
                                <HStack alignItems="center" justifyContent="space-between">
                                <Card.Title
                                    color={{base:"#072C51", _dark:"white"}}
                                >TEMPERATURA</Card.Title>
                                <Button rounded="lg"
                                        textStyle={{base: "sm", md: "md"}}
                                        color="white"
                                        border="none"
                                        w={{base: "auto", md: "100px"}}
                                        bg="transparent"
                                        bgGradient="to-r" gradientFrom="#C9EF26" gradientTo="#00B5BB"
                                        _hover={{
                                            textDecoration: "none",
                                            shadow: "lg",
                                            transform: "scale(1.05)",
                                        }}>Explorar</Button>
                                </HStack>

                            </Card.Body>
                        </Card.Root>
                        <Card.Root maxW="sm" overflow="hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt="Green double couch with wooden legs"
                            />

                            <Card.Body gap="2">
                                <HStack alignItems="center" justifyContent="space-between">
                                    <Card.Title
                                        color={{base:"#072C51", _dark:"white"}}
                                    >IRRADIANCIA</Card.Title>
                                    <Button rounded="lg"
                                            textStyle={{base: "sm", md: "md"}}
                                            color="white"
                                            border="none"
                                            w={{base: "auto", md: "100px"}}
                                            bg="transparent"
                                            bgGradient="to-r" gradientFrom="#C9EF26" gradientTo="#00B5BB"
                                            _hover={{
                                                textDecoration: "none",
                                                shadow: "lg",
                                                transform: "scale(1.05)",
                                            }}>Explorar</Button>
                                </HStack>

                            </Card.Body>
                        </Card.Root>
                        <Card.Root maxW="sm" overflow="hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt="Green double couch with wooden legs"
                            />

                            <Card.Body gap="2">
                                <HStack alignItems="center" justifyContent="space-between">
                                    <Card.Title
                                        color={{base:"#072C51", _dark:"white"}}
                                    >TENSION</Card.Title>
                                    <Button rounded="lg"
                                            textStyle={{base: "sm", md: "md"}}
                                            color="white"
                                            border="none"
                                            w={{base: "auto", md: "100px"}}
                                            bg="transparent"
                                            bgGradient="to-r" gradientFrom="#C9EF26" gradientTo="#00B5BB"
                                            _hover={{
                                                textDecoration: "none",
                                                shadow: "lg",
                                                transform: "scale(1.05)",
                                            }}>Explorar</Button>
                                </HStack>

                            </Card.Body>
                        </Card.Root>
                        </HStack>
                        </VStack>
                    </Flex>
                </Container>
            </Box>
        </>

    );

}



export default Home;