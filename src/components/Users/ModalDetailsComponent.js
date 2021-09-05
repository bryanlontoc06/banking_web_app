import React from 'react'
import ButtonComponent from './ButtonComponent'
import InputComponent from './InputComponent'

const ModalForDetailsComponent = (  
  {currentSelectedData,  
  convertToMoney,
  setAmountToWithdraw,
  amountToWithdraw,
  handleWithdraw,
  setAmountToDeposit,
  amountToDeposit,
  handleDeposit,
  setTransferTo,
  setAmountToTransfer,
  transferTo,
  amountToTransfer,
  handleTransfer}
) => {
    return (
        <div>        
            <div className="modal fade" id="detailsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">User Information</h5>
                        <ButtonComponent
                         btnClass={"btn-close"}
                         dbsDismiss={"modal"}
                         ariaLabel={"Close"}
                         />
                    </div>
                    <div className="modal-body">
                        <div className="user-row">
                            <div className="form-floating mb-3">
                            <InputComponent
                             inputType={"text"}
                             inputClass={"read-only-user-detail form-control"}
                             placeholderTitle={"Account No."}
                             inputID={"floatingAccountNumberDetails"}
                             isReadOnly={true}
                             inputValue={currentSelectedData.account_no}
                             label={"Account No."}
                            />
                            </div>
                            <div className="form-floating mb-3">
                            <InputComponent
                             inputType={"text"}
                             inputClass={"read-only-user-detail form-control"}
                             placeholderTitle={"User Name"}
                             inputID={"floatingUserNameDetails"}
                             isReadOnly={true}
                             inputValue={currentSelectedData.username}
                             label={"User Name"}
                            />
                            </div>
                        </div>
                        <div className="user-row">
                            <div className="form-floating mb-3">
                                <InputComponent
                                 inputType={"text"}
                                 inputClass={"read-only-user-detail form-control"}
                                 placeholderTitle={"First Name"}
                                 inputID={"floatingFirstNameDetails"}
                                 isReadOnly={true}
                                 inputValue={currentSelectedData.first_name}
                                 label={"First Name"}
                                 />
                            </div>
                            <div className="form-floating mb-3">
                                <InputComponent
                                 inputType={"text"}
                                 inputClass={"read-only-user-detail form-control"}
                                 placeholderTitle={"Last Name"}
                                 inputID={"floatingLastNameDetails"}
                                 isReadOnly={true}
                                 inputValue={currentSelectedData.last_name}
                                 label={"Last Name"}
                                 />
                            </div>
                        </div>
                        <div className="user-row">
                            <div className="form-floating mb-3">
                                <InputComponent
                                 inputType={"text"}
                                 inputClass={"read-only-user-detail form-control"}
                                 placeholderTitle={"Address"}
                                 inputID={"floatingAddressDetails"}
                                 isReadOnly={true}
                                 inputValue={currentSelectedData.address}
                                 label={"Address"}
                                 />
                            </div>
                            <div className="form-floating mb-3">
                                <InputComponent
                                inputType={"number"}
                                inputClass={"read-only-user-detail form-control"}
                                placeholderTitle={"Active Mobile No."}
                                inputID={"floatingActiveNoDetails"}
                                isReadOnly={true}
                                inputValue={currentSelectedData.mobile_no}
                                label={"Active Mobile No."}
                                />
                            </div>
                        </div>
                        <div className="user-row">
                            <div className="form-floating mb-3">
                                <InputComponent
                                inputType={"email"}
                                inputClass={"read-only-user-detail form-control"}
                                placeholderTitle={"Email Address"}
                                inputID={"floatingEmailDetails"}
                                isReadOnly={true}
                                inputValue={currentSelectedData.email}
                                label={"Email Address"}
                                />
                            </div>
                            <div className="form-floating mb-3">
                                <InputComponent
                                inputType={"text"}
                                inputClass={"read-only-user-detail form-control"}
                                placeholderTitle={"Balance"}
                                inputID={"floatingBalanceDetails"}
                                isReadOnly={true}
                                inputValue={convertToMoney(currentSelectedData.balance)}
                                label={"Balance"}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="title">
                            <h5 className="modal-title" >Transactions</h5>
                        </div>
                        <div className="transaction-body-container">
                            <div className="transaction-body user-row">
                                <div className="transaction form-floating mb-3">
                                    <InputComponent
                                        inputType={"number"}
                                        inputClass={"form-control"}
                                        inputID={"floatingWithdraw"}
                                        placeholderTitle={"Withdraw"}
                                        handleOnChange={setAmountToWithdraw}
                                        inputValue={amountToWithdraw}
                                        label={"₱ Amount to Withdraw"}
                                    />
                                </div>
                                
                                <ButtonComponent
                                    btnClass={"btn btn-primary"}                                   
                                    handleFunction={() => handleWithdraw()}
                                    btnDescription={"Withdraw"}
                                />
                            </div>
                            <div className="transaction-body user-row">
                                <div className="transaction form-floating mb-3">
                                    <InputComponent
                                        inputType={"number"}
                                        inputClass={"form-control"}
                                        inputID={"floatingDeposit"}
                                        placeholderTitle={"Deposit"}
                                        handleOnChange={setAmountToDeposit}
                                        inputValue={amountToDeposit}
                                        label={"₱ Amount to Deposit"}
                                    />
                                </div>
                                
                                <ButtonComponent
                                    btnClass={"btn btn-primary"}
                                    handleFunction={() => handleDeposit()}
                                    btnDescription={"Deposit"}
                                />
                            </div>
                            <h6 className="modal-title" >Transfer Funds</h6>
                            <p>To</p>
                            <div className="transaction-body user-row">
                                <div className="transaction form mb-3">
                                    <InputComponent
                                        inputType={"text"}
                                        inputClass={"transfer-names form-control"}
                                        inputID={"floatingTransferTo"}
                                        placeholderTitle={"Account No."}
                                        handleOnChange={setTransferTo}
                                        inputValue={transferTo}
                                    />
                                </div>
                            </div>
                            <p>Amount</p>
                            <div className="transaction-body user-row">
                                <div className="transaction form-floating mb-3">                                                                
                                    <InputComponent 
                                        inputType={"number"}
                                        inputClass={"form-control"}
                                        inputID={"floatingTransfer"}
                                        placeholderTitle={"Transfer"}
                                        inputValue={amountToTransfer}
                                        handleOnChange={setAmountToTransfer}                                        
                                        isLabel={true}
                                        label={`Amount to Transfer`}
                                    />                                    
                                </div>
                                
                                <ButtonComponent
                                    btnClass={"btn btn-primary"}
                                    handleFunction={() => handleTransfer()}
                                    btnDescription={"Transfer"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <ButtonComponent
                            btnClass={"btn btn-secondary"}
                            dbsDismiss={"modal"}
                            btnDescription={"Close"}
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForDetailsComponent
