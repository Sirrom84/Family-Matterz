import "./App.css";
import {BottomNav} from "./components/BottomNav";
import {TopNav} from "./components/TopNav";
import {ChoreChart} from "./components/ChoreChart";
import Task from "./components/Task";
import "./components/Task.css";

function App() {
	return (
		<div className="App">
			<TopNav></TopNav>
			<Task></Task>
			<h1>Family Matterz</h1>
			<ChoreChart />
			<BottomNav />
		</div>
	);
}

export default App;
