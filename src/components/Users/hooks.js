import { useContext } from 'react'
import {AppContext} from '../Global/AppContext'

const useHooks = () => {
    const {withdrawalHistories,
        depositHistories,
        transfersHistories,
        setWithdrawalHistories,
        setDepositHistories,
        setTransfersHistories} = useContext(AppContext)
    return {
        withdrawalHistories,
        depositHistories,
        transfersHistories,
        setWithdrawalHistories,
        setDepositHistories,
        setTransfersHistories
    }
}

export default useHooks
