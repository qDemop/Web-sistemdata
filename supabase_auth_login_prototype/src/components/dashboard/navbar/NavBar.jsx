import React from "react"
import {Box, Flex, HStack, Text} from "@chakra-ui/react";
import {useLocation} from "react-router";
import {dashboardLinks} from "@/constants/links.jsx";

const TextNav = () => {
    const location = useLocation();
    const currentPage = dashboardLinks.find(link => `/admin/${link.path}` === location.pathname);

    return(
        <Box>
            <Text as="h1" fontSize="2xl" fontWeight="bold" color="fg.inverted">
                {currentPage ? currentPage.label : "Datos Personales"}
            </Text>
        </Box>
    )
};

const NavBar = () => {
    return (
        <Flex justify="space-between" align="center" >
            <HStack spacing={2}>
                <TextNav />
            </HStack>
        </Flex>
    )
}
export default NavBar;