import './App.scss'
import { Routes, Route, Link } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import JavascriptProject from './pages/JavascriptProject'
import ReactProject from './pages/ReactProject'
import NodejsProject from './pages/NodejsProject'
import ScrollToTop from './components/ScrollToTop'
import Error from './components/Error'

function App() {

  return (
    <>
      <ScrollToTop />
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
