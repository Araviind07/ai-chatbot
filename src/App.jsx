import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/Main'
import ErrorBoundary from './Errorboundary'

const App = () => {
  return (
    <ErrorBoundary>
      <Sidebar />
      <Main />
    </ErrorBoundary>
  )
}

export default App
