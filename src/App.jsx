import { Routes , Route } from 'react-router-dom'
import './App.css'
import NewsList from './pages/news-list'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/news" element={<NewsList />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default App
