import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MainRoutes } from './routes'

const App = () => {
  return (
    <Router>
      <Suspense fallback={<></>}>
        <MainRoutes />
      </Suspense>
    </Router>
  )
}

export default App
