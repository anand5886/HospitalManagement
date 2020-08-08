import React, { Component } from 'react';
// import { NavLink, Container, Row, Col } from 'reactstrap';
import { MDBContainer } from 'mdbreact'
// import { Link } from 'react-router-dom';
import './PatientList.css';


export class PatientList extends Component {
    createTable = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < 5; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j < 4; j++) {
                if (j == 3) {
                    children.push(<td><button className="btn btn-info">Edit</button> <button>Detail</button> </td>)
                }
                else {

                    children.push(<td>{`Patient ${j + 1}`}</td>)
                }
            }
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }
        return table
    }

    render() {
        return (
            <div className="row">
                <div className="blankDiv">
                </div>
                <MDBContainer>
                    <div id="wrapper">
                        <div className="h-20 d-inline-block">Patient ID</div>
                        <div className="h-20 d-inline-block">Name</div>
                        <div className="h-20 d-inline-block">Contact</div>
                        <div className="h-40 d-inline-block">Action</div>
                    </div>
                    <div id="dataTable">
                        <table>
                            {this.createTable()}
                        </table>
                    </div>
                </MDBContainer>
                <div className="blankDiv"></div>
            </div>
        )
    }
}