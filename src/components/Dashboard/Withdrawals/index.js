import './style.css';
import useHooks from './hooks';
import useLocalStorage from '../../Users/useLocalStorage';

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
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Index
