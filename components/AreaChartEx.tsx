"use client";

import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "./ui/chart";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
    { month: "January", man: 186, woman: 75 },
    { month: "February", man: 405, woman: 210 },
    { month: "March", man: 263, woman: 100 },
    { month: "April", man: 43, woman: 150 },
    { month: "May", man: 199, woman: 110 },
    { month: "June", man: 234, woman: 120 },
];

const chartConfig = {
    man: {
        label: "Man",
        color: "var(--chart-3)",
    },
    woman: {
        label: "Woman",
        color: "var(--chart-4)",
    },
};

const AreaChartEx = () => {
    return (
        <div className="">
            <h1 className="text-lg font-sans font-bold mb-4">Total Visitors</h1>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <AreaChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={true} />
                    <XAxis
                        dataKey="month"
                        tickLine={true}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                        tickLine={true}
                        tickMargin={10}
                        axisLine={true}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <defs>
                        <linearGradient id="fillMan" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="var(--color-man)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-man)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                        <linearGradient id="fillWoman" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="var(--color-woman)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-woman)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                    </defs>
                    <Area
                        dataKey="woman"
                        type="natural"
                        fill="url(#fillWoman)"
                        fillOpacity={0.4}
                        stroke="var(--color-woman)"
                        stackId="a"
                    />
                    <Area
                        dataKey="man"
                        type="natural"
                        fill="url(#fillMan)"
                        fillOpacity={0.4}
                        stroke="var(--color-man)"
                        stackId="a"
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    );
};

export default AreaChartEx;
