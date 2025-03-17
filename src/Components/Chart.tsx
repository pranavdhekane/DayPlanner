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

const chartConfig = {
	Learn: {
		label: "Learn",
		color: "green",
	},
	safari: {
		label: "Other",
		color: "red",
	},
	firefox: {
		label: "Exercise",
		color: "blue",
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
		{ type: 'Learn', points: Learn },
		{ type: 'Other', points: Other },
		{ type: 'Exercise', points: Exercise },
	]

	return (
		<Card className="flex flex-col gap-0 border-0 rounded-2xl pb-1">
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
