import { Routes, Route, Link } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import JavascriptProject from './pages/JavascriptProject'
import ReactProject from './pages/ReactProject'
import NodejsProject from './pages/NodejsProject'
import Error from './components/Error'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

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
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
