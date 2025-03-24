import { HStack, VStack, useDisclosure } from "@chakra-ui/react";
import {LeftContent, RightContent} from "@/components/Home/header/Content.jsx";



export function NavbarHo() {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <VStack w="full" spacing={0}>
            <HStack
                w="full"
                alignItems="center"
                p={2}
                justifyContent="space-between"
                borderBottomWidth={1}
            >
                {/* left content */}
                <LeftContent items={menuItems} onToggle={onToggle} />
                {/* right content */}

                <RightContent />
            </HStack>
            {/* mobile content */}
            <MobileNav items={menuItems} isOpen={isOpen} />
        </VStack>
    );
}