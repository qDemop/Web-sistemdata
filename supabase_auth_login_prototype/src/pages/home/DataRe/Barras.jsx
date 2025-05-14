
import { Chart, useChart } from "@chakra-ui/charts"
import { Card, useBreakpointValue  } from "@chakra-ui/react"
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts"
import {Container} from "@/pages/home/DataRe/Graficas.jsx"

export const BarrTemp = () => {

    const showXAxis = useBreakpointValue({
        base: false,
        md: true,
    });


    const stackIds = useBreakpointValue({
        base: ["a", "a", "a"],
        md: ["a", "b", "b"],
        lg: ["a", "b", "c"]
    })

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
            { windows: 175, mac: 90, linux: 105, month: "Setember" },
            { windows: 180, mac: 86, linux: 124, month: "October" },
            { windows: 185, mac: 91, linux: 126, month: "November" },
            { windows: 150, mac: 23, linux: 98, month: "Diciembre" },
        ],
        series: [
            { name: "windows", color: "teal.solid", stackId: stackIds?.[0] ?? "a" },
            { name: "mac", color: "purple.solid", stackId: stackIds?.[1] ?? "a" },
            { name: "linux", color: "blue.solid", stackId: stackIds?.[2] ?? "a" },
        ],
    })

    return (
        <Card.Root maxW="8xl" w="full">
            <Card.Header px={{base:"12px", md:"24px"}}>
                <Card.Title>TEMPERATURA</Card.Title>
            </Card.Header>
            <Card.Body padding={{base:"12px", md:"24px"}}>
                <Container>
                <Chart.Root maxH="sm" chart={chart}>
                        <BarChart data={chart.data}>
                            <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
                            <XAxis
                                axisLine={false}
                                tickLine={false}
                                dataKey={chart.key("month")}
                                tickFormatter={(value) => {
                                    const width = window.innerWidth;
                                    if (width < 768) {
                                        return value.slice(0, 1);
                                    }
                                    return value.slice(0, 3);
                                }}
                            />
                            {showXAxis && (
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                stroke={chart.color("border")}
                                tickFormatter={chart.formatNumber()}
                            />)}
                            <Tooltip
                                cursor={false}
                                animationDuration={100}
                                content={<Chart.Tooltip />}
                            />
                            <Legend content={<Chart.Legend interaction="hover" />} />
                            {chart.series.map((item) => (
                                <Bar
                                    isAnimationActive={false}
                                    key={item.name}
                                    dataKey={chart.key(item.name)}
                                    fill={chart.color(item.color)}
                                    stackId={item.stackId}
                                />
                            ))}
                        </BarChart>
                </Chart.Root>
                </Container>
            </Card.Body>
        </Card.Root>
    )
}

