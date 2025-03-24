import {Avatar, Flex, Heading, IconButton, Input, InputGroup, List} from "@chakra-ui/react";
import { FaBurger } from "react-icons/fa6";
import {FaBell, FaSearch} from "react-icons/fa";
import PropTypes from "prop-types";
import {NavItems} from "@/components/Home/header/NavItems.jsx";


export function LeftContent ({ items, onToggle }) {
    return (
        <Flex alignItems="center" justifyContent="space-between" gap={4}>
            <IconButton
                aria-label="menu"
                colorScheme="teal"
                variant="ghost"
                icon={<FaBurger />}
                rounded="full"
                display={{ base: "flex", md: "none" }}
                onClick={onToggle}
            />

            <Heading color="teal" fontWeight="black">
                D2C
            </Heading>

            <List gap={2} display={{ base: "none", md: "flex" }}>
                {items.map((item) => (
                    <NavItems key={item.label} {...item} />
                ))}
            </List>
        </Flex>
    );
}

export function RightContent () {
    return (

        <Flex alignItems="center" gap={2}>
            <IconButton
                aria-label="search"
                icon={<FaSearch />}
                variant="ghost"
                colorScheme="teal"
                display={{ base: "flex", md: "none" }}
                rounded="full"
                size="sm"
            />
            <InputGroup startElement={<FaSearch color="teal" />} size="sm" display={{ base: "none", md: "flex" }}>
                <Input variant="filled" placeholder="Search..." />
            </InputGroup>

            <IconButton
                aria-label="search"
                icon={<FaBell />}
                variant="ghost"
                colorScheme="teal"
                rounded="full"
                size="sm"
            />

            <Avatar size="sm" name="D C" bg="teal" />
        </Flex>
    )
};

LeftContent.propTypes = {
    items: PropTypes.array.isRequired,
    onToggle: PropTypes.func.isRequired,
};