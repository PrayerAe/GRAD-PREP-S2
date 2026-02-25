import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { isLoggedIn, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-800 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 text-sm">Memuat...</p>
        </div>
      </div>
    )
  }

  if (!isLoggedIn) return <Navigate to="/login" replace />
  return children
}
