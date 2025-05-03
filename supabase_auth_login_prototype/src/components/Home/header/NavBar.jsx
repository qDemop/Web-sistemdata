import {HStack, VStack, useDisclosure, Flex} from "@chakra-ui/react";
import {LeftContent, RightContent} from "@/components/Home/header/Content.jsx";
import {NavBarMob} from "@/components/Home/header/nav-mob/index.jsx";
import {homeLinks} from "@/constants/links.jsx";
import {useState} from "react";



export function NavbarHo() {
    // const { isOpen, onToggle } = useDisclosure();
    const [isOpen, setOpen] = useState(false);

    const onToggle = () => setOpen(!isOpen);
    return (
        <VStack w="full" gap={0} >
            <HStack
                w="full"
                alignItems="center"
                justifyContent="center"
                borderBottomWidth={1}
                position="relative"
                bg={{base:"white", _dark:"#202021"}}
                shadow="md"
            >
                <Flex w="full" maxW="1920px"
                      alignItems="center"
                      justifyContent="space-between"
                      p={2}
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