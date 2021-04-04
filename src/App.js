import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './sass/main.scss';
import Navbar from './components/Home/Header/Navbar';
import Home from './screens/Home';
import Footer from './components/Home/Content/Footer';
import Register from './screens/Register';
import Login from './screens/Login';

const App = () => {
    return (
        <Router>
            <div className="app__ms__container">
                <div className="app__headers">
                    <div className="app__navbar__container">
                        <Navbar />
                    </div>
                </div>

                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
