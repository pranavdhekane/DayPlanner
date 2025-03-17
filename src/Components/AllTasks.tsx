
// Update AllTasks.tsx
import { useTaskManager } from "./TaskManager";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area"



const AllTasks = () => {
    const { tasks, deleteTask, markTaskAsDone } = useTaskManager();

    return (
        <div className="p-10 bg-amber-100">
            <h2 className="text-lg font-semibold mb-4">Remaining Tasks</h2>
            <ScrollArea className="w-full whitespace-nowrap rounded-md ">
                <div className="flex w-max space-x-4 h-auto">
                    {tasks.length === 0 ? (
                        <div className="px-6 py-5 border-3 rounded-2xl h-auto w-[20rem] ">
                            No tasks Pending.
                        </div>
                    ) : (
                        tasks.map((ob: any, idx: number) => (
                            <div key={idx} className="px-6 py-5 border-3 rounded-2xl h-auto w-[20rem] ">
                                <div className="flex justify-between gap-2 md:items-center">
                                    <h2 className="text-xl font-medium text-wrap">{ob.Task}</h2>
                                    <p>icon</p>
                                </div>
                                <div className="flex gap-2">
                                    <h2 className="text-sm">
                                        Type: {ob.Type}
                                    </h2>
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
                                        className="bg-green-500 rounded px-3 py-2 my-2 text-white font-semibold hover:bg-red-400"
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
