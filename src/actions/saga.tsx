import { all, takeEvery, put, call } from 'redux-saga/effects'
import ApiService from '../api/apiService'

function * getUser () {
    try {
        const url = 'https://605d90d79386d200171bac91.mockapi.io/api/duyluu/users'
        const response = yield call(ApiService.handleFetch, url)
        yield put({
            payload: response,
            type: 'GET_USER_INFO'
        })
    } catch (error) {
        throw new Error(error)
    }
}

function * userSaga () {
    yield takeEvery('GET_USER_REQUEST', getUser)
}

export default function * rootSaga () {
    yield all([
        userSaga()
    ])
}
