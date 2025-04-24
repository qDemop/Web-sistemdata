
import { Chart, useChart } from "@chakra-ui/charts";
import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import {Box, Heading, HStack} from "@chakra-ui/react";
import {LuArrowUp} from "react-icons/lu";
import {Legend} from "chart.js";

function Tabla() {
    const chart = useChart({
        data: [
            { temp: -20, month: "Enero" },
            { temp: -10, month: "Febrero" },
            { temp: 0, month: "Marzo" },
            { temp: 10, month: "Abril" },
            { temp: 20, month: "Mayo" },
            { temp: 4, month: "Junio" },
            { temp: 40, month: "Julio" },
            { temp: -10, month: "Agosto" },
            { temp: 25, month: "Septiembre" },
            { temp: 15, month: "Octubre" },
            { temp: -5, month: "Noviembre" },
            { temp: -15, month: "Diciembre" },
        ],
        series: [
            { name: "temp", label: "Mac sales", color: "teal.solid" },
            { name: "mac", label: "Mac sales", color: "purple.solid" },
            { name: "linux", label: "Linux sales", color: "blue.solid" },
        ],

    });

    return (
        <Box w={"full"} >
            <Heading mb={4}>Gráfico de Temperaturas vs Meses</Heading>
            <Chart.Root maxH="sm" chart={chart}>
                    <LineChart
                        data={chart.data}
                        w="full"
                    >
                        <CartesianGrid stroke={chart.color("border")} vertical={false} />
                        <XAxis
                            axisLine={false}
                            dataKey={chart.key("month")}
                            tickFormatter={(value) => value.slice(0, 3)}
                            stroke={chart.color("border")}
                            interval={0}
                            label={{ value: "Meses", position: "bottom" }}

                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tickMargin={10}
                            dataKey={chart.key("temp")}
                            stroke={chart.color("border")}
                            tickFormatter={(value) => `${value} °C`}
                            label={{ mb: 4 , value: "Temperaturas (°C)", position: "left", angle: -90 }}
                        />
                        <Tooltip
                            animationDuration={100}
                            cursor={{ stroke: chart.color("border") }}
                            content={({ payload }) => {
                                if (payload?.length) {
                                    const data = payload[0].payload;
                                    return (
                                        <div
                                            style={{
                                                background: "#2D3748",
                                                color: "white",
                                                padding: "6px",
                                                borderRadius: "6px",
                                                border: "1px solid #ccc",
                                            }}
                                        >
                                            <strong>{data.month}</strong>
                                            <br />
                                            Temperatura: {data.temp} °C
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <defs>
                            <Chart.Gradient
                                id="lc-gradient"
                                stops={[
                                    { offset: "30%", color: "#C9EF26" },
                                    { offset: "100%", color: "#00B5BB" },
                                ]}
                            />
                        </defs>
                        {chart.series.map((item) => (
                            <Line
                                key={item.name}
                                isAnimationActive={false}
                                type="natural"
                                dataKey={chart.key(item.name)}
                                fill="none"
                                stroke="url(#lc-gradient)"
                                r={2}
                                dot={{
                                    stroke: chart.color("bg"),
                                    fill: chart.color("fg"),
                                    strokeWidth: 1,
                                }}
                                activeDot={{
                                    stroke: chart.color("bg"),
                                    fill: chart.color("fg"),
                                    strokeWidth: 1,
                                    r: 4,
                                }}
                                strokeWidth={4}
                            />
                        ))}
                        <Legend content={<Chart.Legend />} />
                    </LineChart>

            </Chart.Root>
            <HStack
                textStyle="xs"
                bottom="1"
                color="teal.fg"
                animation="slide-to-top 1s infinite"
                mt={6}
                justifyContent="center"
                display={{base:"none", md:"flex"}}
            >
                Pasar el cursor <LuArrowUp />
            </HStack>

        </Box>
    );
}

export default Tabla;


//
// import { Chart, useChart } from "@chakra-ui/charts";
// import {
//     CartesianGrid,
//     Line,
//     LineChart,
//     Tooltip,
//     XAxis,
//     YAxis,
//     ResponsiveContainer,
// } from "recharts";
// import {Box, Heading, HStack} from "@chakra-ui/react";
// import {LuArrowUp} from "react-icons/lu";
//
// function Tabla() {
//     const chart = useChart({
//         data: [
//             { temp: -20, month: "Enero" },
//             { temp: -10, month: "Febrero" },
//             { temp: 0, month: "Marzo" },
//             { temp: 10, month: "Abril" },
//             { temp: 20, month: "Mayo" },
//             { temp: 4, month: "Junio" },
//             { temp: 40, month: "Julio" },
//             { temp: -10, month: "Agosto" },
//             { temp: 25, month: "Septiembre" },
//             { temp: 15, month: "Octubre" },
//             { temp: -5, month: "Noviembre" },
//             { temp: -15, month: "Diciembre" },
//         ],
//         series: [{ name: "temp", color: "teal.solid" }],
//     });
//
//     return (
//         <Box w={"full"} >
//             <Heading mb={4}>Gráfico de Temperaturas vs Meses</Heading>
//             <Chart.Root maxH="sm" chart={chart}>
//                 <LineChart
//                     data={chart.data}
//                     w="full"
//                 >
//                     <CartesianGrid stroke={chart.color("border")} vertical={false} />
//                     <XAxis
//                         axisLine={false}
//                         dataKey={chart.key("month")}
//                         tickFormatter={(value) => value.slice(0, 3)}
//                         stroke={chart.color("border")}
//                         interval={0}
//                         label={{ value: "Meses", position: "bottom" }}
//
//                     />
//                     <YAxis
//                         axisLine={false}
//                         tickLine={false}
//                         tickMargin={10}
//                         dataKey={chart.key("temp")}
//                         stroke={chart.color("border")}
//                         tickFormatter={(value) => `${value} °C`}
//                         label={{ mb: 4 , value: "Temperaturas (°C)", position: "left", angle: -90 }}
//                     />
//                     <Tooltip
//                         animationDuration={100}
//                         cursor={{ stroke: chart.color("border") }}
//                         content={({ payload }) => {
//                             if (payload?.length) {
//                                 const data = payload[0].payload;
//                                 return (
//                                     <div
//                                         style={{
//                                             background: "#2D3748",
//                                             color: "white",
//                                             padding: "6px",
//                                             borderRadius: "6px",
//                                             border: "1px solid #ccc",
//                                         }}
//                                     >
//                                         <strong>{data.month}</strong>
//                                         <br />
//                                         Temperatura: {data.temp} °C
//                                     </div>
//                                 );
//                             }
//                             return null;
//                         }}
//                     />
//                     <defs>
//                         <Chart.Gradient
//                             id="lc-gradient"
//                             stops={[
//                                 { offset: "30%", color: "#C9EF26" },
//                                 { offset: "100%", color: "#00B5BB" },
//                             ]}
//                         />
//                     </defs>
//                     {chart.series.map((item) => (
//                         <Line
//                             key={item.name}
//                             isAnimationActive={false}
//                             type="natural"
//                             dataKey={chart.key(item.name)}
//                             fill="none"
//                             stroke="url(#lc-gradient)"
//                             r={2}
//                             dot={{
//                                 stroke: chart.color("bg"),
//                                 fill: chart.color("fg"),
//                                 strokeWidth: 1,
//                             }}
//                             activeDot={{
//                                 stroke: chart.color("bg"),
//                                 fill: chart.color("fg"),
//                                 strokeWidth: 1,
//                                 r: 4,
//                             }}
//                             strokeWidth={4}
//                         />
//                     ))}
//                 </LineChart>
//             </Chart.Root>
//             <HStack
//                 textStyle="xs"
//                 bottom="1"
//                 color="teal.fg"
//                 animation="slide-to-top 1s infinite"
//                 mt={6}
//                 justifyContent="center"
//                 display={{base:"none", md:"flex"}}
//             >
//                 Pasar el cursor <LuArrowUp />
//             </HStack>
//
//         </Box>
//     );
// }
//
// export default Tabla;
