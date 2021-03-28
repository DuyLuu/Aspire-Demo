function updateSpendingLimit(payload: string) {
    return {
        payload,
        type: 'SET_SPENDING_LIMIT',
    }
}

export default {
    updateSpendingLimit,
}