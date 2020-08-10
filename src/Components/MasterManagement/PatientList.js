import React from 'react';
import { MDBContainer } from 'mdbreact'
import './PatientList.css';

export const PatientList = ({ list, OnEditClick }) => {
    function createPatients() {
        let table = []
        // Outer loop to create parent
        for (let i = 0; i < list.length; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j < 5; j++) {
                if (j === 4) {
                    children.push(<td><button className="btn btn-info" onClick={OnEditClick}>Edit</button> <button>Detail</button> </td>)
                }
                else {
                    if (j === 0) {
                        children.push(<td>{list[i].PatientId}</td>)
                    }
                    if (j === 1) {
                        children.push(<td>{list[i].Name}</td>)
                    }
                    if (j === 2) {
                        children.push(<td>{list[i].Contact}</td>)
                    }
                    if (j === 3) {
                        children.push(<td>{list[i].MStatus}</td>)
                    }
                }
            }
            table.push(<tr>{children}</tr>)
        }
        return table
    }
    return (
        <div className="row">
            <div className="blankDiv">
            </div>
            <MDBContainer>
                <div id="wrapper">
                    <div className="h-20 d-inline-block">Patient ID</div>
                    <div className="h-20 d-inline-block">Name</div>
                    <div className="h-20 d-inline-block">Contact</div>
                    <div className="h-20 d-inline-block">Marital Status</div>
                    <div className="h-40 d-inline-block">Action</div>
                </div>
                <div id="dataTable">
                    <table>
                        {createPatients()}
                    </table>
                </div>
            </MDBContainer>
            <div className="blankDiv"></div>
        </div>
    )
}
