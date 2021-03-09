import "./App.css";
import {BottomNav} from "./components/BottomNav";
import {TopNav} from "./components/TopNav";
import {ChoreChart} from "./components/ChoreChart";
import {TimelineHome} from "./components/TimeLineHome";
function App() {
	return (
		<div className="App">
			<TopNav />
			<div className="grid-container">
				<div className="two">
					<TimelineHome />
				</div>
				<div className="three">
					<ChoreChart />
				</div>
			</div>
			<BottomNav />
		</div>
	);
}

export default App;
