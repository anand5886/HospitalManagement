import React, { Component } from 'react';
import { NavLink, Container, Row, Col } from 'reactstrap';
import { MDBContainer } from 'mdbreact'
import { Link } from 'react-router-dom';
import './AddPatient.css';


export class AddPatient extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-sm-6">
                            <label className="labelWidth"> Patient ID:</label>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />

                        </div>
                        <div className="col-sm-6">
                            <label className="labelWidth">Name:</label>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />

                        </div>
                        <div className="col-sm-6">
                            <label className="labelWidth">Contact:</label>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />

                        </div>
                        <div className="col-sm-6">
                            <label className="labelWidth"> Marital Status:</label>
                            <select>
                                <option value="Married">Married</option>
                                <option value="Un-Married">Un-Married</option>
                                <option selected value=""></option>
                            </select>
                        </div>
                        <div className="col-sm-6">
                            <label className="labelWidth"> </label>
                            <input className="btn btn-primary" type="submit" value="Submit" />
                            <label>    </label>
                            <input className="btn btn-info" type="submit" value="Cancel" />
                        </div>

                    </div>

                </form>
            </div>
        )
    }
}