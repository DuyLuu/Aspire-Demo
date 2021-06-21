
const initialState = {
    spendingLimit: '',
    userInfo: undefined,
    isLoggedIn: false,
    loggedInUser: {}
}

export default (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
    case 'SET_SPENDING_LIMIT': {
        const spendingLimit = payload
        return {
            ...state,
            spendingLimit
        }
    }
    case 'GET_USER_INFO': {
        const [data] = payload
        return {
            ...state,
            userInfo: data
        }
    }
    case 'LOGGED_IN': {
        return {
            ...state,
            isLoggedIn: true,
            loggedInUser: action.payload
        }
    }
    case 'LOGGED_OUT': {
        return initialState
    }
    default:
        return state
    }
}
