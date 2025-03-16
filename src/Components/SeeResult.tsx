import { Progress } from "@/Components/ui/progress"
import Chart from '@/Components/Chart';

const SeeResult = () => {
    return(
        <div className="min-h-[90vh] grid grid-cols-2">
            <div>
                <Chart />
            </div>
            <div className="bg-gray-700 p-10 flex justify-center items-center">
                <Progress value={20} className="h-10"/>
            </div>
        </div>
    )
}

export default SeeResult;