const initialState = {
    spendingLimit: ''
}

export default (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case 'SET_SPENDING_LIMIT':
            const spendingLimit = payload
            return {
                ...state,
                spendingLimit,
            }
        default:
            return state
    }
}
