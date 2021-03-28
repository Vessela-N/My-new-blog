import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Header from './components/Header';
import Cuisines from './components/Cuisines';


function App() {
    return (
        <Router>
            <div className='App'>
                <Header/>
                <Navbar />
                <Cuisines />
                <div className='content'>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/cuisines/:cuisine'>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
