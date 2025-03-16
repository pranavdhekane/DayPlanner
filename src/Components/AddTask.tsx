import { useState } from "react";

interface AddTaskProps {
    setData: (newData: string) => void;
    data: Array<{ Task: string; Time: string; Type: string }>;
    deleteTask: (index: number) => void;
}


const AddTask: React.FC<AddTaskProps> = ({ setData, data }) => {
    // Form fields
    const [task, setTask] = useState('');
    const [time, setTime] = useState('');
    const [type, setType] = useState('');

    const handleDataChange = () => {
        if (task === '' || type === '' || time === '') {
            window.alert(`Enter valid details`)
            return -1
        }
        const newTask = {
            "Task": task,
            "Time": time,
            "Type": type,
        };
        setData(JSON.stringify([...data, newTask])); // Store as string in localStorage
    };



    return (
        <div className="bg-green-800 p-6">
            <div
                className="
                        grid gap-4 p-6 rounded-2xl bg-white 
                        [&>div]:grid [&>div]:gap-1
                        [&>div>input]:border [&>div>input]:rounded [&>div>input]:px-2 [&>div>input]:py-1
                        [&>div>label]:text-gray-2
                    "
            >
                <h1 className="text-2xl font-semibold">
                    Explain Your Task
                </h1>
                <hr className="border-2"/>
                <div>
                    <label htmlFor="task">What do u wanna do ? </label>
                    <input type="text" id="task" value={task} onChange={(e) => setTask(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="time">How much time u would take ?</label>
                    <input type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="type">How will u define the type of job ? </label>
                    <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} required />
                </div>

                <button
                    onClick={handleDataChange}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default AddTask;
