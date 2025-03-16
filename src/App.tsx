import AllTasks from "./Components/AllTasks";
import UseEmailHandler from "./Components/UserEmailHandler";
import Navbar from './Components/Navbar';
import SeeResult from "./Components/SeeResult";
import Hero from "./Components/Hero";
import TasksDone from "./Components/tasksDone";

const App = () => {
	
	return (
		<>
			<Navbar/>
			<Hero/>
			<AllTasks />
			<TasksDone/>
			<SeeResult/>
			<UseEmailHandler/>
		</>
	);
};

export default App;
