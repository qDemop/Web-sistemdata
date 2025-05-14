
import { Chart, useChart } from "@chakra-ui/charts"
import {Card, Badge, HStack, useBreakpointValue, VStack} from "@chakra-ui/react"
import { LuArrowUp } from "react-icons/lu"
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"

export const GrafTemp = () => {

    const showXAxis = useBreakpointValue({
        base: false,
        md: true,
    });

    const chart = useChart({
        data: [
            { windows: 186, mac: 80, linux: 120, month: "January" },
            { windows: 165, mac: 95, linux: 110, month: "February" },
            { windows: 190, mac: 87, linux: 125, month: "March" },
            { windows: 190, mac: 87, linux: 125, month: "April" },
            { windows: 195, mac: 88, linux: 130, month: "May" },
            { windows: 182, mac: 98, linux: 122, month: "June" },
            { windows: 182, mac: 98, linux: 122, month: "July" },
            { windows: 175, mac: 90, linux: 115, month: "August" },
            { windows: 175, mac: 90, linux: 115, month: "Setember" },
            { windows: 180, mac: 86, linux: 124, month: "October" },
            { windows: 185, mac: 91, linux: 126, month: "November" },
            { windows: 150, mac: 23, linux: 98, month: "Diciembre" },
        ],
        series: [
            { name: "windows", color: "#aed501" },
            { name: "mac", color: "#186bbf" },
            { name: "linux", color: "#00b5bb" },
        ],
    })

    return (
        <Card.Root maxW="8xl" w="full" >
            <Card.Header px={{base:"12px", md:"24px"}}>
                <HStack justifyContent="space-between" alignItems="center" w="full" >
                    <Card.Title>TEMPERATURA</Card.Title>
                    <Badge variant="subtle" colorPalette="purple" gap="0" size={{base:"xs", md:"sm"}}>
                        {/*borderColor="#00b5bb" color="#C9EF26" bg="#C9EF26/10"*/}
                        Unidad: Celsius
                    </Badge>
                </HStack>
            </Card.Header>
            <Card.Body padding={{base:"12px", md:"24px"}}>
        <Container>
            <Chart.Root maxH="sm" chart={chart}>
                <LineChart data={chart.data}>
                    <CartesianGrid stroke={chart.color("border")} vertical={false} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" opacity={0.5} />
                    <XAxis
                        axisLine={false}
                        dataKey={chart.key("month")}
                        tickFormatter={(value) => {
                            const width = window.innerWidth;
                            if (width < 448) {
                                return value.slice(0, 1);
                            }
                            if (width < 768) {
                                return value.slice(0, 3);
                            }
                            return value.slice(0, 9);
                        }}

                        stroke={chart.color("border")}
                    />
                    {showXAxis && (
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                        stroke={chart.color("border")}
                        tickFormatter={chart.formatNumber()}
                    />)}
                    <Tooltip
                        animationDuration={100}
                        cursor={false}
                        content={<Chart.Tooltip />}
                    />
                    <Legend content={<Chart.Legend interaction="hover" />} />
                    {chart.series.map((item) => (
                        <Line
                            key={item.name}
                            isAnimationActive={false}
                            dataKey={chart.key(item.name)}
                            stroke={chart.color(item.color)}
                            strokeWidth={2}
                            fill={chart.color("bg")}
                            opacity={chart.getSeriesOpacity(item.name)}
                        />
                    ))}
                </LineChart>
            </Chart.Root>
        </Container>
            </Card.Body>
        </Card.Root>

    )
}

export const Container = (props) => {
    const { children } = props
    return (
        <VStack pos="relative" gap="4" w="full">
            {children}
            <HStack
                textStyle="xs"
                bottom="1"
                color="teal.fg"
                animation="fade-out 2s infinite"
                display={{ base: "none", md: "flex" }}
            >
                Pasar el cursor en "mac" <LuArrowUp />
            </HStack>
        </VStack>
    )
}
