import React from 'react'
import {    
    FillDelete,
    ContactInfo,
    PersonPlus
} from './component';

import ButtonComponent from './ButtonComponent';
import "./style.css"

function TableComponent({setCurrentSelectedData, handleDeleteUser, users, insertUserData, loadDummyData, searchHandler, deleteDummyAccounts, handleGenerateAccountNo, searchTerm}) {
    return (
        <>
        <div className='btns-n-search'>
                <div className="add-client-btns">
                    <ButtonComponent
                        handleFunction = {handleGenerateAccountNo}
                        iconName = {<PersonPlus/>}                
                        btnDescription = {" Add Client"}
                        btnClass= {"btn btn-primary user-btn"}
                        dbsToggle={"modal"}
                        dbsTarget={"#exampleModal"}
                    />
                    <ButtonComponent
                        handleFunction = {insertUserData}                               
                        btnDescription = {"Load Data"} 
                        btnClass={loadDummyData ? "btn btn-secondary user-btn" : "btn btn-primary user-btn"}                                    
                    />
                    <ButtonComponent
                        handleFunction={deleteDummyAccounts}
                        btnDescription = {"Delete Data"}
                        btnClass={loadDummyData ? "btn btn-primary user-btn": "btn btn-secondary user-btn"}                                
                    />

                </div>
                <div className="d-flex user-input">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={searchHandler} value={searchTerm}/>
                </div>
            </div>
            <div className="table-container">
             <table className="table">
                <thead className="table-header">
                    <tr>
                        <th scope="col">Acct #</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Email Address</th>
                        <th scope="col" className="action-col">Action</th>
                    </tr>
                </thead>
                
                <tbody>
                    {users.length > 0 ?
                    users.map((data, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{data.account_no}</th>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.address}</td>
                                <td>{data.mobile_no}</td>
                                <td>{data.email}</td>
                                <td className="action-btns">
                                                            
                                    <ButtonComponent
                                        handleFunction = {()=>setCurrentSelectedData(data)}
                                        iconName = {<ContactInfo />}                                                                     
                                        btnClass= {"btn btn-info"}
                                        dbsToggle={"modal"}
                                        dbsTarget={"#detailsModal"}
                                    />
                                
                                    <ButtonComponent
                                        handleFunction = {() => handleDeleteUser(data.account_no)}
                                        iconName = {<FillDelete />}                                                                 
                                        btnClass= {"btn btn-danger"}
                                    />
                                </td>
                            </tr>
                        )
                    }) : <th className="no-user-available" colSpan="100%"><h3>No User Available</h3></th>}
                </tbody>
                
            </table>
            </div>
        </>
    )
}

export default TableComponent
