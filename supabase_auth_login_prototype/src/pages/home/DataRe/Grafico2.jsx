
import { Chart, useChart } from "@chakra-ui/charts";
import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";

function Tabla() {
    const chart = useChart({
        data: [
            { temp: 20, month: "Enero" },
            { temp: 10, month: "Febrero" },
            { temp: 0, month: "Marzo" },
            { temp: 10, month: "Abril" },
            { temp: 20, month: "Mayo" },
            { temp: 4, month: "Junio" },
            { temp: 40, month: "Julio" },
            { temp: 10, month: "Agosto" },
            { temp: 25, month: "Septiembre" },
            { temp: 15, month: "Octubre" },
            { temp: 5, month: "Noviembre" },
            { temp: 15, month: "Diciembre" },
        ],
        series: [{ name: "temp", color: "teal.solid" }],
    });

    return (
        <div>
            <h1>Gráfico de Tensión y corriente vs Meses</h1>

            <Chart.Root maxH="sm" chart={chart}>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        data={chart.data}
                        margin={{ top: 20, right: 30, left: 60, bottom: 50 }}
                    >
                        <CartesianGrid stroke={chart.color("border")} vertical={false} />
                        <XAxis
                            axisLine={false}
                            dataKey={chart.key("month")}
                            tickFormatter={(value) => value.slice(0, 3)}
                            stroke={chart.color("border")}
                            interval={0}
                            label={{
                                value: "Meses",
                                position: "bottom",
                                offset: 10,
                                style: {
                                    textAnchor: "middle",
                                    fill: chart.color("fg"),
                                },
                            }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tickMargin={10}
                            dataKey={chart.key("temp")}
                            stroke={chart.color("border")}
                            tickFormatter={(value) => `${value} °C`}
                            label={{
                                value: "Tensión y corriente",
                                angle: -90,
                                position: "insideLeft",
                                style: {
                                    textAnchor: "middle",
                                    fill: chart.color("fg"),
                                },
                            }}
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
                                                background: "#2D3748", // gris oscuro chakra
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
                                    { offset: "0%", color: "teal.solid" },
                                    { offset: "20%", color: "purple.solid" },
                                    { offset: "40%", color: "orange.solid" },
                                    { offset: "75%", color: "green.solid" },
                                    { offset: "100%", color: "red.solid" },
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
                    </LineChart>
                </ResponsiveContainer>
            </Chart.Root>
        </div>
    );
}

export default Tabla;
