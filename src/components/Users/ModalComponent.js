import React from 'react'
import InputComponent from './InputComponent'
import ButtonComponent from './ButtonComponent'

const ModalComponent = ({accountNo, setUserName, userName, setPassword, password, setFirstName, firstName, setLastName, lastName, setAddress, address, setMobileNo, mobileNo, setEmail, email, setBalance, balance, handleSaveUsers}) => {
    return (
        <div>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">User Information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>         
                    </div>

                    <div className="modal-body">
                        <div className="form-floating mb-3">
                            <InputComponent
                                inputType={"text"}
                                inputClass={"form-control"}
                                inputID={"floatingInput"}
                                placeholderTitle={"Account No."}                                
                                inputValue={accountNo}                                
                                label={`Account No.`}
                                isReadOnly={true}                                
                            />
                        </div>
                        <div className="form-floating mb-3">
                            <InputComponent
                                inputType={"text"}
                                inputClass={"form-control"}
                                inputID={"floatingUserName"}
                                placeholderTitle={"User Name"}
                                handleOnChange={setUserName}                                
                                inputValue={userName}                                
                                label={`User Name`}                                                             
                            />
                        </div>
                        <div className="form-floating mb-3">
                            <InputComponent
                                inputType={"password"}
                                inputClass={"form-control"}
                                inputID={"floatingPassword"}
                                placeholderTitle={"Password"}
                                handleOnChange={setPassword}                                
                                inputValue={password}                                
                                label={`Password`}                                                             
                            />
                        </div>
                        <div className="form-floating mb-3">
                            <InputComponent
                                inputType={"text"}
                                inputClass={"form-control"}
                                inputID={"floatingFirstName"}
                                placeholderTitle={"First Name"}
                                handleOnChange={setFirstName}                                
                                inputValue={firstName}                                
                                label={`First Name`}                                                             
                            />
                        </div>
                        <div className="form-floating mb-3">
                            <InputComponent
                                inputType={"text"}
                                inputClass={"form-control"}
                                inputID={"floatingLastName"}
                                placeholderTitle={"Last Name"}
                                handleOnChange={setLastName}                                
                                inputValue={lastName}                                
                                label={`Last Name`}                                                             
                            />
                        </div>
                        <div className="form-floating mb-3">
                            <InputComponent
                                inputType={"text"}
                                inputClass={"form-control"}
                                inputID={"floatingAddress"}
                                placeholderTitle={"Address"}
                                handleOnChange={setAddress}                                
                                inputValue={address}                                
                                label={`Address`}                                                             
                            />
                        </div>
                        <div className="form-floating mb-3">
                            <InputComponent
                                inputType={"number"}
                                inputClass={"form-control"}
                                inputID={"floatingActiveNo"}
                                placeholderTitle={"Active Mobile No."}
                                handleOnChange={setMobileNo}
                                inputValue={mobileNo}                                
                                label={`Active Mobile No.`}
                            />
                        </div>
                        <div className="form-floating mb-3">
                            <InputComponent
                                inputType={"email"}
                                inputClass={"form-control"}
                                inputID={"floatingEmail"}
                                placeholderTitle={"Email Address"}
                                handleOnChange={setEmail}                                
                                inputValue={email}                                
                                label={`Email Address`}                                                             
                            />
                        </div>
                        <div className="form-floating mb-3">
                            <InputComponent
                                inputType={"number"}
                                inputClass={"form-control"}
                                inputID={"floatingBalance"}
                                placeholderTitle={"Balance"}
                                handleOnChange={setBalance}                                
                                inputValue={balance}                           
                                label={`Balance`}                                                             
                            />
                        </div>
                    </div>
                        <div className="modal-footer">
                                <ButtonComponent
                                    btnClass={"btn btn-secondary"}
                                    dbsDismiss={"modal"}
                                    btnDescription={"Close"}
                                />                            
                            
                                <ButtonComponent
                                    btnClass={"btn btn-primary"}
                                    dbsDismiss={"modal"}
                                    dbsToggle={"modal"}
                                    dbsTarget={"#ModalForgotPassword"}
                                    handleFunction={handleSaveUsers}
                                    btnDescription={"Save"}
                                />
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalComponent
