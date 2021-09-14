import './style.css';
import useLocalStorage from '../../Users/useLocalStorage';
import {convertToMoney} from '../../lib/helpers'

const Index = (props) => {

    const {loginAccount, isUser} = props;

    const [depositHistories, setDepositHistories] = useLocalStorage('depositHistories', [])

    const filteredHistory = depositHistories.filter((user) => {return user.account_no === loginAccount[0].account_no})

    return (
        <>
        <div className="transaction-header">
            <h1>Transaction History</h1>
            <h3>Deposits</h3>
            </div>
        <div className="dashboard-container">            
            <table className="table">
                <thead className="table-dark table-header">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Account No.</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Deposit Amount</th>
                        <th scope="col">Current Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {!isUser ? 
                    depositHistories.map((user, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{user.account_no}</td>
                                <td>{user.first_name + " " + user.last_name}</td>
                                <td>{user.currentDatenTime}</td>
                                <td>{convertToMoney(user.latestDepositAmount)}</td>
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
                                <td>{convertToMoney(user.latestDepositAmount)}</td>
                                <td>{convertToMoney(user.balance)}</td>
                            </tr>
                        )
                    })
                }
                   
                </tbody>
            </table>
        </div>
    </>
    )
}

export default Index
