import './App.scss';
import { BottomNav } from './components/BottomNav/BottomNav';
import { TopNav } from './components/TopNav/TopNav';
import { ChoreChart } from './components/ChoreChart/ChoreChart';
import { TimelineHome } from './components/TimeLine/TimeLineHome';
import { GroceryList } from './components/GroceryList/GroceryList';
import { Todo } from './components/Todo/Todo';
import { Survey } from './components/Survey/Survey';
import Calender from './components/Calender/Calender';
import { Recipes } from './components/Recipies/Recipes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteMatch,
} from 'react-router-dom';
import { Ingredients } from './components/Recipies/Ingredients';

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
          <Route path='/survey' component={Survey} />
          <Route path='/todolist' component={Todo} />
          <Route path='/calender' component={Calender} />
          <Route path='/recipes/:id/ingredients' component={Ingredients} />
          <Route path='/recipes' component={Recipes}>
            {/* <Route exact path='/ingredients' component={Ingredients} /> */}
          </Route>
        </Switch>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
