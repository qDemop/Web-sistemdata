import {HStack, useDisclosure, VStack} from "@chakra-ui/react";


export function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <VStack w="full" spacing={0}>
            <Navbar />
        </VStack>
    );
}