import {HStack, VStack, Box, Flex} from "@chakra-ui/react";
import {LeftContent, RightContent} from "@/components/Home/header/Content.jsx";
import {NavBarMob} from "@/components/Home/header/nav-mob/index.jsx";
import {homeLinks} from "@/constants/links.jsx";
import {Fragment, useState} from "react";



export function NavbarHo() {
    // const { isOpen, onToggle } = useDisclosure();
    const [isOpen, setOpen] = useState(false);

    const onToggle = () => setOpen(!isOpen);
    return (
        <Fragment>
            <Box w="full" h={{base:"52px", md:"56px"}} />
        <VStack w="full" gap={0}
                position="fixed"
                zIndex={100}
                top={0}
        >
            <HStack
                w="full"
                alignItems="center"
                justifyContent="center"

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
        </Fragment>

    );
}