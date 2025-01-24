"use client"

import { BriefcaseMedical, TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { month: "January", desktop: 120, mobile: 80 },
  { month: "February", desktop: 105, mobile: 50 },
  { month: "March", desktop: 137, mobile: 20 },
  { month: "April", desktop: 73, mobile: 90 },
  { month: "May", desktop: 109, mobile: 30 },
  { month: "June", desktop: 114, mobile: 40 },
]

const chartConfig = {
  desktop: {
    label: "BP",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Sugar",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function HeroChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blood Pressure And Sugar</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Your blood pressure and sugar levels are stable <BriefcaseMedical className="h-4 w-4 text-green-600" />
        </div>
        <div className="leading-none text-muted-foreground">
          
        </div>
      </CardFooter>
    </Card>
  )
}
