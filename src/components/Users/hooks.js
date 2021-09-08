import { useState, useContext } from 'react'
import {AppContext} from '../Global/AppContext'
import useLocalStorage from './useLocalStorage'
import {convertToMoney} from '../lib/helpers'

const useHooks = () => {
    const {withdrawalHistories,
        depositHistories,
        transfersHistories,
        setWithdrawalHistories,
        setDepositHistories,
        setTransfersHistories} = useContext(AppContext)

    const [currentSelectedData, setCurrentSelectedData] = useState({});
    const [users, setUsers] = useLocalStorage('usersData', [])
    const [accountNo, setAccountNo] = useState('')
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [balance, setBalance] = useState('');
    const [amountToWithdraw, setAmountToWithdraw] = useState('')
    const [amountToDeposit, setAmountToDeposit] = useState('')
    const [transferTo, setTransferTo] = useState('')
    const [transferMessage, setTransferMessage] = useState({})
    const [amountToTransfer, setAmountToTransfer] = useState('')
    const [modalShow, setModalShow] = useState(false);
    const [modalDetailsAlert, setModalDetailsAlert] = useState({
        insufficientBalance: false,
        successful: false,
        enterAnAmountToWithdraw: false,
        successfulDeposit: false,
        enterAnAmountToDeposit: false,
        insufficientBalanceTransfer: false,
        successfulTransfer: false,
        enterAnAmountToTransfer: false,
        sameAccountNumber: false,
        accountNumberNotValidTransfer: false,
        accountNumberCannotBeBlank: false,
    });
    const [errorState, setErrorState] = useState({
        username: false,
        password: false,
        retypePassword: false,
        firstName: false,
        lastName: false,
        address: false,
        mobileNo: false,
        email: false
    })
    

    const handleGenerateAccountNo = () => {
        let date = new Date();
        let minutes = '0' + date.getMinutes().toString().substr(-2)
        let hours = '0' + date.getHours().toString().substr(-2)
        let month = '0' + (date.getMonth() + 1).toString().substr(-2)
        let year = date.getFullYear().toString().substr(-2)
        setAccountNo(year + month + hours + minutes + Math.floor(10 + Math.random() * 90))
        setModalShow(true)
    }

    const closeModalComponent = () => {
        setModalShow(false)
        setErrorState({
            username: false,
            password: false,
            retypePassword: false,
            firstName: false,
            lastName: false,
            address: false,
            mobileNo: false,
            email: false
        })
    }

    const validation = (newUser) => {
        if(users.find((user) => {return user.username === userName})) {
            alert('Username already exists.')
       }
       else if (password !== retypePassword) {
            alert('Password do not match.')
       } 
       else if (!userName) {
            setErrorState({username: true})
       }
       else if (!password) {
        setErrorState({password: true})
       }
       else if (!retypePassword) {
        setErrorState({retypePassword: true})
       }
       else if (!firstName) {
        setErrorState({firstName: true})
       }
       else if (!lastName) {
        setErrorState({lastName: true})
       }
       else if (!address) {
        setErrorState({address: true})
       }
       else if (!mobileNo) {
        setErrorState({ mobileNo: true})
       }
       else if (!email) {
        setErrorState({email: true})
       }
        else if (userName) {
            setErrorState({username: false})
                if (password) {
                    setErrorState({password: false})
                    if (retypePassword) {
                        setErrorState({retypePassword: false})
                        if (firstName) {
                            setErrorState({firstName: false})
                            if(isNaN(firstName.substring(0, 1))) {
                                if (lastName) {
                                    setErrorState({lastName: false})
                                    if(isNaN(lastName.substring(0, 1))){
                                        if (address) {
                                            setErrorState({address: false})
                                            if (mobileNo) {
                                                setErrorState({mobileNo: false})
                                                if (email) {
                                                    setErrorState({email: false})

                                                    setUsers([...users, newUser])
                                                    setAccountNo('')
                                                    setUserName('')
                                                    setPassword('')
                                                    setRetypePassword('')
                                                    setFirstName('')
                                                    setLastName('')
                                                    setAddress('')
                                                    setMobileNo('')
                                                    setEmail('')
                                                    setBalance(0)
                                                    setAmountToWithdraw(0)
                                                    setAmountToTransfer(0)
                                                    setAmountToDeposit(0)
                                                    setTransferTo('')
                                                    setModalShow(false)
                                                    alert('Account created')
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        alert(`Last name cannot start with a number`)
                                    }
                                }
                            }
                            else {
                                alert(`First name cannot start with a number`)
                            }
                        }
                    }
                }
        } 
    }
    

    const handleSaveUsers = (e) => {
        e.preventDefault();
        try {
            let enPassword = Buffer.from(password).toString('base64');
            let lowerCasedUserName= userName.toLowerCase()
            const newUser = {
                account_no: accountNo,
                username: lowerCasedUserName, 
                password: enPassword,
                first_name: firstName,
                last_name: lastName,
                address: address,
                mobile_no: mobileNo,
                email: email,
                balance: balance,
                latestWithdrawnAmount: amountToWithdraw,
                latestDepositAmount: amountToDeposit,
                latestTransferAmount: amountToTransfer,
                latestTransferTo: transferTo,
            }
            validation(newUser);
       
        } catch(e) {
            console.log(`Error in handleSaveUsers`, e)
        }
    }

    const handleDeleteUser = (id) => {
        const index = users.findIndex(user => {return user.account_no === id})
        users.splice(index, 1)
        setUsers([...users])
    }

    const handleHistories = (action) => {
        const newHistory = {
            account_no: currentSelectedData.account_no,
            username: currentSelectedData.username, 
            first_name: currentSelectedData.first_name,
            last_name: currentSelectedData.last_name,
            address: currentSelectedData.address,
            mobile_no: currentSelectedData.mobile_no,
            email: currentSelectedData.email,
            balance: currentSelectedData.balance,
            latestWithdrawnAmount: currentSelectedData.latestWithdrawnAmount,
            latestDepositAmount: currentSelectedData.latestDepositAmount,
            latestTransferAmount: currentSelectedData.latestTransferAmount,
            latestTransferTo: currentSelectedData.latestTransferTo,
            currentDatenTime: new Date().toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})
        }
        if(action === 'withdraw') {
            setWithdrawalHistories([...withdrawalHistories, newHistory])
        }
        else if (action === 'deposit') {
            setDepositHistories([...depositHistories, newHistory])
        } else if (action === 'transfer') {
            setTransfersHistories([...transfersHistories, newHistory])
        }
    }


    const handleWithdraw = () => {
        if(amountToWithdraw > 0) {
            if(amountToWithdraw < currentSelectedData.balance) {
                let currentBalance = currentSelectedData.balance - amountToWithdraw;
                setUsers([...users], currentSelectedData.balance = currentBalance, currentSelectedData.latestWithdrawnAmount = amountToWithdraw)
                handleHistories('withdraw');
                setModalDetailsAlert({insufficientBalance: false})
                setModalDetailsAlert({successful: true})
                setAmountToWithdraw('')
            } else {
                setModalDetailsAlert({insufficientBalance: true})
            }
        } else {
            
            setModalDetailsAlert({enterAnAmountToWithdraw: true})
        }
    }

    const handleDeposit = () => {
        if(amountToDeposit > 0) {
            let currentBalance = (+currentSelectedData.balance) + (+amountToDeposit);
            setUsers([...users], currentSelectedData.balance = currentBalance, currentSelectedData.latestDepositAmount = amountToDeposit)
            handleHistories('deposit');
            setAmountToDeposit('')
            setModalDetailsAlert({successfulDeposit: true})
        } else {
            setModalDetailsAlert({enterAnAmountToDeposit: true})
        }
    }

    

    const handleTransfer = () => {
        if(transferTo){
            const toUser = users.find(user => {return user.account_no === transferTo})                    
            if(toUser) {
                if(toUser.account_no !== currentSelectedData.account_no) {
                    if(amountToTransfer > 0) {
                        if(amountToTransfer <= currentSelectedData.balance) {
                            let currentBalance = (+currentSelectedData.balance) - (+amountToTransfer)
                            let toUserCurrentBalance = (+toUser.balance) + (+amountToTransfer);
                            setUsers([...users], 
                                currentSelectedData.balance = currentBalance, 
                                currentSelectedData.latestTransferAmount = amountToTransfer, 
                                currentSelectedData.latestTransferTo = transferTo,
                                toUser.balance = toUserCurrentBalance)
                            handleHistories('transfer');
                            setTransferMessage({transferAmount: amountToTransfer, accountNo: transferTo, firstName: toUser.first_name, lastName: toUser.last_name})                            
                            setTransferTo('')
                            setAmountToTransfer('')
                            setModalDetailsAlert({successfulTransfer: true})
                        } else {
                            setModalDetailsAlert({insufficientBalanceTransfer: true})
                        }
                    } else {
                        setModalDetailsAlert({amountToTransfer: true})
                    }
                } else {
                    setModalDetailsAlert({sameAccountNumber: true})
                }
            } else {
                setModalDetailsAlert({accountNumberNotValidTransfer: true})
            }
        } else {
            setModalDetailsAlert({accountNumberCannotBeBlank: true})
        }
    }

    const resetTransaction = () => {
        setAmountToWithdraw('')
        setAmountToDeposit('')
        setAmountToTransfer('')
        setTransferTo('')
        setTransferMessage({})
        setModalDetailsAlert({
            insufficientBalance: false,
            successful: false,
            enterAnAmountToWithdraw: false,
            successfulDeposit: false,
            enterAnAmountToDeposit: false,
            insufficientBalanceTransfer: false,
            successfulTransfer: false,
            enterAnAmountToTransfer: false,
            sameAccountNumber: false,
            accountNumberNotValidTransfer: false,
            accountNumberCannotBeBlank: false,
        });
    }

    return {
        currentSelectedData,
        setCurrentSelectedData, 
        users, 
        setUsers, 
        accountNo, 
        setAccountNo, 
        userName, 
        setUserName, 
        password, 
        setPassword, 
        retypePassword, 
        setRetypePassword, 
        firstName, 
        setFirstName, 
        lastName, 
        setLastName, 
        address, 
        setAddress, 
        mobileNo, 
        setMobileNo, 
        email, 
        setEmail, 
        balance, 
        setBalance, 
        amountToWithdraw, 
        setAmountToWithdraw, 
        amountToDeposit, 
        setAmountToDeposit, 
        transferTo, 
        setTransferTo,
        transferMessage,
        amountToTransfer, 
        setAmountToTransfer,
        handleGenerateAccountNo,
        handleSaveUsers,
        handleDeleteUser,
        handleWithdraw,
        handleDeposit,
        handleTransfer,
        errorState,
        setErrorState,
        convertToMoney,
        modalDetailsAlert,
        resetTransaction,
        setModalShow,
        modalShow,
        closeModalComponent
    }
}

export default useHooks
