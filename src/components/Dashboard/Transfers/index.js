import './style.css';
import useLocalStorage from '../../Users/useLocalStorage';
import {convertToMoney} from '../../lib/helpers'

const Index = () => {

 
    const [transfersHistories, setTransfersHistories] = useLocalStorage('transfersHistories', [])

    return (
        <div className="dashboard-container">
            <h1>Transaction History</h1>

            <h3>Transfers</h3>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Account No.</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">To</th>
                        <th scope="col">Transferred Amount</th>
                        <th scope="col">Current Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {transfersHistories.map((user, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{user.account_no}</td>
                                <td>{user.first_name + " " + user.last_name}</td>
                                <td>{user.currentDatenTime}</td>
                                <td>{user.latestTransferTo}</td>
                                <td>{convertToMoney(user.latestTransferAmount)}</td>
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
