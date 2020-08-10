import React from 'react';
import './AddPatient.css';

export const AddPatient = ({ Name, PatientId, Contact, MaritalStatus, onChange, onSubmit }) => {

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-sm-6">
                        <label className="labelWidth"> Patient ID:</label>
                        <input type="text" value={PatientId} onChange={onChange} id="PatientId" />
                    </div>
                    <div className="col-sm-6">
                        <label className="labelWidth">Name:</label>
                        <input type="text" value={Name} onChange={onChange} id="Name" />
                    </div>
                    <div className="col-sm-6">
                        <label className="labelWidth">Contact:</label>
                        <input type="text" value={Contact} onChange={onChange} id="Contact" />
                    </div>
                    <div className="col-sm-6">
                        <label className="labelWidth"> Marital Status:</label>
                        <select value={MaritalStatus} onChange={onChange} id="MStatus">
                            <option value="Married">Married</option>
                            <option value="Un-Married">Un-Married</option>
                            <option selected value=""></option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <label className="labelWidth"> </label>
                        <input className="btn btn-primary" type="submit" value="Submit" />
                        <input id="btnCancel" className="btn btn-info" type="submit" value="Cancel" />
                    </div>
                </div>
            </form>
        </div>
    )
}