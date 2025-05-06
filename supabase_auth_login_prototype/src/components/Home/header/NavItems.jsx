import {Button, Icon, Link, List, Popover, Portal} from "@chakra-ui/react";
import {NavLink, useMatch} from "react-router-dom";
import PropTypes from "prop-types";
import {FaChevronDown} from "react-icons/fa";
import {useState} from "react";


export function NavItems ({label, uri, subitems}) {
    const isActive = useMatch(uri);
    const [isOpen, setOpen] = useState(false)
    if (subitems){
        return (
            <List.Item>
                <Popover.Root
                    placement="top-start"
                    open={isOpen} onOpenChange={(e) => setOpen(e.open)}
                >
                    <Popover.Trigger asChild>
                        <Button
                            colorPalette="teal"
                            variant="ghost"
                            _hover={{textDecoration: 'none', bg:'colorPalette.50'}}
                            _active={{color:"colorPalette.500", transform: "scale(0.95)"}}
                        >
                            {label} <Icon as={FaChevronDown} boxSize={4} mt="3px" style={{
                            transition:"transform .2s ease 0s",
                            transform: isOpen ? "rotate(-180deg)" : "",
                        }}/>
                        </Button>
                    </Popover.Trigger>
                        <Portal>
                            <Popover.Positioner>
                                <Popover.Content width="full">
                                    <Popover.Arrow />
                                    <Popover.Body>
                                        <List.Root display="flex" flexDirection="column" gap={4} variant="plain">
                                            {subitems.map(subitem => (
                                                <List.Item key={subitem.label}>
                                                    <Link
                                                        textDecoration='none'
                                                        outline="none"
                                                        as={NavLink}
                                                        to={subitem.uri}
                                                        px={2}
                                                    >
                                                        {subitem.label}
                                                    </Link>
                                                </List.Item>
                                            ))}
                                        </List.Root>
                                    </Popover.Body>
                                </Popover.Content>
                            </Popover.Positioner>
                        </Portal>
                </Popover.Root>
            </List.Item>
        )
    }
    return (
        <List.Item>
            <Button
                as={NavLink}
                to={uri}
                color={{ base: '#072C51', _dark: '#C9EF26' }}
                variant="ghost"
                position="relative"
                _active={{ color: '#00B5BB', transform: 'scale(0.95)' }}
                _hover={{
                    textDecoration: 'none',
                    bg: 'none',
                    _after: {
                        width: '100%',
                    },
                }}

                _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: isActive ? '100%' : '0%',
                    opacity: isActive ? 1 : 0.5,
                    height: '4px',
                    background: 'linear-gradient(to right, #C9EF26, #00B5BB)',
                    transition: 'width 0.3s ease-in-out',
                }}
            >
                {label}
            </Button>
        </List.Item>
    )
}

NavItems.propTypes = {
    label: PropTypes.string,
    uri: PropTypes.string,
    subitems: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        uri: PropTypes.string,
    }))
}



































// import {
//     Button,
//     Link,
//     List,
//     ListItem,
//     Popover,
//     PopoverArrow,
//     PopoverBody,
//     PopoverContent,
//     PopoverTrigger,
//     useDisclosure,
// } from "@chakra-ui/react";
// import { FaChevronDown } from "react-icons/fa";
// import PropTypes from "prop-types";
//
//
// export function NavItems({ label, uri, subitems }) {
//     const { isOpen, onToggle } = useDisclosure();
//     if (subitems) {
//         return (
//             <ListItem>
//                 <Popover placement="top-start" isOpen={isOpen}>
//                     <PopoverTrigger>
//                         <Button
//                             rightIcon={
//                                 <FaChevronDown
//                                     style={{
//                                         transition: "transform .2s ease 0s",
//                                         transform: isOpen ? "rotate(-180deg)" : "",
//                                     }}
//                                 />
//                             }
//                             colorScheme="teal"
//                             variant="ghost"
//                             onClick={onToggle}
//                         >
//                             {label}
//                         </Button>
//                     </PopoverTrigger>
//                     <PopoverContent width="full">
//                         <PopoverArrow />
//                         <PopoverBody>
//                             <List display="flex" flexDir="column" gap={4}>
//                                 {subitems.map((subitem) => (
//                                     <ListItem key={subitem.label}>
//                                         <Link href={subitem.uri} px={2} py={1}>
//                                             {subitem.label}
//                                         </Link>
//                                     </ListItem>
//                                 ))}
//                             </List>
//                         </PopoverBody>
//                     </PopoverContent>
//                 </Popover>
//             </ListItem>
//         );
//     }
//     return (
//         <ListItem>
//             <Button
//                 as={Link}
//                 href={uri}
//                 colorScheme="teal"
//                 variant="ghost"
//                 _hover={{ textDecoration: "none", bg: "teal.50" }}
//                 _active={{ bg: "teal.100" }}
//             >
//                 {label}
//             </Button>
//         </ListItem>
//     );
// }
//
// NavItems.propTypes = {
//     label: PropTypes.string,
//     uri: PropTypes.string,
//     subitems: PropTypes.arrayOf(PropTypes.shape({
//         label: PropTypes.string,
//         uri: PropTypes.string,
//     })),
// };