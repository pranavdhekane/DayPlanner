import { useState, useEffect } from "react";
import AddTask from "./AddTask";

const useLocalStorageWithExpiry = (key: string, initialValue: string) => {
    const getEndOfDayTimestamp = () => {
        const now = new Date();
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        return endOfDay.getTime();
    };

    const [value, setValue] = useState(() => {
        const storedItem = localStorage.getItem(key);
        if (!storedItem) return initialValue;

        try {
            const { value, expiry } = JSON.parse(storedItem);
            if (Date.now() > expiry) {
                localStorage.removeItem(key);
                return initialValue;
            }
            return value;
        } catch (error) {
            console.error("Error parsing localStorage data:", error);
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ value, expiry: getEndOfDayTimestamp() }));
    }, [key, value]);

    return [value, setValue] as const;
};

interface TaskData {
    Task: string;
    Time: string;
    Type: string;
}

const AllTasks = () => {
    const [data, setData] = useLocalStorageWithExpiry("user", JSON.stringify([]));

    const [theWholeDataToBeShown, setTheWholeDataToBeShown] = useState<TaskData[]>([]);

    useEffect(() => {
        try {
            const parsedData = JSON.parse(data);
            if (Array.isArray(parsedData)) {
                setTheWholeDataToBeShown(parsedData);
            } else {
                setTheWholeDataToBeShown([]);
            }
        } catch (error) {
            console.error("Error parsing data:", error);
        }
    }, [data]);

    const handleDelete = (index: number) => {
        try {
            const parsedData: TaskData[] = JSON.parse(data);
            const updatedData = parsedData.filter((_, i) => i !== index);
            setData(JSON.stringify(updatedData));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    // Tasks that are done
    const [done, setDone] = useLocalStorageWithExpiry("tasksDone", JSON.stringify([]));

    const handleDone = (index: number) => {
        try {
            const parsedData: TaskData[] = JSON.parse(data);  
            const doneTasks: TaskData[] = JSON.parse(done);  
    
            const dataThatIsDone = parsedData[index];
    
            if (!dataThatIsDone) return; 
    
            const updatedDoneTasks = [...doneTasks, dataThatIsDone]; 
    
            setDone(JSON.stringify(updatedDoneTasks));  
            handleDelete(index);  
    
            // Dispatch event to notify TasksDone
            window.dispatchEvent(new Event("tasksUpdated"));
        } catch (error) {
            console.error("Error in handleDone:", error);
        }
    };
    


    return (
        <div className="p-4 md:p-10 md:px-20 grid md:grid-cols-2 gap-3 md:gap-[5rem] md:h-[90vh] bg-amber-100">
            <div className="">
                <h2 className="text-lg font-semibold mb-4">Add a Task</h2>
                <AddTask setData={setData} data={theWholeDataToBeShown} deleteTask={handleDelete} />
            </div>
            <div className="overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4">Remaining Tasks</h2>
                <div className="">
                    {theWholeDataToBeShown.length === 0 ? (
                        <p>No tasks Pending.</p>
                    ) : (
                        theWholeDataToBeShown.map((ob, idx) => (
                            <div key={idx} className=" px-6 py-5 border-3 my-2 rounded-2xl">
                                <div className="flex justify-between gap-2 md:items-center">
                                    <h2 className="text-xl font-medium">{ob.Task}</h2>
                                    <p>icon</p>
                                </div>
                                <div className="flex gap-2">
                                    <h2 className="text-sm">Type: {ob.Type}</h2>
                                    <h2 className="text-sm">Time: {ob.Time}</h2>
                                </div>
                                <div className="grid gap-2 grid-cols-2">
                                    <button
                                        onClick={() => handleDelete(idx)}
                                        className="bg-red-500 rounded px-3 py-2 my-2 text-white font-semibold hover:bg-red-400"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleDone(idx)}
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
