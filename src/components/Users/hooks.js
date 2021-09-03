import { useContext } from 'react'
import {AppContext} from '../Global/AppContext'

const useHooks = () => {
    const {withdrawHistories, setWithdrawHistories} = useContext(AppContext)
    return {
        withdrawHistories,
        setWithdrawHistories,
    }
}

export default useHooks
