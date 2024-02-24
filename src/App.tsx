import './App.css'
import Bannar from './components/Bannar'
import Heading from './components/common/Heading'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

function App() {
  return (
    <>
      <div>
        <MainLayout />
        <div>
          <Bannar />
        </div>
        <Home />
      </div>
    </>
  )
}

export default App
