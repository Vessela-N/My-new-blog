import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import Login from './components/Login/Login';
import Recipe from './components/Recipe/Recipe';
import useToken from './common/useToken';

function App() {
    const { token } = useToken();

    return (
        <Router>
            <div className='App'>
                <Navbar isLoggedIn={Boolean(token)}/>
                <div className='content'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/cuisines/:cuisine' component={Home}/>
                        <Route path='/categories/:category' component={Home}/>
                        <Route exact path='/recipe/add' component={Create}/>
                        <Route path='/recipe/:id' component={Recipe}/>
                        <Route path='/login' component={Login}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
