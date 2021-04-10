import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import Login from './components/Login/Login';
import Banner from './components/Banner/Banner';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <div className='content'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/cuisines/:cuisine' component={Home}/>
                        <Route exact path='/recipe/add' component={Create}/>
                        <Route path='/recipe/:id' component={RecipeDetails}/>
                        <Route path='/login' component={Login}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
