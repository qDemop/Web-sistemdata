import {Avatar, Flex, IconButton, Text} from "@chakra-ui/react";
import PropTypes from "prop-types";
import {NavLink as RouterLink} from "react-router-dom"

export const AvatarBox = ({ collapse }) => (
    <Flex
        as={RouterLink}
        to="profile"
        borderWidth={collapse ? 1 : 0}
        borderColor="gray.100"
        borderRadius="full"
        w="full"
        p={2}
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        flexDirection={collapse ? "row" : "column-reverse"}
    >

            <Avatar.Root bg="teal.300"> <Avatar.Fallback  name="Design To Chakra UI"  /> </Avatar.Root>
            {collapse && (
                <Flex
                    w="full"
                    flexDirection="column"
                    gap={4}
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Text fontSize={{base: "xs", md: "sm",  lg: "sm"}} fontWeight="bold" pb="0" lineHeight={0}  >
                        Jose Pedro Castillo
                    </Text>
                    <Text as="small" color="gray.500" fontSize={{base: "8.5px", md: "12px", lg: "12px"}} lineHeight={0}   >
                        webdata@gmail.com
                    </Text>
                </Flex>
            )}
    </Flex>
);

AvatarBox.propTypes = {
    collapse: PropTypes.bool.isRequired,
};
