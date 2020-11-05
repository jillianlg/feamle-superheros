import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from './Header';
import ListPage from './ListPage';
import CreatePage from './CreatePage';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <ListPage {...routerProps} />} 
                    />
                    <Route 
                        path="/create" 
                        exact
                        render={(routerProps) => <CreatePage {...routerProps} />} 
                    />
                    </Switch>
                </Router>
            </div>
        )
    }
}