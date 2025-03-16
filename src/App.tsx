import AllTasks from "./Components/AllTasks";
import UseEmailHandler from "./Components/UserEmailHandler";
import Navbar from './Components/Navbar';
import SeeResult from "./Components/SeeResult";
import Hero from "./Components/Hero";
import TasksDone from "./Components/TasksDone";
import { TaskProvider } from "./Components/TaskManager";

const App = () => {

	return (
		<>
			<Navbar />
			<Hero />
			<TaskProvider>
				<AllTasks />
				<TasksDone />
			<SeeResult />
			</TaskProvider>
			<UseEmailHandler />
		</>
	);
};

export default App;
