import {Box, Container, Flex } from "@chakra-ui/react";
import {Fragment} from "react";
import Grafico from "@/pages/home/DataRe/Grafico.jsx";

export function Datareal () {

    return (
        <Box bg={{base: "#F4F4F6", _dark:"#2F2F30"}}>
            <Container maxW={1400}>
                <Flex gap={{base:"40px", md: "60px", lg:"80px"}} my="80px" px={{ md: '30px', base: '20px' }} display={{ lg: 'flex', base: 'grid' }} alignItems="center">

        <Grafico/>
                </Flex>
            </Container>
        </Box>

    );
}