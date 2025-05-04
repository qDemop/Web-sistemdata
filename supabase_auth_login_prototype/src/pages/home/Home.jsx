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
    Icon, Span,
} from "@chakra-ui/react";
import {Fragment} from "react";
import {
    CorrienteIcon,
    IrradianciaIcon,
    ProximamenteIcon,
    TemperatureIcon,
    TensionIcon
} from "@/components/shared/icons.jsx";



const cardData = [
    {
        title: "TEMPERATURA",
        icon: TemperatureIcon,
    },
    {
        title: "IRRADIANCIA",
        icon: IrradianciaIcon,
    },
    {
        title: "TENSION",
        icon: TensionIcon,
    },
    {
        title: "CORRIENTE",
        icon: CorrienteIcon,
    },
    {
        title: "PROXIMAMENTE...",
        icon: ProximamenteIcon,
        disabled: true,
    },
    {
        title: "PROXIMAMENTE...",
        icon: ProximamenteIcon,
        disabled: true,
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

                            <Heading lineHeight="1.5" mt={{base:"80px", md:"100px"}} as="h1" textStyle={{base: "4xl", md: "4xl", lg: "7xl"}} fontWeight="extrabold" color={{base:"#072C51", _dark:"white"}}>EXPLORA DATOS AMBIENTALES</Heading>

                            <Box w={{base:"400px", md:"full"}}
                                 alignSelf="start"
                            ><Text
                                lineHeight="0.5"
                                textStyle={{base: "lg", md: "2xl"}}
                                fontWeight={350}
                                color={{base:"gray.700", _dark:"white"}}
                            >
                                Conoce, analiza y predice los datos ambientales de
                                la ciudad de Juliaca.</Text></Box>
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
                                    transition="transform 0.3s ease-in-out"
                                    _hover={{
                                        textDecoration: "none",
                                        transform: "scale(1.05)",
                                    }}
                                >

                                    <Image
                                        maxW={{base:"470px", md: "380px", lg: "470px"}}
                                        src="/FondoInicio2.png"
                                        rounded="xl"
                                        shadow="2px -1px 15px 0px var(--shadow-color)"
                                        shadowColor={{base:"#2F2F30", _dark:"#C9EF26"}}
                                    />
                                        <Image
                                            filter="dropShadow" dropShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
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
            <Box maxW="full" minH={{base:"50px", md:"67px", lg:"77px"}} maxH="60xpx" bg="#CDF720" bgGradient="to-r" gradientFrom="#C9EF26" gradientTo="#00B5BB"></Box>

            {/*sensor info*/}
            <Box wight="100%" bg={{base: "#F4F4F6", _dark:"#252526"}}>
                <Container maxW={1440}>
                    <Flex my="100px" px={{ md: '25px', base: '20px' }} alignItems="center" justifyItems="center">
                        <VStack
                            gap={10}
                            w={"full"}
                        >
                        <Heading as="h1" textStyle={{base: "4xl", md: "5xl", lg: "7xl"}} fontWeight="extrabold" color={{base:"#072C51", _dark:"white"}} alignSelf="start">NUESTROS SERVICIOS</Heading>
                            <Grid
                                w="full"
                                gridTemplateColumns={{
                                    base: "repeat(2, 1fr)",
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
                                            bg={{base: "#e4e4e4", _dark:"#4c4c4d"}}
                                            rounded="xl"
                                            overflow="hidden"
                                            transition="all 0.3s ease"
                                            _hover={{
                                                boxShadow: "lg",
                                                transform: "translateY(-10px)",
                                            }}
                                            width={{base:"240px", md: "300px", lg:"290px", xl:"380px"}} gap="19px" p={{base:"30px", md:"35px"}}>
                                            <Card.Body gap="30px" p="0px">
                                                <Icon w="80px" h="80px" rounded="full" aria-label="Temperature" bg="white" p="13px">
                                                    <Box>
                                                        <Box as={card.icon}/>
                                                    </Box>
                                                </Icon>
                                                <Card.Title opacity={card.disabled ? 0.6 : 1} fontWeight="bold" textStyle={{base:"xl", md:"2xl"}} color={{ base: "#072C51", _dark: "white" }}>
                                                    {card.title}
                                                </Card.Title>
                                            </Card.Body>
                                            <Card.Footer p="0px">
                                                <Button
                                                    rounded="lg"
                                                    textStyle={{ base: "sm", md: "md" }}
                                                    color="white"
                                                    border="none"
                                                    w={{ base: "auto", md: "120px" }}
                                                    h={{ base: "40px", md: "50px" }}
                                                    bg="transparent"
                                                    bgGradient="to-r"
                                                    gradientFrom="#C9EF26"
                                                    gradientTo="#00B5BB"
                                                    _hover={{
                                                        textDecoration: "none",
                                                        shadow: "0px 7px 14px -1px var(--shadow-color)",
                                                        shadowColor: {base:"#2F2F30/30", _dark:"#C9EF26/60"},
                                                        transform: "scale(1.05)",
                                                    }}
                                                    disabled={card.disabled}
                                                >
                                                    Explorar
                                                </Button>
                                            </Card.Footer>
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