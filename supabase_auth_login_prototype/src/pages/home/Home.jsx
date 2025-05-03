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
    GridItem,
    Icon,
    Avatar, IconButton
} from "@chakra-ui/react";
import {Fragment} from "react";
import {TemperatureIcon} from "@/components/shared/icons.jsx";



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

        <Fragment>
            {/*inicio*/}
            <Box wight="100%" bg={{base: "#F4F4F6", _dark:"#2F2F30"}}>

                <Container  maxW={1440}>

                    <Flex  mb="80px" px={{ base: '20px', md: "12px", lg:"22px" }} >
                        <Grid
                            w="full"
                            templateColumns={{
                                base: "repeat(1, 1fr)",
                                md: "repeat(2, 1fr)"
                            }}
                            gap={{base: "0px", md: "15px"}}
                            justifyContent="space-between"
                            alignItems="center"
                            justifyItems={{base: "center", md: "end"}}
                        >
                            <GridItem>
                        <VStack gap={{base: 3, md: 6}}>

                            <Heading mt={{base:"80px", md:"100px"}} as="h1" textStyle={{base: "4xl", md: "4xl", lg: "6xl"}} fontWeight="extrabold" color={{base:"#072C51", _dark:"white"}}>EXPLORA DATOS AMBIENTALES</Heading>

                            <Text
                                textStyle={{base: "lg", md: "2xl"}}
                                fontWeight={350}
                                color={{base:"gray.700", _dark:"white"}}
                            >
                                Conoce, analiza y predice los datos ambientales de
                                la ciudad de Juliaca.</Text>
                            <HStack gap={4} alignSelf="start">
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

                        </VStack>
                        </GridItem>

                            <GridItem>

                                <Box
                                    pos="relative"
                                    rounded="xl"
                                    display="flex"
                                    alignItems="flex-end"
                                    h={{base:"470px", md: "380px", lg: "470px"}}

                                >

                                    <Image
                                        maxW={{base:"470px", md: "380px", lg: "470px"}}
                                        src="/FondoInicio2.png"
                                        rounded="xl"
                                        shadow="2px -1px 15px 0px var(--shadow-color)"
                                        shadowColor={{base:"#2F2F30", _dark:"#C9EF26"}}
                                    />
                                        <Image

                                            maxH={{base: "470px", md: "380px", lg: "470px"}}
                                            src="/SujetoInicio.png"
                                            rounded="xl"
                                            position="absolute"
                                            top="0"
                                            left="0"
                                            zIndex={2}
                                        />

                                </Box>

                            </GridItem>
                        </Grid>

                    </Flex>

                </Container>

            </Box>

            {/*Separator*/}
            <Box maxW="full" minH={{base:"50px", md:"67px", lg:"77px"}} maxH="60xpx" bg="#CDF720" bgGradient="to-r" gradientFrom="#C9EF26" gradientTo="#00B5BB"><Icon size="lg" bg="transparent"><TemperatureIcon/></Icon></Box>

            {/*sensor info*/}
            <Box wight="100%" bg={{base: "#F4F4F6", _dark:"#252526"}}>
                <Container maxW={1440}>
                    <Flex my="100px" px={{ md: '25px', base: '20px' }} alignItems="center" justifyItems="center">
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
                                        <Card.Root width="350px" gap="19px" p="35px">
                                            <Card.Body gap="30px" p="0px">
                                                    <Icon w="120px" h="120px" rounded="full" aria-label="Temperature" bg="bg.muted" >
                                                        <Box p="20px">
                                                        <TemperatureIcon/>
                                                        </Box>
                                                    </Icon>
                                                <Card.Title>Nue Camp</Card.Title>
                                            </Card.Body>
                                            <Card.Footer p="0px">
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
                                                        shadow: "0px 0px 10px 1px var(--shadow-color)",
                                                        shadowColor: "red/50",
                                                        transform: "scale(1.05)",
                                                    }}
                                                >
                                                    Explorar
                                                </Button>
                                            </Card.Footer>
                                        </Card.Root>
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
        </Fragment>

    );

}



export default Home;