
import React from 'react'

import { registerRootComponent } from 'expo'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import { configReduxStore } from './src/reducers'
import App from './src/components/App'

const { persistor, store } = configReduxStore()

const Root = (): JSX.Element => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    )
}
registerRootComponent(Root)
