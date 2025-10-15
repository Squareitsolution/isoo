
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsAndConditions from './components/pages/TermsAndConditions'
import ThankYou from './components/pages/Thankyou'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import ProtectedRoute from './components/pages/protectedRoutes'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy  />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions  />} />
        <Route path="/thanks" element={<ThankYou  />} />
        <Route path="/login" element={<Login  />} />
        <Route path='/dashboard' >

        <Route path="/dashboard" element={<ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>} />
        </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
