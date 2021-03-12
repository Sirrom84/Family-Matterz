import "./App.css";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { TopNav } from "./components/TopNav/TopNav";
import { ChoreChart } from "./components/ChoreChart/ChoreChart";
import { TimelineHome } from "./components/TimeLine/TimeLineHome";
import { GroceryList } from "./components/GroceryList/GroceryList";
import MyCalender from "./components/Calender/Calender";

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
        <div className="four">
          <GroceryList />
          <div className="five">
            <MyCalender />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
