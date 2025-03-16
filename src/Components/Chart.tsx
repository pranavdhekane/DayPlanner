"use client"
import { useTaskManager } from "./TaskManager";

import { Pie, PieChart } from "recharts"

import {
	Card,
	CardContent,
	CardFooter,
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
		color: "hsl(var(--chart-1))",
	},
	safari: {
		label: "Safari",
		color: "hsl(var(--chart-2))",
	},
	firefox: {
		label: "Firefox",
		color: "hsl(var(--chart-3))",
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
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Types</CardTitle>
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
							innerRadius={60}
						/>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				<div className="flex items-center gap-2 font-medium leading-none">
					Showing What kind of Work youre doing today
				</div>
			</CardFooter>
		</Card>
	)
}
