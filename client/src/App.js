import './App.scss';
import { BottomNav } from './components/BottomNav/BottomNav';
import { TopNav } from './components/TopNav/TopNav';
import { ChoreChart } from './components/ChoreChart/ChoreChart';
import { TimelineHome } from './components/TimeLine/TimeLineHome';
import { GroceryList } from './components/GroceryList/GroceryList';
import { Todo } from './components/TaskApp/Todo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <TopNav />
        <Switch>
          <Route path='/' exact component={TimelineHome} />
          <Route path='/stats' component={ChoreChart} />
          <Route path='/grocerylist' component={GroceryList} />
          <Route path='/todo' component={Todo} />
        </Switch>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
