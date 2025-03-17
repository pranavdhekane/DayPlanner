import { Progress } from "@/Components/ui/progress"
import Chart from '@/Components/Chart';
import { useTaskManager } from "./TaskManager";

const SeeResult = () => {
    const {tasks, completedTasks} = useTaskManager();
    const ProgressValue = (completedTasks.length / (tasks.length + completedTasks.length)) * 100;

    return(
        <div className="h-auto grid grid-cols-1 gap-5  bg-transperent p-5">
            <div className="bg-gray-700 flex justify-center items-start p-5 flex-col text-white rounded-2xl" >
                <p>Tasks :</p>
                <Progress value={ProgressValue} className="h-5"/>
            </div>
            <div className="h-auto">
                <Chart />
            </div>
        </div>
    )
}

export default SeeResult;