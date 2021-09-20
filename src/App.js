
import './App.css';
import { Switch,Route} from "react-router-dom";
import Home from './Component/Home/Home';
import LeagueDetails from './Component/LeagueDetails/LeagueDetails';

function App() {
  return (
    <Switch>
      <Route exact  path="/" component={Home} />
      <Route exact  path="/home" component={Home} />
      <Route exact  path="/league/:leagueId" component={LeagueDetails} />
    </Switch>
 
   
    
  );
}

export default App;
