
// Update TasksDone.tsx
import { useTaskManager } from "./TaskManager";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area"

const TasksDone = () => {
    const { completedTasks } = useTaskManager();

    return (
        <div className="p-10">
            <h2 className="text-lg font-semibold mb-4">Completed Tasks</h2>
            <ScrollArea className="w-full whitespace-nowrap rounded-md ">
                <div className="flex w-max space-x-4 h-auto">
                    {completedTasks.length === 0 ? (
                        <div className="px-6 py-5 border-3 my-2 rounded-2xl ">
                            No tasks completed yet.
                        </div>
                    ) : (
                        completedTasks.map((task: any, index: number) => (
                            <div key={index} className="px-6 py-5 border-3 my-2 rounded-2xl ">
                                <h2 className="text-xl font-medium">{task.Task}</h2>
                                <div className="flex gap-2">
                                    <h2 className="text-sm">Type: {task.Type}</h2>
                                    <h2 className="text-sm">Time: {task.Time}</h2>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
};

export default TasksDone;
