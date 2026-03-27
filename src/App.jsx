import { Routes, Route, Link } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import JavascriptProject from './pages/formationProjects/JavascriptProject'
import ReactProject from './pages/formationProjects/ReactProject'
import NodejsProject from './pages/formationProjects/NodejsProject'
import SnakePage from './pages/personalProjects/SnakePage'
import CalculatricePage from './pages/personalProjects/CalculatricePage'
import Error from './components/Error'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import TodolistPage from './pages/personalProjects/TodolistPage'

function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/projet_javascript' element={<JavascriptProject />} />
        <Route path='/projet_react' element={<ReactProject />} />
        <Route path='/projet_nodejs' element={<NodejsProject />} />
        <Route path='/projet_snake' element={<SnakePage />} />
        <Route path='/projet_calculatrice' element={<CalculatricePage />} />
        <Route path='/projet_todolist' element={<TodolistPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
