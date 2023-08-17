import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routers from '@/routers'
import AppLayout from '@/layouts'

function App(): JSX.Element {
  return (
    <Router>
      <AppLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routers.map((item) => (
              <Route path={item.path} key={item.path} element={<item.component />} />
            ))}
          </Routes>
        </Suspense>
      </AppLayout>
    </Router>
  )
}

export default App
