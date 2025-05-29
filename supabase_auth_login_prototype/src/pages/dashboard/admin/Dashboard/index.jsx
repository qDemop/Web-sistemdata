import supabase from "../../../../api/supabaseClient.js";
import { useNavigate, Link } from "react-router-dom"
import {
    Box,
    Card,
    Flex,
    Grid,
    GridItem,
    Heading,
    IconButton,
    Text,
} from "@chakra-ui/react";
import {LuDatabaseZap, LuRadio, LuSun, LuThermometerSun, LuUsers, LuZap} from "react-icons/lu";
import {SparkLineIrra, SparkLineTemp, SparkLineTens} from "@/pages/dashboard/admin/Dashboard/SparkLine.jsx";


const cardData = [
    {
        title: "Sensores",
        icon: LuRadio,
        color: "red",
        regis: 3,
        element: null,
    },
    {
        title: "Usuarios",
        icon: LuUsers,
        color: "blue",
        regis: 15,
        element: null,
    },
    {
        title: "Datos Registrados",
        icon: LuDatabaseZap,
        color: "green",
        regis: 1100,
        element: null,
    },
    {
        title: "Datos de Temperatura",
        icon: LuThermometerSun,
        color: "orange",
        regis: 321,
        element: SparkLineTemp,
    },
    {
        title: "Datos de Irradiancia",
        icon: LuSun,
        color: "yellow",
        regis: 321,
        element: SparkLineIrra,
    },
    {
        title: "Datos de Tension",
        icon: LuZap,
        color: "purple",
        regis: 321,
        element: SparkLineTens,
    },

];

function DashAdmin() {

    const navigate = useNavigate();
    const singOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        navigate("/login");
    }

    return (
        <Flex
            direction="column"
            w="full"
            gap={5}

        >
            <Heading as="h2" size="4xl" fontWeight="semibold">
                Dashboard
            </Heading>
            <Grid
                w="full"
                templateColumns={{
                    base: "repeat(auto-fit, minmax(100%, 1fr))",
                    md: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
                    lg: "repeat(auto-fit, minmax(min(310px, 100%), 1fr))",
                    xl: "repeat(auto-fit, minmax(min(360px, 100%), 1fr))",
                }}
                maxW={{ xl: "1440px"}}
                mx="auto"
                gap={{base: "20px", md: "15px"}}
                justifyContent="space-between"
                alignItems="center"
                justifyItems="center"
            >
                {cardData.map((card, index) => (
                    <GridItem
                        key={index}
                        w={{base:"full", md:"300px", lg:"310px", xl:"360px"}}
                        h="auto"

                    >
                        <Card.Root
                            rounded="xl"
                            transition="all 0.3s ease"
                            _hover={{
                                boxShadow: "lg",
                                transform: "translateY(-10px)",
                            }}
                            variant="elevated"
                            size="sm"
                            w={{base:"full", md:"300px", lg:"290px", xl:"360px"}}
                            h="auto"
                            overflow="hidden"
                        >
                            <Card.Body flexDirection="row" gap="2" alignContens="start" justifyContent="space-between" pb={0}>
                                <Card.Title lineHeight="1.1" truncate as="h3" fontSize={{base:"md", md:"lg", lg:"xl"}} fontWeight="medium" >
                                    {card.title}
                                    <Text fontSize={{base:"xs", md:"sm", lg:"md"}} fontWeight="normal">(TOTAL)</Text>
                                </Card.Title>
                                <IconButton rounded="md" variant="subtle" size={{base:"lg", md:"xl", lg:"2xl"}} colorPalette={card.color}>
                                    <Box as={card.icon} w={{base:"24px", md:"30px", lg:"40px"}} h={{base:"24px", md:"30px", lg:"40px"}} />
                                </IconButton>
                            </Card.Body>
                            <Card.Footer flexDirection="column" gap={{base:0, md:2}} alignItems="start">
                                <Heading fontSize={{base:"2xl", md:"3xl", lg:"4xl"}} fontWeight="bold">
                                    {card.regis}
                                </Heading>
                                <Text fontSize={{base:"xs", md:"sm", lg:"sm"}} fontWeight="normal" color="fg.subtle">
                                    Hace 1 hora
                                </Text>
                                {card.element ? <card.element /> : null}
                            </Card.Footer>
                        </Card.Root>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    )

}

export default DashAdmin;