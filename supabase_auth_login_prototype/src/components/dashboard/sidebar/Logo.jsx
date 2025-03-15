import { Box, Flex, Icon,  Text } from "@chakra-ui/react";
import { AiFillThunderbolt } from "react-icons/ai";
import PropTypes from "prop-types";

export const Logo = ({ collapse }) => (
    <Flex
        w="full"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={collapse ? "row" : "column"}
        gap={4}
    >
        <Box display="flex" alignItems="center" gap={2}>
            <Icon as={AiFillThunderbolt} fontSize={30} />
            {collapse && (
                <Text fontWeight="bold" fontSize={16}>
                    SYSTEMWEBDATA
                </Text>
            )}
        </Box>
    </Flex>
);
Logo.propTypes = {
    collapse: PropTypes.bool.isRequired,
};