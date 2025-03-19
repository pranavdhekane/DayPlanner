
// Update TasksDone.tsx
import { useTaskManager } from "./TaskManager";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area"

import { Dumbbell, BookOpen } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const TasksDone = () => {
    const { completedTasks } = useTaskManager();

    return (
        <div className="p-6 md:p-10">
            <h2 className="text-lg font-semibold mb-4">Completed Tasks</h2>
            <ScrollArea className="w-full whitespace-nowrap rounded-md ">
                <div className="flex w-max space-x-4 h-auto">
                    {completedTasks.length === 0 ? (
                        <div className="px-6 py-5 border-3 border-black my-2 rounded-2xl ">
                            No tasks completed yet.
                        </div>
                    ) : (
                        completedTasks.map((task: any, index: number) => (
                            <div key={index} className="px-6 py-5 border-3 my-2 rounded-2xl border-black">
                                <h2 className="text-xl font-medium flex justify-around items-center gap-3">
                                    {task.Task}
                                    <div className="flex justify-center items-center">
                                        {
                                            task.Type === 'Learn'
                                                ? <BookOpen size={18} />
                                                : task.Type === 'Exercise'
                                                    ? <Dumbbell size={18} />
                                                    : null
                                        }
                                    </div>
                                </h2>
                                <h2 className="text-sm">
                                    <FontAwesomeIcon icon={faClock} />
                                    : {task.Time}</h2>

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
