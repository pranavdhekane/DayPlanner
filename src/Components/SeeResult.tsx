import { Progress } from "@/Components/ui/progress"
import Chart from '@/Components/Chart';
import { useTaskManager } from "./TaskManager";

const SeeResult = () => {
    const {tasks, completedTasks} = useTaskManager();
    const ProgressValue = (completedTasks.length / (tasks.length + completedTasks.length)) * 100;

    return(
        <div className="h-auto grid grid-cols-1 gap-5  bg-transperent p-5">
            <div className="bg-white flex justify-center items-start p-5 flex-col rounded-2xl" >
                <h2 className="text-lg font-semibold mb-2">Progress</h2>
                <Progress value={ProgressValue} className="h-5" title={`${ProgressValue ? ProgressValue.toFixed(2) : 0}%`}/>
            </div>
            <div className="h-auto">
                <Chart />
            </div>
        </div>
    )
}

export default SeeResult;