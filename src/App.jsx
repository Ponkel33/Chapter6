import { Header } from './Pages/Header'
import { Home } from './Pages/Home'
import { Contact } from './Pages/Contact'
import { Posts } from './Pages/Posts'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
