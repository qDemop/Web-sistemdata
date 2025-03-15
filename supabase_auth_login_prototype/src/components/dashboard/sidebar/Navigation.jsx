import { ListItem, Text,
    Link as ChakraLink,
    Box, Icon, ListRoot
} from "@chakra-ui/react";
import {dashboardLinks} from "@/constants/links.jsx";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import * as path from "node:path";




export const NavItem = ({ item,  collapse }) => {
    const { label, icon, path } = item;

    if (item.type === "link") {
        return (
            <Box display="flex" alignItems="center" my={0} justifyContent="center">
                <ChakraLink
                    as={NavLink}
                    to={path}
                    gap={5}
                    mb="42px"
                    display="flex"
                    alignItems="center"
                    fontWeight="medium"
                    style={({ isActive }) => ({
                        color: isActive ? "#2F80ED" : "#B2C2DD", // Color activo/inactivo
                    })}
                    _hover={{
                        textDecoration: "none",
                        color: "black",
                    }}
                    w="full"
                    justifyContent={!collapse ? "center" : ""}
                >
                    <Icon as={icon} fontSize={24} m="0" />
                    {collapse && <Text>{label}</Text>}
                </ChakraLink >

            </Box>
        );
    }}

NavItem.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
        path: PropTypes.string.isRequired,
    }).isRequired,
    collapse: PropTypes.bool.isRequired,
};

export const Navigation = ({ collapse }) => (
    <ListRoot w="full" my={8} variant="none">
        {dashboardLinks.map((item, index) => (
            <ListItem key={index} >
                <NavItem item={item} collapse={collapse} />
            </ListItem>
        ))}
    </ListRoot>
);

Navigation.propTypes = {
    collapse: PropTypes.bool.isRequired,
};