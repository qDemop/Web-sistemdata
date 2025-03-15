import {Flex, HStack, IconButton} from "@chakra-ui/react";

import {useState} from "react";
import Sidebar from "@/components/dashboard/sidebar/Sidebar.jsx";
import {MdMenu} from "react-icons/md";
import {Outlet} from "react-router";
import NavBar from "@/components/dashboard/navbar/NavBar.jsx";

export const DashboardLayout = () => {
    const [collapse, setCollapse] = useState(false);


    return (
<HStack w="full" h="100vh" bg="#F1F1F1" gap={0}>
    <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? {base: "300px", md: "263px", lg: "263px"} : {base: "70px", md: "100px", lg: "100px"}}
        bg="blue.subtle"
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
    >
        <Sidebar collapse={collapse} />
    </Flex>
    <Flex
        flex="1"
        as="main"
        w="full"
        h="full"
        pt="24px"
        px="24px"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
    >
        <IconButton
            aria-label="Menu Colapse"
            position="absolute"
            variant="subtle"
            bg="blue.400"
            color="white"
            borderRadius="xl"
            top="24px"
            left="24px"
            size="xs"
            onClick={() => setCollapse(!collapse)}
        ><MdMenu  />
        </IconButton>
        <NavBar/>
        <Outlet/>
    </Flex>
</HStack>
    );
};