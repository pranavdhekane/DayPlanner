
// Update TasksDone.tsx
import { useTaskManager } from "./TaskManager";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area"

import imgBook from '@/assets/book.png';
import imgDumbell from '@/assets/dumbell.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const TasksDone = () => {
    const { completedTasks } = useTaskManager();

    return (
        <div className="p-10">
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
                                <h2 className="text-xl font-medium">{task.Task}</h2>
                                <div className="flex gap-2">
                                    <h2 className="text-sm">
                                        <FontAwesomeIcon icon={faClock} />
                                        : {task.Time}</h2>
                                    <p className="min-w-4 max-w-4">
                                        {
                                            task.Type === 'Learn'
                                                ? <img src={imgBook} />
                                                : task.Type === 'Exercise'
                                                    ? <img src={imgDumbell} />
                                                    : null
                                        }
                                    </p>
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
