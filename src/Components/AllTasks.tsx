import { useTaskManager } from "./TaskManager";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area"

import { Dumbbell, BookOpen } from "lucide-react";

interface TaskData {
    Task: string;
    Time: string;
    Type: string;
}

const AllTasks = () => {
    const { tasks, deleteTask, markTaskAsDone } = useTaskManager();

    return (
        <div className="p-6 md:p-10 bg-blue-50">
            <h2 className="text-lg font-semibold mb-4">Remaining Tasks</h2>
            <ScrollArea className="w-full whitespace-nowrap rounded-md ">
                <div className="flex w-max space-x-4 h-auto">
                    {tasks.length === 0 ? (
                        <div className="px-6 py-5 border-3 border-black rounded-2xl h-auto w-[15rem] bg-white">
                            No tasks Pending.
                        </div>
                    ) : (
                        tasks.map((ob : TaskData, idx: number) => (
                            <div key={idx} className="px-6 py-5 border-3 rounded-2xl h-auto w-[15rem] md:w-[20rem] bg-white border-black">
                                <div className="flex justify-between gap-2 items-start">
                                    <h2 className="text-xl font-medium text-wrap">{ob.Task}</h2>
                                    <p>
                                        {
                                            ob.Type === 'Learn'
                                                ? <BookOpen/>
                                                : ob.Type === 'Exercise'
                                                    ? <Dumbbell/>
                                                    : null
                                        }
                                    </p>

                                </div>
                                <div className="flex gap-2">
                                    <h2 className="text-sm">
                                        <FontAwesomeIcon icon={faClock} />
                                        : {ob.Time}</h2>
                                </div>
                                <div className="grid gap-2 grid-cols-2">
                                    <button
                                        onClick={() => deleteTask(idx)}
                                        className="bg-red-500 rounded px-3 py-2 my-2 text-white font-semibold hover:bg-red-400"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => markTaskAsDone(idx)}
                                        className="bg-green-500 rounded px-3 py-2 my-2 text-white font-semibold hover:bg-green-400"
                                    >
                                        Done
                                    </button>
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

export default AllTasks;
