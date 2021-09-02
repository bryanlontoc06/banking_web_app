import React from 'react'
import {    
    FillDelete,
    ContactInfo
} from './component';
import ButtonComponent from './ButtonComponent';

function TableComponent({setCurrentSelectedData, handleDeleteUser, users}) {
    return (
        <>
             <table className="table">
                <thead className="table-dark">
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
                    {users.map((data, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{data.account_no}</th>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.address}</td>
                                <td>{data.mobile_no}</td>
                                <td>{data.email}</td>
                                <td className="action-btns">
                                {/* <div><button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#detailsModal" onClick={() => setCurrentSelectedData(data)}><ContactInfo /></button></div> */}                                    
                                    <ButtonComponent
                                    handleFunction = {()=>setCurrentSelectedData(data)}
                                    iconName = {<ContactInfo />}                                                                     
                                    btnClass= {"btn btn-info"}
                                    dbsToggle={"modal"}
                                    dbsTarget={"#detailsModal"}
                                         />
                                {/* <div><button type="button" className="btn btn-danger" onClick={() => handleDeleteUser(data.account_no)}><FillDelete /></button></div> */}                                    
                                    <ButtonComponent
                                    handleFunction = {() => handleDeleteUser(data.account_no)}
                                    iconName = {<FillDelete />}                                                                 
                                    btnClass= {"btn btn-danger"}
                                    // dbsToggle={"modal"}
                                    // dbsTarget={"#detailsModal"}
                                         />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TableComponent