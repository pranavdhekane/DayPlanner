import AllTasks from "./Components/AllTasks";
import UseEmailHandler from "./Components/UserEmailHandler";
import Navbar from './Components/Navbar';
import SeeResult from "./Components/SeeResult";
import Hero from "./Components/Hero";

const App = () => {
	
	return (
		<>
			<Navbar/>
			<Hero/>
			<AllTasks />
			<SeeResult/>
			<UseEmailHandler/>
		</>
	);
};

export default App;
