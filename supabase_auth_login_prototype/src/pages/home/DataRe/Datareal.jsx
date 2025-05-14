import {Box, Container, Flex, Tabs  } from "@chakra-ui/react";
import {GrafTemp} from "@/pages/home/DataRe/Graficas.jsx";
import {FaChartLine, FaTable} from "react-icons/fa";
import {FaChartColumn} from "react-icons/fa6";
import { Tooltip } from "@/components/ui/tooltip"
import {BarrTemp} from "@/pages/home/DataRe/Barras.jsx";

export function Datareal () {

    return (
        <Box wight="100%" bg={{base: "#F4F4F6", _dark:"#2F2F30"}}>
            <Container  maxW={1440}>
                <Flex w="full" py="80px" px={{ base: '20px', md: "12px", lg:"22px" }}>
                    <Tabs.Root defaultValue="tab-1" w="full" variant="subtle">
                        <Tabs.List >
                            <Tooltip
                                positioning={{ placement: "top" }}
                                ids={{ trigger: "tab-1" }}
                                content="Grafica Linear"
                                openDelay={80}
                                closeDelay={100}
                                contentProps={{ css: { "--tooltip-bg": "#00B5BB" } }}
                            >
                                <span>
                            <Tabs.Trigger
                                _selected={{
                                    bgGradient:"to-r",
                                    gradientFrom:"#C9EF26",
                                    gradientTo:"#00B5BB",
                                    color:{base: "white", _dark:"black"}

                            }}
                                value="tab-1"
                                color={{base: "#00B5BB", _dark:"#a1a1aa"}}
                            ><FaChartLine size={16}/>
                            </Tabs.Trigger>
                                    </span>
                            </Tooltip>

                            <Tooltip
                                positioning={{ placement: "top" }}
                                ids={{ trigger: "tab-2" }}
                                content="Grafica de Barras"
                                openDelay={80}
                                closeDelay={100}
                                contentProps={{ css: { "--tooltip-bg": "#00B5BB" } }}
                            >
                                <span>
                            <Tabs.Trigger
                                value="tab-2"
                                _selected={{
                                    bgGradient:"to-r",
                                    gradientFrom:"#C9EF26",
                                    gradientTo:"#00B5BB",
                                    color:{base: "white", _dark:"black"}
                            }}
                                color={{base: "#00B5BB", _dark:"#a1a1aa"}}
                            ><FaChartColumn size={16}/>
                            </Tabs.Trigger>
                                </span>
                            </Tooltip>
                            <Tooltip
                                positioning={{ placement: "top" }}
                                ids={{ trigger: "tab-3" }}
                                content="Tablas"
                                openDelay={80}
                                closeDelay={100}
                                contentProps={{ css: { "--tooltip-bg": "#00B5BB" } }}
                            >
                                <span>
                            <Tabs.Trigger
                                value="tab-3"
                                _selected={{
                                    bgGradient:"to-r",
                                    gradientFrom:"#C9EF26",
                                    gradientTo:"#00B5BB",
                                    color:{base: "white", _dark:"black"}
                            }}
                                color={{base: "#00B5BB", _dark:"#a1a1aa"}}
                            ><FaTable size={16}/>
                            </Tabs.Trigger>
                                </span>
                            </Tooltip>
                        </Tabs.List>
                        <Tabs.Content value="tab-1" >
                            <GrafTemp/>
                        </Tabs.Content>
                        <Tabs.Content value="tab-2">
                            <BarrTemp/>
                        </Tabs.Content>
                        <Tabs.Content value="tab-3">
                            TABLAS
                        </Tabs.Content>
                    </Tabs.Root>

                </Flex>
            </Container>
        </Box>

    );
}