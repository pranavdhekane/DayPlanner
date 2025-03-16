import { Button } from "@/Components/ui/button"

const Hero = () => {
    return(
        <div className="min-h-[70vh] flex justify-center items-center flex-col gap-5">
            <h1 className="text-5xl font-semibold font-stretch-expanded">Yours Daily Planner App</h1>
            <div className="flex gap-4 [&>button]:border-2 [&>button]:p-2 [&>button]:rounded-md [&>button]:bg-gray-600 [&>button]:text-white">
            <button className="hover:bg-gray-500">Add a task</button>
            <button className="hover:bg-gray-500">Completed Tasks</button>
            <Button>
                csd
            </Button>
            </div>
        </div>
    )
}

export default Hero;