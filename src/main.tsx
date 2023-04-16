import React from 'react'
import ReactDOM from 'react-dom/client'
import MovieSearch from './views/MovieSearch'

import { store } from './app/store'
import { Provider } from 'react-redux'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MovieSearch />
    </Provider>
  </React.StrictMode>,
)
