function updateSpendingLimit (payload: string) {
    return {
        payload,
        type: 'SET_SPENDING_LIMIT'
    }
}

function getUserInfo () {
    return {
        type: 'GET_USER_REQUEST'
    }
}

export default {
    updateSpendingLimit,
    getUserInfo
}
