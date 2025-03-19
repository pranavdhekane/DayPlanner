// Update AddTask.tsx
import { useState } from "react";
import { useTaskManager } from "./TaskManager";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select"


const AddTask = () => {
    const { addTask } = useTaskManager();
    const [task, setTask] = useState('');
    const [time, setTime] = useState('');
    const [type, setType] = useState('');

    const handleDataChange = () => {
        if (task === '' || type === '' || time === '') {
            window.alert(`Enter valid details`);
            return;
        }
        addTask({ Task: task, Time: time, Type: type });
        setTask('');
        setTime('');
        setType('');
    };

    return (
        <div className="bg-indigo-100 p-6 md:p-10" >
            <h2 className="text-lg font-semibold mb-4">Add Task</h2>
            <div
                className="
                        grid gap-4 p-6 rounded-lg md:rounded-2xl bg-white 
                        [&>div]:grid [&>div]:gap-1
                        [&>div>input]:border [&>div>input]:border-black [&>div>input]:rounded [&>div>input]:px-2 [&>div>input]:py-1 
                        [&>div>label]:text-gray-2
                    "
            >
                <h1 className="text-2xl font-semibold">
                    Explain Your Task
                </h1>
                <hr className="border-2 border-black" />
                <div>
                    <label htmlFor="task">What do u wanna do ? </label>
                    <input type="text" id="task" value={task} onChange={(e) => setTask(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="time">How much time u would take ?</label>
                    <input type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="type">How will u define the type of job ? </label>
                    <Select onValueChange={setType}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Type"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Learn">Learn</SelectItem>
                            <SelectItem value="Exercise">Exercise</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <button onClick={handleDataChange} className="bg-blue-500 hover:bg-blue-400 font-semibold text-white p-2 rounded">
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default AddTask;