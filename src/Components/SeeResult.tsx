import { Progress } from "@/Components/ui/progress"
import Chart from '@/Components/Chart';
import { useTaskManager } from "./TaskManager";

const SeeResult = () => {
    const {tasks, completedTasks} = useTaskManager();
    const ProgressValue = (completedTasks.length / (tasks.length + completedTasks.length)) * 100;

    return(
        <div className="min-h-[90vh] grid grid-cols-2">
            <div>
                <Chart />
            </div>
            <div className="bg-gray-700 p-10 flex justify-center items-center">
                <Progress value={ProgressValue} className="h-10"/>
            </div>
        </div>
    )
}

export default SeeResult;