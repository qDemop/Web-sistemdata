import {Flex} from "@chakra-ui/react";
import {NavbarHo} from "@/components/Home/header/NavBar.jsx";
import Home from "@/pages/home/Home.jsx";


export function HomeLayout() {

    return (
        <Flex w="full" spacing={0}>
            <NavbarHo />
        </Flex>
    );
}