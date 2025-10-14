
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsAndConditions from './components/pages/TermsAndConditions'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy  />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions  />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
