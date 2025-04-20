import {
    Avatar,
    Button,
    Flex,
    Heading,
    IconButton,
    Input,
    InputGroup,
    List,
    Skeleton,
    ClientOnly, Icon, Link, Image,
    Box
} from "@chakra-ui/react";
import { FaBurger } from "react-icons/fa6";
import {FaBell, FaSearch} from "react-icons/fa";
import PropTypes from "prop-types";
import {NavItems} from "@/components/Home/header/NavItems.jsx";
import {NavLink} from "react-router-dom";
import { useColorMode} from "@/components/ui/color-mode.jsx";
import {BsMoonStars, BsSun} from "react-icons/bs";


export function LeftContent ({items, onToggle}) {
    return (
        <Flex alignItems="center" justifyContent="space-between" gap={2}>
            <IconButton
                aria-label="menu"
                size="sm"
                color={{base:"#072C51", _dark:"#C9EF26"}}
                variant="ghost"
                rounded="full"
                display={{base: "flex", md: "none"}}
                onClick={onToggle}
            >
                <FaBurger/>
            </IconButton>

            <Box as={NavLink} to="/">
                <Image src="/logopage.svg" alt="Logo" width={{base:"60px", md:"70px"}} />
            </Box>


            <List.Root
                variant="plain"
                flexDirection="row"
                gap={2}
                display={{base: "none", md: "flex"}}>
                {items.map((item) => (
                    <NavItems key={item.label} {...item} />
                ))}
            </List.Root>
        </Flex>
    );
}

export function RightContent () {
    const { toggleColorMode, colorMode } = useColorMode()
    return (

        <Flex alignItems="center" gap={2}>
            <ClientOnly fallback={<Skeleton boxSize="8" />}>
                <IconButton onClick={toggleColorMode} variant="ghost" size="sm" color={{base:"#072C51", _dark:"#C9EF26"}}
                            rounded="full"
                >
                    {colorMode === "light" ? <BsSun/> : <BsMoonStars/>}
                </IconButton>
            </ClientOnly>
            <Button
                as={Link}
                href="/login"
                variant="solid"
                bg={"#C9EF26"}
                color="#072C51"
                size={"sm"}
                borderRadius="2xl"
                textDecoration="none"
                display={{ base: "none", md: "flex" }}
                _hover={{bg:"#e7f6a4"}}
            >
                Iniciar Sesión
            </Button>
            <Button
                as={Link}
                href="/register"
                variant="outline"
                borderWidth="2px"
                borderColor={"#C9EF26"}
                color={{base:"#072C51", _dark:"#C9EF26"}}
                size={"sm"}
                borderRadius="2xl"
                textDecoration="none"
                display={{ base: "none", md: "flex" }}
            >
                Registrate
            </Button>
            {/*<Avatar.Root colorPalette="teal" size="sm">*/}
            {/*    <Avatar.Fallback name="Shane Nelson"/>*/}
            {/*</Avatar.Root>*/}
        </Flex>
    )
};

LeftContent.propTypes = {
    items: PropTypes.array.isRequired,
    onToggle: PropTypes.func.isRequired
};