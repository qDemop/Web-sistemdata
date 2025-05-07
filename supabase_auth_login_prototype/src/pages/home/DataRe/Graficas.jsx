
import { Chart, useChart } from "@chakra-ui/charts"
import { Card, HStack, VStack } from "@chakra-ui/react"
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
import React from "react";

export const Demo = () => {
    const chart = useChart({
        data: [
            { windows: 186, mac: 10, linux: 120, month: "January" },
            { windows: 165, mac: 95, linux: 110, month: "February" },
            { windows: 175, mac: 87, linux: 125, month: "March" },
            { windows: 180, mac: 88, linux: 30, month: "May" },
            { windows: 185, mac: 98, linux: 122, month: "June" },
            { windows: 190, mac: 90, linux: 15, month: "August" },
            { windows: 175, mac: 87, linux: 125, month: "Setiembre" },
            { windows: 180, mac: 88, linux: 30, month: "Octubre" },
            { windows: 185, mac: 98, linux: 122, month: "Noviembre" },
            { windows: 190, mac: 90, linux: 15, month: "Diciembre" },
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
                <Card.Title>TEMPERATURA</Card.Title>
            </Card.Header>
            <Card.Body padding={{base:"12px", md:"24px"}}>
        <Container>
            <Chart.Root maxH="sm" chart={chart}>
                <LineChart data={chart.data}>
                    <CartesianGrid stroke={chart.color("border")} vertical={false} />
                    <XAxis
                        axisLine={false}
                        dataKey={chart.key("month")}
                        tickFormatter={(value) => {
                            const width = window.innerWidth;
                            if (width < 768) {
                                return value.slice(0, 1); // solo 1 letra en móvil
                            }
                            return value.slice(0, 3); // 3 letras en desktop
                        }}

                        stroke={chart.color("border")}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                        stroke={chart.color("border")}
                    />
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

 const Container = (props) => {
    const { children } = props
    return (
        <VStack pos="relative" gap="4" w="full">
            {children}
            <HStack
                textStyle="xs"
                bottom="1"
                color="teal.fg"
                animation="fade-out 2s infinite"

            >
                Pasar el cursor en "mac" <LuArrowUp />
            </HStack>
        </VStack>
    )
}
