import {Button, Collapsible, List} from "@chakra-ui/react";
import {NavItemsMob} from "@/components/Home/header/nav-mob/NavItemsMob.jsx";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

export function NavBarMob({ items, isOpen, onToggle  }) {

    const abrirCerrar = () => {
        onToggle(false); // O simplemente llamamos a onToggle para que cierre el menú
    };

    return (
        <Collapsible.Root  style={{width: "100%"}} open={isOpen} >
            <Collapsible.Content>
                <List.Root
                    gap={2}
                    spacing={2}
                    width="100%"
                    borderWidth={1}
                    padding={2}
                    bg={{base:"white", _dark:"#202021"}}
                    variant="plain"
                    display={{base: "flex", md: "none"}}
                >
                    {items.map((item) => (
                        <NavItemsMob key={item.label} {...item} onClick={abrirCerrar}/>
                    ))}
                    <Button
                        as={NavLink}
                        to="/login"
                        variant="solid"
                        bg={"#C9EF26"}
                        color="#072C51"
                        size={"sm"}
                        borderRadius="2xl"
                        onClick={abrirCerrar}
                    >
                        Iniciar Sesión
                    </Button>
                    <Button
                        as={NavLink}
                        to="/register"
                        variant="outline"
                        borderWidth="2px"
                        borderColor={"#C9EF26"}
                        color={{base:"#072C51", _dark:"#C9EF26"}}
                        size={"sm"}
                        borderRadius="2xl"
                        onClick={abrirCerrar}
                    >
                        Registrarse
                    </Button>
                </List.Root>

            </Collapsible.Content>
        </Collapsible.Root>
    );
}

NavBarMob.propTypes = {
    items: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};



// <Collapsible.Root open={isOpen} animateOpacity style={{ width: "100%" }}>
//     <Collapsible.Content>
//         <List
//             gap={2}
//             spacing={2}
//             width="100%"
//             borderWidth={1}
//             padding={2}
//             bg="gray.100"
//         >
//             {items.map((item) => (
//                 <NavItemsMob key={item.label} {...item} />
//             ))}
//         </List>
//     </Collapsible.Content>
// </Collapsible.Root>