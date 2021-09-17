import './style.css';
import {convertToMoney} from '../../lib/helpers'
import useHooks from './hooks';
import { ArrowSortedDownIcon, ArrowSortedUpIcon } from '../../Users/component';

const Index = ({loginAccount, isUser}) => {    
    
    const {withdrawalHistories,
        setWithdrawalHistories,
        isOrdered,
        sortByAccountNumber,        
        sortByDate,
        sortByFullName,
        sortByWithdrawAmount,
        sortByCurrentBalance} = useHooks()

    const filteredHistory = withdrawalHistories.filter((user) => {return user.account_no === loginAccount[0].account_no})

    return (
        <>
          <div className="transaction-header">
            <h1>Withdrawals History</h1>            
            </div>  
        <div className="dashboard-container">  
      
            <table className="table">
                <thead className="table-header">
                    <tr>
                        <th scope="col">#</th>
                        <th style={{cursor: "pointer"}} onClick={()=> !isUser && sortByAccountNumber()} scope="col">
                        Account No. {!isUser ? isOrdered.accountNumber ? <ArrowSortedDownIcon/> : <ArrowSortedUpIcon/> : null}
                        </th>
                        <th style={{cursor: "pointer"}} onClick={()=> !isUser && sortByFullName()} scope="col">
                        Full Name {!isUser ? isOrdered.fullName ? <ArrowSortedDownIcon/> : <ArrowSortedUpIcon/> : null}
                        </th>
                        <th style={{cursor: "pointer"}} onClick={()=>sortByDate()} scope="col">
                        Date {isOrdered.date ? <ArrowSortedDownIcon/> : <ArrowSortedUpIcon/>}
                        </th>
                        <th style={{cursor: "pointer"}} onClick={()=>sortByWithdrawAmount()} scope="col">
                        Withdrawn Amount {isOrdered.withdrawnAmount ? <ArrowSortedDownIcon/> : <ArrowSortedUpIcon/>}
                        </th>
                        <th style={{cursor: "pointer"}} onClick={()=>sortByCurrentBalance()} scope="col">
                        Current Balance {isOrdered.currentBalance ? <ArrowSortedDownIcon/> : <ArrowSortedUpIcon/>}
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                    {!isUser ? 
                    withdrawalHistories.map((user, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{user.account_no}</td>
                                <td>{user.first_name + " " + user.last_name}</td>
                                <td>{user.currentDatenTime}</td>
                                <td>{convertToMoney(user.latestWithdrawnAmount)}</td>
                                <td>{convertToMoney(user.balance)}</td>
                            </tr>
                        )
                    })
                    :
                    filteredHistory.map((user, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{user.account_no}</td>
                                <td>{user.first_name + " " + user.last_name}</td>
                                <td>{user.currentDatenTime}</td>
                                <td>{convertToMoney(user.latestWithdrawnAmount)}</td>
                                <td>{convertToMoney(user.balance)}</td>
                            </tr>
                        )
                    })}
                   
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Index
