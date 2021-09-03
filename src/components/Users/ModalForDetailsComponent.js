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
            <div className="modal fade" id="detailsModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">User Information</h5>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
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
                                {/* <input type="text" className="read-only-user-detail form-control" id="floatingUserNameDetails" placeholder="User Name" readOnly value={currentSelectedData.username}/>
                                <label>User Name</label> */}
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
                                {/* <input type="text" className="read-only-user-detail form-control" id="floatingFirstNameDetails" placeholder="First Name" readOnly value={currentSelectedData.first_name}/>
                                <label>First Name</label> */}
                                <InputComponent
                                 inputType={"text"}
                                 inputClass={"read-only-user-detail form-control"}
                                 placeholderTitle={"User Name"}
                                 inputID={"floatingFirstNameDetails"}
                                 isReadOnly={true}
                                 inputValue={currentSelectedData.username}
                                 label={"User Name"}
                                 />
                            </div>
                            <div className="form-floating mb-3">
                                {/* <input type="text" className="read-only-user-detail form-control" id="floatingLastNameDetails" placeholder="Last Name" readOnly value={currentSelectedData.last_name}/>
                                <label>Last Name</label> */}
                                <InputComponent
                                 inputType={"text"}
                                 inputClass={"read-only-user-detail form-control"}
                                 placeholderTitle={"Last Name"}
                                 inputID={"floatingLastNameDetails"}
                                 isReadOnly={true}
                                 inputValue={currentSelectedData.last_name}
                                 label={"User Name"}
                                 />
                            </div>
                        </div>
                        <div className="user-row">
                            <div className="form-floating mb-3">
                                {/* <input type="text" className="read-only-user-detail form-control" id="floatingAddressDetails" placeholder="Address" readOnly value={currentSelectedData.address}/>
                                <label>Address</label> */}
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
                                {/* <input type="number" className="read-only-user-detail form-control" id="floatingActiveNoDetails" placeholder="Active Mobile No." readOnly value={currentSelectedData.mobile_no}/>
                                <label>Active Mobile No.</label> */}
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
                                {/* <input type="email" className="read-only-user-detail form-control" id="floatingEmailDetails" placeholder="Email Address" readOnly value={currentSelectedData.email}/>
                                <label>Email Address</label> */}
                                <InputComponent
                                inputType={"email"}
                                inputClass={"read-only-user-detail form-control"}
                                placeholderTitle={"Active Mobile No."}
                                inputID={"floatingEmailDetails"}
                                isReadOnly={true}
                                inputValue={currentSelectedData.mobile_no}
                                label={"Active Mobile No."}
                                />
                            </div>
                            <div className="form-floating mb-3">
                                {/* <input type="text" className="read-only-user-detail form-control" id="floatingBalanceDetails" placeholder="Balance" readOnly value={convertToMoney(currentSelectedData.balance)}/>
                                <label>Balance</label> */}
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
                                    {/* <input type="number" className="form-control" id="floatingWithdraw" placeholder="Withdraw" onChange={(e) => setAmountToWithdraw(e.target.value)} value={amountToWithdraw}/>
                                    <label>₱ Amount to Withdraw</label> */}
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
                                {/* <button type="button" className="btn btn-primary" onClick={handleWithdraw}>Withdraw</button> */}
                                <ButtonComponent
                                    btnClass={"btn btn-primary"}                                   
                                    onClick={handleWithdraw}
                                    btnDescription={"Withdraw"}
                                />
                            </div>
                            <div className="transaction-body user-row">
                                <div className="transaction form-floating mb-3">
                                    {/* <input type="number" className="form-control" id="floatingDeposit" placeholder="Deposit" onChange={(e) => setAmountToDeposit(e.target.value)} value={amountToDeposit}/>
                                    <label>₱ Amount to Deposit</label> */}
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
                                {/* <button type="button" className="btn btn-primary" onClick={handleDeposit}>Deposit</button> */}
                                <ButtonComponent
                                    btnClass={"btn btn-primary"}
                                    onClick={handleDeposit}
                                    btnDescription={"Deposit"}
                                />
                            </div>
                            <h6 className="modal-title" >Transfer Funds</h6>
                            <p>To</p>
                            <div className="transaction-body user-row">
                                <div className="transaction form mb-3">
                                    {/* <input type="text" className="transfer-names form-control" id="floatingTransferTo" placeholder="Account No." onChange={(e) => setTransferTo(e.target.value)} value={transferTo} /> */}
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
                                    {/* <input type="number" className="form-control" id="floatingTransfer" placeholder="Transfer" onChange={(e) => setAmountToTransfer(e.target.value)} value={amountToTransfer}/> */}                                    
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
                                {/* <button type="button" className="btn btn-primary" onClick={handleTransfer}>Transfer</button> */}
                                <ButtonComponent
                                    btnClass={"btn btn-primary"}
                                    onClick={handleTransfer}
                                    btnDescription={"Transfer"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
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
