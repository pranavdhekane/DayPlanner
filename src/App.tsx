import AllTasks from "./Components/AllTasks";
import UseEmailHandler from "./Components/UserEmailHandler";
import Navbar from './Components/Navbar';
import SeeResult from "./Components/SeeResult";
import Hero from "./Components/Hero";
import TasksDone from "./Components/TasksDone";
import { TaskProvider } from "./Components/TaskManager";
import AddTask from "./Components/AddTask";

const App = () => {

	return (
		<>
			<TaskProvider>
				<div className="md:flex md:h-screen md:overflow-hidden md:justify-between">
					<Navbar />
					<div className="
						w-full h-auto md:overflow-y-auto
						[&::-webkit-scrollbar]:w-2
						[&::-webkit-scrollbar-track]:rounded-full
						[&::-webkit-scrollbar-track]:bg-gray-100
						[&::-webkit-scrollbar-thumb]:rounded-full
						[&::-webkit-scrollbar-thumb]:bg-gray-300
						dark:[&::-webkit-scrollbar-track]:bg-neutral-700
						dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
					>
						<Hero />
						<AllTasks />
						<TasksDone />
						<AddTask />
					</div>
					<div className="
						h-auto mb-[6rem] bg-amber-200
						md:w-[50vw] md:h-screen md:overflow-y-scroll 
						[&::-webkit-scrollbar]:w-2
						[&::-webkit-scrollbar-track]:rounded-full
						[&::-webkit-scrollbar-track]:bg-gray-100
						[&::-webkit-scrollbar-thumb]:rounded-full
						[&::-webkit-scrollbar-thumb]:bg-gray-300
						dark:[&::-webkit-scrollbar-track]:bg-neutral-700
						dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
					>
						<UseEmailHandler />
						<SeeResult />
					</div>
				</div>
			</TaskProvider>
		</>
	);
};

export default App;
