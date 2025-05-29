import { Chart, useChart } from "@chakra-ui/charts"
import { Area, AreaChart, ReferenceDot  } from "recharts"

export const SparkLineTemp = () => {
    const charttemp = useChart({
        data: [
            { value: 10 },
            { value: 16 },
            { value: 19 },
            { value: 15 },
            { value: 12 },
            { value: 15 },
            { value: 5 },
            { value: 16 },
            { value: 9 },
            { value: 10 },
            { value: 12 },
            { value: 10 },
        ],
        series: [{name:"value", color: "red" }],
    })

    const latest = charttemp.data[charttemp.data.length - 1]
    return (
        <Chart.Root height="10" chart={charttemp}>
            <AreaChart
                data={charttemp.data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
                {charttemp.series.map((item) => (
                    <defs key={item.name}>
                        <Chart.Gradient
                            id={`${item.name}-gradienttemp`}
                            stops={[
                                { offset: "0%", color: item.color, opacity: 1 },
                                { offset: "100%", color: item.color, opacity: 0.01 },
                            ]}
                        />
                    </defs>
                ))}

                {charttemp.series.map((item) => (
                    <Area
                        key={item.name}
                        type="natural"
                        isAnimationActive={false}
                        dataKey={charttemp.key(item.name)}
                        fill={`url(#${item.name}-gradienttemp)`}
                        fillOpacity={0.2}
                        stroke={charttemp.color(item.color)}
                        strokeWidth={2}

                    />
                ))}
                {charttemp.series.map((item) => (
                    <ReferenceDot
                        key={item}
                        x={charttemp.data.length - 1}
                        y={latest.value}
                        r={5}
                        fill={charttemp.color(item.color)}
                        stroke="bg"
                    />
                ))}
            </AreaChart>
        </Chart.Root>
    )
}
export const SparkLineIrra = () => {
    const chartirra = useChart({
        data: [
            { value: 10 },
            { value: 16 },
            { value: 19 },
            { value: 15 },
            { value: 12 },
            { value: 15 },
            { value: 5 },
            { value: 16 },
            { value: 9 },
            { value: 10 },
            { value: 12 },
            { value: 10 },
        ],
        series: [{name:"value", color: "orange" }],
    })

    const latest = chartirra.data[chartirra.data.length - 1]
    return (
        <Chart.Root height="10" chart={chartirra}>
            <AreaChart
                data={chartirra.data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
                {chartirra.series.map((item) => (
                    <defs key={item.name}>
                        <Chart.Gradient
                            id={`${item.name}-gradientirra`}
                            stops={[
                                { offset: "0%", color: item.color, opacity: 1 },
                                { offset: "100%", color: item.color, opacity: 0.01 },
                            ]}
                        />
                    </defs>
                ))}

                {chartirra.series.map((item) => (
                    <Area
                        key={item.name}
                        type="natural"
                        isAnimationActive={false}
                        dataKey={chartirra.key(item.name)}
                        fill={`url(#${item.name}-gradientirra)`}
                        fillOpacity={0.2}
                        stroke={chartirra.color(item.color)}
                        strokeWidth={2}

                    />
                ))}
                {chartirra.series.map((item) => (
                    <ReferenceDot
                        key={item}
                        x={chartirra.data.length - 1}
                        y={latest.value}
                        r={5}
                        fill={chartirra.color(item.color)}
                        stroke="bg"
                    />
                ))}
            </AreaChart>
        </Chart.Root>
    )
}
export const SparkLineTens = () => {
    const chart = useChart({
        data: [
            { value: 10 },
            { value: 16 },
            { value: 19 },
            { value: 15 },
            { value: 12 },
            { value: 15 },
            { value: 5 },
            { value: 16 },
            { value: 9 },
            { value: 10 },
            { value: 12 },
            { value: 10 },
        ],
        series: [{name:"value", color: "purple" }],
    })

    const latest = chart.data[chart.data.length - 1]
    return (
        <Chart.Root height="10" chart={chart}>
            <AreaChart
                data={chart.data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
                {chart.series.map((item) => (
                    <defs key={item.name}>
                        <Chart.Gradient
                            id={`${item.name}-gradienttens`}
                            stops={[
                                { offset: "0%", color: item.color, opacity: 1 },
                                { offset: "100%", color: item.color, opacity: 0.01 },
                            ]}
                        />
                    </defs>
                ))}

                {chart.series.map((item) => (
                    <Area
                        key={item.name}
                        type="natural"
                        isAnimationActive={false}
                        dataKey={chart.key(item.name)}
                        fill={`url(#${item.name}-gradienttens)`}
                        fillOpacity={0.2}
                        stroke={chart.color(item.color)}
                        strokeWidth={2}

                    />
                ))}
                {chart.series.map((item) => (
                    <ReferenceDot
                        key={item}
                        x={chart.data.length - 1}
                        y={latest.value}
                        r={5}
                        fill={chart.color(item.color)}
                        stroke="bg"
                    />
                ))}
            </AreaChart>
        </Chart.Root>
    )
}
