import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Header from './components/Header';


function App() {
    return (
        <Router>
            <div className='App'>
                <Header/>
                <Navbar />
                <div className='content'>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
