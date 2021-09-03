import './style.css';
import useHooks from './hooks';
import useLocalStorage from '../../Users/useLocalStorage';
import {convertToMoney} from '../../lib/helpers'

const Index = () => {

    const [users, setUsers] = useLocalStorage('usersData', [])

    const {
        withdrawHistory,
        setWithdrawHistory,
    } = useHooks();

    console.log({users})

    return (
        <div className="dashboard-container">
            <h1>Transaction History</h1>

            <h3>Withdrawals</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Account No.</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Withdrawn Amount</th>
                        <th scope="col">Current Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{user.account_no}</td>
                                <td>Mark Otto</td>
                                <td>09-02-2021 18:05</td>
                                <td>{convertToMoney(500)}</td>
                                <td>{convertToMoney(user.balance)}</td>
                            </tr>
                        )
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}

export default Index
