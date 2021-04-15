import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form/Form';
import Login from './components/Login/Login';
import Recipe from './components/Recipe/Recipe';
import ContextProvider from './components/ContextProvider/ContextProvider'
import Register from './components/Register/Register';

function App() {

    return (
      <ContextProvider>
        <Router>
            <div className='App'>
                <Navbar />
                <div className='content'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/cuisines/:cuisine' component={Home}/>
                        <Route path='/categories/:category' component={Home}/>
                        <Route path='/countries/:country' component={Home}/>
                        <Route exact path='/recipe/add' component={Form}/>
                        <Route exact path='/recipe/edit/:id' component={Form}/>
                        <Route path='/recipe/:id' component={Recipe}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                    </Switch>
                </div>
            </div>
        </Router>
      </ContextProvider>
    );
}

export default App;
