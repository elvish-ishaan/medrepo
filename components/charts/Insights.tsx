
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, CartesianGrid, XAxis, Bar } from "recharts"

export default function Insights() {
  const [data, setData] = useState([
    {
      date: "2023-09-01",
      bloodPressure: {
        systolic: 120,
        diastolic: 80,
      },
      heartRate: 72,
      sugarLevel: 95,
    },
    {
      date: "2023-09-02",
      bloodPressure: {
        systolic: 122,
        diastolic: 82,
      },
      heartRate: 74,
      sugarLevel: 92,
    },
    {
      date: "2023-09-03",
      bloodPressure: {
        systolic: 118,
        diastolic: 78,
      },
      heartRate: 70,
      sugarLevel: 90,
    },
    {
      date: "2023-09-04",
      bloodPressure: {
        systolic: 124,
        diastolic: 84,
      },
      heartRate: 76,
      sugarLevel: 98,
    },
    {
      date: "2023-09-05",
      bloodPressure: {
        systolic: 119,
        diastolic: 79,
      },
      heartRate: 73,
      sugarLevel: 93,
    },
    {
      date: "2023-09-06",
      bloodPressure: {
        systolic: 121,
        diastolic: 81,
      },
      heartRate: 75,
      sugarLevel: 94,
    },
    {
      date: "2023-09-07",
      bloodPressure: {
        systolic: 117,
        diastolic: 77,
      },
      heartRate: 71,
      sugarLevel: 89,
    },
  ])
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleScroll = (direction: string) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (direction === "right" && currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  return (
    <div className="bg-background rounded-lg border p-6 w-full max-w-xl ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Vital Signs</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => handleScroll("left")} disabled={currentIndex === 0}>
            <ArrowLeftIcon className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleScroll("right")}
            disabled={currentIndex === data.length - 1}
          >
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-medium">Blood Pressure</h3>
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                <HeartIcon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-lg font-bold">
                  {data[currentIndex].bloodPressure.systolic}/{data[currentIndex].bloodPressure.diastolic}
                </div>
                <div className="text-sm text-muted-foreground">mmHg</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-medium">Heart Rate</h3>
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                <PowerIcon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-lg font-bold">{data[currentIndex].heartRate}</div>
                <div className="text-sm text-muted-foreground">bpm</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-medium">Sugar Level</h3>
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                <DropletIcon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-lg font-bold">{data[currentIndex].sugarLevel}</div>
                <div className="text-sm text-muted-foreground">mg/dL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-[200px]">
          <ChartContainer
            config={{
              bloodPressure: { label: "Blood Pressure", color: "hsl(var(--chart-1))" },
              heartRate: { label: "Heart Rate", color: "hsl(var(--chart-2))" },
              sugarLevel: { label: "Sugar Level", color: "hsl(var(--chart-3))" },
            }}
            className="min-h-[50px]"
          >
            <BarChart
              accessibilityLayer
              data={data.map((item) => ({
                date: item.date,
                bloodPressure: item.bloodPressure.systolic,
                heartRate: item.heartRate,
                sugarLevel: item.sugarLevel,
              }))}
              margin={{ left: 12, right: 12 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(5)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey="bloodPressure" fill="var(--color-bloodPressure)" radius={4} />
              <Bar dataKey="heartRate" fill="var(--color-heartRate)" radius={4} />
              <Bar dataKey="sugarLevel" fill="var(--color-sugarLevel)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function DropletIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  )
}


function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function PowerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}