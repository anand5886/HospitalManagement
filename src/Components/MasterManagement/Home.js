import React from 'react';
import { NavLink } from 'reactstrap';
import './Home.css';
import { Layout } from '../Home/Layout';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { PatientList } from './PatientList'
import { AddPatient } from './AddPatient';
import { Redirect } from "react-router-dom";
const initialPatientList = [
  {
    PatientId: '1',
    Name: 'Robin',
    Contact: '518-526-9968',
    MStatus: 'Married'
  },
  {
    PatientId: '2',
    Name: 'Dennis',
    Contact: '765-654-2345',
    MStatus: 'Un-Married'
  },
];
export const Home = () => {

  const [list, setList] = React.useState(initialPatientList);
  const [Name, setName] = React.useState('');
  const [Contact, setContact] = React.useState('');
  const [PatientId, setPatientId] = React.useState('');
  const [MaritalStatus, setStatus] = React.useState('');

  function handleChange(event) {
    switch (event.target.id) {
      case "PatientId":
        setPatientId(event.target.value);
        break;
      case "Name":
        setName(event.target.value);
        break;
      case "Contact":
        setContact(event.target.value);
        break;
      case "MStatus":
        setStatus(event.target.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    const patientlist = list.concat({ PatientId: PatientId, Name: Name, Contact: Contact, MStatus: MaritalStatus });
    setList(patientlist);
    console.log(patientlist);
    event.preventDefault();
    alert('Patient added successfully');
  }

  function editClick(event) {
    alert('i am in edit');
    // const history = useHistory();
    // history.push("/AddPatient");
    // <Redirect to={'/AddPatient'}></Redirect>
  }

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
            <Route exact path='/Home'>
              <PatientList list={list} OnEditClick={editClick} > </PatientList>
            </Route>

            <Route path='/AddPatient'>
              <AddPatient
                Name={Name}
                PatientId={PatientId}
                Contact={Contact}
                MStatus={MaritalStatus}
                onChange={handleChange}
                onSubmit={handleSubmit} ></AddPatient>
            </Route>
            <Route path='/Schedule'><h1>New aponitment</h1>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
