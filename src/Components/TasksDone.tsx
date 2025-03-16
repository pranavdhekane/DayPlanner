import { useState, useEffect } from "react";

interface TaskData {
    Task: string;
    Time: string;
    Type: string;
}

const TasksDone = () => {
    const [completedTasks, setCompletedTasks] = useState<TaskData[]>([]);

    useEffect(() => {
        const storedData = localStorage.getItem("tasksDone");
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                if (Array.isArray(parsedData)) {
                    setCompletedTasks(parsedData);
                }
            } catch (error) {
                console.error("Error parsing tasksDone data:", error);
            }
        }
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Completed Tasks</h2>
            {completedTasks.length === 0 ? (
                <p>No tasks completed yet.</p>
            ) : (
                completedTasks.map((task, index) => (
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
