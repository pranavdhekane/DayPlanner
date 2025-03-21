import { createContext, useContext, useEffect, useState } from "react";

interface TaskData {
    Task: string;
    Time: string;
    Type: string;
}

const getEndOfDayTimestamp = () => {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    return endOfDay.getTime();
};

const TaskContext = createContext<any>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<TaskData[]>(() => {
        const storedTasks = localStorage.getItem("user");
        if (storedTasks) {
            try {
                const { value, expiry } = JSON.parse(storedTasks);
                return Date.now() > expiry ? [] : value;
            } catch (error) {
                console.error("Error parsing user tasks:", error);
            }
        }
        return [];
    });

    const [completedTasks, setCompletedTasks] = useState<TaskData[]>(() => {
        const storedDoneTasks = localStorage.getItem("tasksDone");
        if (storedDoneTasks) {
            try {
                const { value, expiry } = JSON.parse(storedDoneTasks);
                return Date.now() > expiry ? [] : value;
            } catch (error) {
                console.error("Error parsing completed tasks:", error);
            }
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify({ value: tasks, expiry: getEndOfDayTimestamp() }));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem("tasksDone", JSON.stringify({ value: completedTasks, expiry: getEndOfDayTimestamp() }));
    }, [completedTasks]);

    const addTask = (newTask: TaskData) => {
        setTasks((prev) => [...prev, newTask]);
    };

    const deleteTask = (index: number) => {
        setTasks((prev) => prev.filter((_, i) => i !== index));
    };

    const markTaskAsDone = (index: number) => {
        setCompletedTasks((prev) => [...prev, tasks[index]]);
        deleteTask(index);
    };

    return (
        <TaskContext.Provider value={{ tasks, completedTasks, addTask, deleteTask, markTaskAsDone }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskManager = () => useContext(TaskContext);
