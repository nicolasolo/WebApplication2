import React, { Component } from 'react';
import Home from './Pages/Home';
import Jumbo from './components/Jumbotron';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from './components/AppBar';
import About from './Pages/About';




class App extends Component {
    render() {
        return (

            <Router>
                <div>
                   
                    <AppBar />



                    <Route path="/" exact component={Home} />

                    <Route path="/about" component={About} />





                </div>
            </Router>

        );
    }
}

export default App;

