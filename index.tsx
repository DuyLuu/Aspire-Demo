
import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import { configReduxStore } from './src/reducers'
import App from './src/components/App'
import rootSaga from './src/actions/saga'

const { persistor, store, sagaMiddleware } = configReduxStore()

const Root = (): JSX.Element => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    )
}

sagaMiddleware.run(rootSaga)

AppRegistry.registerComponent('AspireDemo', () => Root)
