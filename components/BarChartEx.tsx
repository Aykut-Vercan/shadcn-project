"use client";

import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "./ui/chart";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 75 },
  { month: "February", desktop: 405, mobile: 210 },
  { month: "March", desktop: 263, mobile: 100 },
  { month: "April", desktop: 43, mobile: 150 },
  { month: "May", desktop: 199, mobile: 110 },
  { month: "June", desktop: 234, mobile: 120 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
};

const BarChartEx = () => {
  return (
    <div className="">
      <h1 className="text-lg font-sans font-bold mb-4">Total Revenue</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={true} />
          <XAxis
            dataKey="month"
            tickLine={true}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />{" "}
          <YAxis
            tickLine={true}
            tickMargin={10}
            axisLine={true}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default BarChartEx;
