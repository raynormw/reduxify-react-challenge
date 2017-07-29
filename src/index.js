import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './component/App'
import registerServiceWorker from './registerServiceWorker'
import Store from './stores/index'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
