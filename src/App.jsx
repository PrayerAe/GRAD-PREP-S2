import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/AdminRoute'
import PageTracker from './components/PageTracker'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Matematika from './pages/Matematika'
import English from './pages/English'
import TOEFL from './pages/TOEFL'
import IELTS from './pages/IELTS'
import Vocabulary from './pages/Vocabulary'
import ML from './pages/ML'
import Latihan from './pages/Latihan'
import Tryout from './pages/Tryout'
import Profile from './pages/Profile'
import Admin from './pages/Admin'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <PageTracker />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/materi/matematika" element={<ProtectedRoute><Matematika /></ProtectedRoute>} />
          <Route path="/materi/english" element={<ProtectedRoute><English /></ProtectedRoute>} />
          <Route path="/materi/toefl" element={<ProtectedRoute><TOEFL /></ProtectedRoute>} />
          <Route path="/materi/ielts" element={<ProtectedRoute><IELTS /></ProtectedRoute>} />
          <Route path="/vocabulary" element={<ProtectedRoute><Vocabulary /></ProtectedRoute>} />
          <Route path="/materi/ml" element={<ProtectedRoute><ML /></ProtectedRoute>} />
          <Route path="/latihan/:subject" element={<ProtectedRoute><Latihan /></ProtectedRoute>} />
          <Route path="/tryout" element={<ProtectedRoute><Tryout /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
