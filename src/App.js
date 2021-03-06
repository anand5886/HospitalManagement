import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from './Components/Home/Layout';
import { Login } from './Components/Login/Login';
import { Home } from './Components/MasterManagement/Home';
import './Custom.css'
import { HeaderMenu } from './Components/SharedServices/Header/HeaderMenu';
import Switch from 'react-bootstrap/esm/Switch';

class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Router>
                <HeaderMenu />
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/Home' component={Home} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
