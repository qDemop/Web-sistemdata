import React from "react";
import { Box } from "@chakra-ui/react";

import {Navigation} from "@/components/dashboard/sidebar/Navigation.jsx";
import PropTypes from "prop-types";
import {Logo} from "@/components/dashboard/sidebar/Logo.jsx";
import {AvatarBox} from "@/components/dashboard/sidebar/AvatarBox.jsx";

const Sidebar = ({ collapse }) => (
    <React.Fragment>
        <Box w="full" h="full">
            <Logo collapse={collapse} />
            <Navigation collapse={collapse} />
            <AvatarBox collapse={collapse} />
        </Box>

    </React.Fragment>
);
Sidebar.propTypes = {
    collapse: PropTypes.bool.isRequired,
};
export default Sidebar;