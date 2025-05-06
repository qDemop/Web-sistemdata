import {HStack, VStack, Box, Flex} from "@chakra-ui/react";
import {LeftContent, RightContent} from "@/components/Home/header/Content.jsx";
import {NavBarMob} from "@/components/Home/header/nav-mob/index.jsx";
import {homeLinks} from "@/constants/links.jsx";
import {useState} from "react";



export function NavbarHo() {
    // const { isOpen, onToggle } = useDisclosure();
    const [isOpen, setOpen] = useState(false);

    const onToggle = () => setOpen(!isOpen);
    return (
        <VStack w="full" gap={0}>
            <Box w="full" h={{base:"52px", md:"56px"}} />
            <HStack
                w="full"
                alignItems="center"
                justifyContent="center"
                position="fixed"
                zIndex={100}
                bg={{base:"white", _dark:"#202021"}}
                shadow={isOpen ? "none" : "lg"}
                p={2}

            >
                <Flex w="full" maxW="1920px"
                      alignItems="center"
                      justifyContent="space-between"
                >
                {/* left content */}
                <LeftContent items={homeLinks} onToggle={onToggle}/>

                {/* right content */}
                <RightContent />
                </Flex>
            </HStack>
        {/* mobile content */}
            <NavBarMob items={homeLinks} isOpen={isOpen} onToggle={onToggle}/>
        </VStack>
    );
}