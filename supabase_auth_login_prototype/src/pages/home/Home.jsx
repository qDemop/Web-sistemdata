import {Link} from "react-router-dom";

import {
    Box,
    Flex,
    Container,
    Image,
    Heading,
    Text,
    HStack,
    Button,
    Card,
    VStack,
    Grid,
    GridItem
} from "@chakra-ui/react";



const cardData = [
    {
        title: "TEMPERATURA",
        imageSrc:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        imageAlt: "Green double couch with wooden legs",
    },
    {
        title: "IRRADIANCIA",
        imageSrc:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        imageAlt: "Green double couch with wooden legs",
    },
    {
        title: "TENSION",
        imageSrc:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        imageAlt: "Green double couch with wooden legs",
    },

];

function Home() {

    return (

        <>
            {/*inicio*/}
            <Box wight="100%" bg={{base: "#F4F4F6", _dark:"#2F2F30"}}>

                <Container maxW={1400}>

                    <Flex gap="30px" my="100px" px={{ md: '30px', base: '20px' }} display={{ lg: 'flex', base: 'grid' }} alignItems="center">

                        <Box flexBasis="50%">

                            <Heading as="h1" textStyle={{base: "4xl", md: "5xl", lg: "6xl"}} fontWeight="extrabold" color={{base:"#072C51", _dark:"white"}}>EXPLORA DATOS AMBIENTALES</Heading>

                            <Text
                                mt={{base: 3, md: 6}}
                                textStyle={{base: "lg", md: "2xl"}}
                                fontWeight={350}
                                color={{base:"gray.700", _dark:"white"}}
                            >
                                Conoce, analiza y predice los datos ambientales de
                                la ciudad de Juliaca.</Text>
                            <HStack gap={4} mt={{base: 3, md: 7}}>
                                <Button
                                    as={Link}
                                    to="/login"
                                    variant="outline"
                                    rounded="lg"
                                    borderColor="#C9EF26"
                                    textStyle={{base: "md", md: "lg"}}
                                    fontWeight="medium"
                                    color="#072C51"
                                    w={{base: "100px", md: "160px"}}
                                    height={{base: "40px", md: "50px"}}
                                    position="relative"
                                    overflow="hidden"
                                    bg="white"
                                    _hover={{
                                        color: "transparent",
                                        textDecoration: "none",
                                        border: "none",
                                        _after: {
                                            width: "100%",
                                        },
                                    }}
                                    _after={{
                                        content: '"Iniciar"',
                                        position: "absolute",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        top: 0,
                                        left: 0,
                                        width: "0%",
                                        height: "100%",
                                        color: "white",
                                        background: "linear-gradient(to right, #C9EF26, #00B5BB)",
                                        transition: "width 0.3s ease-in-out",
                                        overflow: "hidden",
                                    }}
                                >
                                    Iniciar
                                </Button>
                                <Button
                                    rounded="lg"
                                    color="white"
                                    textStyle={{base: "md", md: "lg"}}
                                    fontWeight="medium"
                                    border="none"
                                    w={{base: "100px", md: "160px"}}
                                    height={{base: "40px", md: "50px"}}
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

                        <Box flexBasis="65%">

                            <Image w="full" src="/PORTADA.png" rounded="xl"/>

                        </Box>



                    </Flex>

                </Container>

            </Box>
            {/*Separator*/}
            <Box maxW="full" minH={{base:"40px", md:"50px"}} maxH="60xpx" bg="#CDF720" bgGradient="to-r" gradientFrom="#C9EF26" gradientTo="#00B5BB"></Box>
            {/*sensor info*/}
            <Box wight="100%" bg={{base: "#F4F4F6", _dark:"#252526"}}>
                <Container maxW={1400}>
                    <Flex my="100px" px={{ md: '30px', base: '20px' }} alignItems="center" justifyItems="center">
                        <VStack
                            gap={10}
                            w={"full"}
                        >
                        <Heading as="h1" textStyle={{base: "4xl", md: "5xl", lg: "6xl"}} fontWeight="extrabold" color={{base:"#072C51", _dark:"white"}} alignSelf="start">EXPLORA</Heading>
                            <Grid
                                w="full"
                                gridTemplateColumns={{
                                    base: "minmax(270px, 1fr)",
                                    md: "repeat(2, minmax(280px, 1fr))",
                                    lg: "repeat(3, minmax(280px, 1fr))"
                                }}
                                gap={{base: "20px", md: "15px"}}
                                justifyContent="space-between"
                                justifyItems="center"
                            >
                                {cardData.map((card, index) => (
                                    <GridItem
                                        key={index}
                                    >
                                    <Card.Root
                                        bg={{base: "white", _dark:"#F4F4F6/15"}}
                                        rounded="xl"
                                        maxW="xs"
                                        overflow="hidden"
                                        transition="all 0.3s ease"
                                        _hover={{
                                            boxShadow: "lg",
                                            transform: "translateY(-10px)",
                                        }}
                                    >
                                        <Image src={card.imageSrc} alt={card.imageAlt} />
                                        <Card.Body gap="2">
                                            <HStack alignItems="center" justifyContent="space-between">
                                                <Card.Title color={{ base: "#072C51", _dark: "white" }}>
                                                    {card.title}
                                                </Card.Title>
                                                <Button
                                                    rounded="lg"
                                                    textStyle={{ base: "sm", md: "md" }}
                                                    color="white"
                                                    border="none"
                                                    w={{ base: "auto", md: "100px" }}
                                                    bg="transparent"
                                                    bgGradient="to-r"
                                                    gradientFrom="#C9EF26"
                                                    gradientTo="#00B5BB"
                                                    _hover={{
                                                        textDecoration: "none",
                                                        shadow: "lg",
                                                        transform: "scale(1.05)",
                                                    }}
                                                >
                                                    Explorar
                                                </Button>
                                            </HStack>
                                        </Card.Body>
                                    </Card.Root>
                                    </GridItem>
                                ))}
                        </Grid>
                        </VStack>
                    </Flex>
                </Container>
            </Box>
        </>

    );

}



export default Home;