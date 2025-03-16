
// Update AllTasks.tsx
import { useTaskManager } from "./TaskManager";
import AddTask from "./AddTask";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";


const AllTasks = () => {
    const { tasks, deleteTask, markTaskAsDone } = useTaskManager();

    return (
        <div className="p-4 md:p-10 md:px-20 grid md:grid-cols-2 gap-3 md:gap-[5rem] md:h-[90vh] bg-amber-100">
            <div>
                <h2 className="text-lg font-semibold mb-4">Add a Task</h2>
                <AddTask />
            </div>
            <div className="overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4">Remaining Tasks</h2>
                <div>
                    {tasks.length === 0 ? (
                        <p>No tasks Pending.</p>
                    ) : (
                        tasks.map((ob: any, idx: number) => (
                            <div key={idx} className="px-6 py-5 border-3 my-2 rounded-2xl">
                                <div className="flex justify-between gap-2 md:items-center">
                                    <h2 className="text-xl font-medium">{ob.Task}</h2>
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
            </div>
        </div>
    );
};

export default AllTasks;
