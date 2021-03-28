import { applyMiddleware, createStore, compose, Store, combineReducers } from 'redux'
import { persistStore, persistReducer, Persistor } from 'redux-persist'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage'

import user from './user'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

const combined = combineReducers({ user })

export default (): { persistor: Persistor; store: Store } => {
    const persistReducers = persistReducer<RootState>(persistConfig, combined)
    const store = createStore(persistReducers, applyMiddleware(thunk))
    const persistor = persistStore(store)
    return { persistor, store }
}

export type RootState = ReturnType<typeof combined>
