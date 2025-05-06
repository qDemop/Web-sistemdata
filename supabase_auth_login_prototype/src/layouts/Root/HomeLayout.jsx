import {Flex, Box} from "@chakra-ui/react";
import {NavbarHo} from "@/components/Home/header/NavBar.jsx";
import {Footer} from "@/components/Home/footer/Footer.jsx"
import {Outlet} from "react-router-dom"

export function HomeLayout() {

    return (
        <Flex w="full"  minH="100dvh" spacing={0} display="grid" gridTemplateRows="auto 1fr auto" flexDirection="column">

            <NavbarHo />
            <Outlet/>
            <Footer  />
        </Flex>
    );
}