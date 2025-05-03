import {Text, VStack, Box, Flex} from "@chakra-ui/react"
import { PacmanLoader } from "react-spinners";
import { useColorModeValue } from "@/components/ui/color-mode"

export default function Loader() {

    const spinnerColor = useColorModeValue("#072C51", "#C9EF26")


    return (

        <Flex colorPalette="teal" w="100vw" h="100vh" justifyContent="center" alignItems="center" bg={{base: "#F4F4F6", _dark:"#2F2F30"}}>
            <VStack
                alignItems="center"
                justify="center"
                gap={6}
            >
                <Box
                    width="175px"
                >
            <PacmanLoader
                size={40}
                with="100%"
                color={spinnerColor}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
                </Box>

            <Text color={{base:"#072C51", _dark:"#C9EF26"}} textStyle="xl" >Cargando...</Text>
            </VStack>
        </Flex>
    );
}