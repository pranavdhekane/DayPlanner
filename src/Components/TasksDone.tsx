
// Update TasksDone.tsx
import { useTaskManager } from "./TaskManager";

const TasksDone = () => {
    const { completedTasks } = useTaskManager();

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Completed Tasks</h2>
            {completedTasks.length === 0 ? (
                <p>No tasks completed yet.</p>
            ) : (
                completedTasks.map((task:any, index:number) => (
                    <div key={index} className="px-6 py-5 border-3 my-2 rounded-2xl"> 
                        <h2 className="text-xl font-medium">{task.Task}</h2>
                        <div className="flex gap-2">
                            <h2 className="text-sm">Type: {task.Type}</h2>
                            <h2 className="text-sm">Time: {task.Time}</h2>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TasksDone;
