import React, { Component } from 'react';
import { NavLink, Container, Row, Col } from 'reactstrap';
import { MDBContainer } from 'mdbreact'
import './Home.css';
import { Layout } from '../Home/Layout';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PatientList } from './PatientList'
import { AddPatient } from './AddPatient'


export class Home extends Component {
  state = {
    patients: {
      PatientID: "",
      Name: "",
      Contact: ""
    }
  };

  render() {
    return (
      <div>
        <div id="homeHeader">
          <NavLink tag={Link} to="/">Logout</NavLink>
        </div>
        <Router>
          <div className="row">
            <NavLink tag={Link} to="/Home">Home</NavLink>
            <NavLink tag={Link} to="/AddPatient">Add Patient  </NavLink>
            <NavLink tag={Link} to="/Schedule">Schedule Appointment  </NavLink>
          </div>
          <div className="row">
            <br></br>
          </div>
          <Layout>
            <Switch>
              <Route exact path='/Home' component={PatientList} />
              <Route path='/AddPatient' component={AddPatient} />
              <Route path='/Schedule'><h1>New aponitment</h1>
              </Route>
            </Switch>
          </Layout>
        </Router>

      </div>
    );
  }
}