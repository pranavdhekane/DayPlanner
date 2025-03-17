"use client"
import { useTaskManager } from "./TaskManager";

import { Pie, PieChart } from "recharts"

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card"
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/Components/ui/chart"
import { ChartLegend, ChartLegendContent } from "@/Components/ui/chart"


const chartConfig = {
	Learn: {
		label: "Learn",
		color: "orange",
	},
	Exercise: {
		label: "Exercise",
		color: "blue",
	},
	Other: {
		label: "Other",
		color: "red",
	},
} satisfies ChartConfig

export default function Chart() {
	const { tasks, completedTasks } = useTaskManager();
	let Other = 0;
	let Learn = 0;
	let Exercise = 0;
	const all = [...tasks, ...completedTasks];

	for (let i = 0; i < all.length; i++) {
		if (all[i].Type == 'Learn') Learn++;
		else if (all[i].Type == 'Other') Other++;
		else if (all[i].Type == 'Exercise') Exercise++;
	}

	const chartData = [
		{ type: 'Learn', points: Learn, fill: "var(--color-Learn)" },
		{ type: 'Exercise', points: Exercise, fill: "var(--color-Exercise)" },
		{ type: 'Other', points: Other, fill: "var(--color-Other)" },
	]

	return (
		<Card className="flex flex-col gap-0 border-0 rounded-2xl">
			<CardHeader className="items-center pb-0">
				<CardTitle>Task Types</CardTitle>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[250px]"
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<ChartLegend content={<ChartLegendContent />} />
						<Pie
							data={chartData}
							dataKey="points"
							nameKey="type"
							innerRadius={50}
						/>
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
