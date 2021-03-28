import { Dispatch } from 'redux'
import ApiService from '../api/apiService'

function updateSpendingLimit(payload: string) {
    return {
        payload,
        type: 'SET_SPENDING_LIMIT',
    }
}

async function _getUserInfo() {
    const url = 'https://605d90d79386d200171bac91.mockapi.io/api/duyluu/users'
    const response = await ApiService.handleFetch(url, { method: 'GET' })
    if (response?.length) {
        return {
            payload: response,
            type: 'GET_USER_INFO',
        }
    }
    throw new Error('Error')
}

function getUserInfo(request: PinCheckInRequest) {
    return (dispatch: Dispatch) => {
        return _getUserInfo().then(dispatch)
    }
}

export default {
    updateSpendingLimit,
    getUserInfo,
}