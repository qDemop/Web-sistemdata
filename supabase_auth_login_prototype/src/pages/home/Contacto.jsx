import {Box, Flex, Container, Stack, Heading, Text, Image, Grid, VStack, Textarea, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export function Contacto() {
    return (
        <>
            <Box bg={{base: "#F4F4F6", _dark:"#2F2F30"}}>
                <Container maxW={1440}>
                    <Flex w="full" py="80px" px={{ base: '20px', md: "12px", lg:"22px" }}>
                        <Grid
                            w="full"
                            templateColumns={{
                                base: "repeat(1, 1fr)",
                                md: "repeat(2, 1fr)"
                            }}
                            gap={{base: "30px", md: "55px"}}
                            justifyContent="space-between"
                            alignItems="center"
                            justifyItems={{base: "center", md: "end"}}
                        >

                            <Image
                                mx="auto"
                                src="/FEEDBACK.png"
                                maxH="500px"
                                borderRadius="10px"
                                shadow="0 0 10px 0px var(--shadow-color)"
                                shadowColor={{base:"#2F2F30", _dark:"#C9EF26"}}
                            />
                        <VStack maxH="500px" justifyContent="center" alignItems="start" gap="20px" >
                                <Heading size='2xl' fontWeight="bold" color={{base:"#072C51", _dark:"#CDF120"}}>¡TU OPINIÓN NOS IMPORTA!</Heading>
                                <Text> Queremos seguir mejorando y crecer junto a tí. Contanos tu experiencia
                                    usando la plataforma, sugerencias o cualquier idea que tengas. Cada
                                    mensaje nos ayuda a ofrecerte una mejor herramienta para explorar los datos
                                    solares de nuestra región. ¡Te leemos! </Text>
                            <Box
                                w="full"
                                p="5px"
                                pb="0px"
                                bgGradient="to-r" gradientFrom="#C9EF26" gradientTo="#00B5BB"
                                alignItems="center"
                                borderRadius="10px"
                                position="relative"
                            >
                                <Textarea
                                    autoresize
                                    maxH={{base: "200px", md: "192px", lg: "286px"}}
                                    variant="subtle"
                                    _focus={{
                                        outline: "none",
                                        border: "none",
                                    }}
                                    css={{
                                        "&::selection": {
                                            backgroundColor: "#00B5BB",
                                            color: "white"
                                        }
                                    }}
                                    borderRadius="10px"
                                    bg={{base: "#E4E3E8", _dark:"#202021"}}
                                    placeholder="Comentanos..." />
                            </Box>

                                <Button
                                    alignSelf="end"
                                    rounded="lg"
                                    color="white"
                                    textStyle={{base: "md", md: "lg"}}
                                    fontWeight="medium"
                                    border="none"
                                    w={{base: "100px", md: "120px"}}
                                    bg="transparent"
                                    bgGradient="to-r" gradientFrom="#C9EF26" gradientTo="#00B5BB"
                                    transition="transform 0.3s ease-in-out"                                    _hover={{
                                        textDecoration: "none",
                                        shadow: "0px 7px 14px -1px var(--shadow-color)",
                                        shadowColor: {base:"#2F2F30/30", _dark:"#C9EF26/60"},
                                        transform: "scale(1.05)",
                                    }}
                                >
                                    <Link to="/data">Enviar</Link>
                                </Button>
                        </VStack>
                        </Grid>
                    </Flex>
                </Container>

            </Box>

        </>
    )
}