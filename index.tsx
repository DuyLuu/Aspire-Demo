
import React from 'react'

import { registerRootComponent } from 'expo'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import { configReduxStore } from './src/reducers'
import App from './src/components/App'
import rootSaga from './src/reducers/saga'

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

registerRootComponent(Root)
