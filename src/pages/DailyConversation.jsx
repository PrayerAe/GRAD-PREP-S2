import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { conversations } from '../data/conversationData'
import { conversationsPart2 } from '../data/conversationData_p2'
import { conversationsPart3 } from '../data/conversationData_p3'
import { conversationsPart4 } from '../data/conversationData_p4'
import { conversationsPart5 } from '../data/conversationData_p5'
import { conversationsPart6 } from '../data/conversationData_p6'
import { conversationsPart7 } from '../data/conversationData_p7'
import { conversationsPart8 } from '../data/conversationData_p8'
import { conversationsPart9 } from '../data/conversationData_p9'
import { conversationsPart10 } from '../data/conversationData_p10'
import {
  Menu, MessageCircle, ChevronLeft, ChevronRight, Coffee, Plane, UtensilsCrossed,
  GraduationCap, Briefcase, Stethoscope, ShoppingBag, Star, BookOpen, ArrowRight,
  Phone, Hotel, MapPin, Landmark, Dumbbell, Library, ShoppingCart, Film, Home
} from 'lucide-react'

const allConversations = [...conversations, ...conversationsPart2, ...conversationsPart3, ...conversationsPart4, ...conversationsPart5, ...conversationsPart6, ...conversationsPart7, ...conversationsPart8, ...conversationsPart9, ...conversationsPart10]

const categoryIcons = {
  'Daily Life': Coffee,
  'Travel': Plane,
  'Academic': GraduationCap,
  'Professional': Briefcase,
  'Health': Stethoscope,
  'Entertainment': Film,
}

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-700',
  'Intermediate': 'bg-amber-100 text-amber-700',
  'Advanced': 'bg-red-100 text-red-700',
}

const colorMap = {
  amber: { gradient: 'from-amber-500 to-orange-600', light: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', ring: 'ring-amber-400' },
  blue: { gradient: 'from-blue-500 to-indigo-600', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', ring: 'ring-blue-400' },
  rose: { gradient: 'from-rose-500 to-pink-600', light: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', ring: 'ring-rose-400' },
  emerald: { gradient: 'from-emerald-500 to-teal-600', light: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', ring: 'ring-emerald-400' },
  slate: { gradient: 'from-slate-600 to-gray-800', light: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', ring: 'ring-slate-400' },
  teal: { gradient: 'from-teal-500 to-cyan-600', light: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', ring: 'ring-teal-400' },
  pink: { gradient: 'from-pink-500 to-fuchsia-600', light: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', ring: 'ring-pink-400' },
}

export default function DailyConversation() {
  const [activeConv, setActiveConv] = useState(null) // null = overview, number = conversation index
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const navigate = useNavigate()

  const conv = activeConv !== null ? allConversations[activeConv] : null
  const cm = conv ? (colorMap[conv.color] || colorMap.blue) : null

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />

      <main className="flex-1 lg:ml-64">
        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200 px-4 py-3 flex items-center gap-3">
          <button onClick={() => setMobileSidebar(true)} className="lg:hidden p-2 rounded-xl hover:bg-gray-100">
            <Menu size={20} />
          </button>
          {activeConv !== null ? (
            <button onClick={() => setActiveConv(null)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900">
              <ChevronLeft size={16} /> Back to Overview
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-xl">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <h1 className="font-heading font-bold text-lg text-gray-900">Daily English Conversation</h1>
                <p className="text-xs text-gray-500">Belajar bahasa Inggris dari percakapan sehari-hari</p>
              </div>
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6">
          {activeConv === null ? (
            // ── Overview ──────────────────────────────────
            <div>
              {/* Hero */}
              <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl p-6 mb-8 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl">Daily Conversation Practice</h2>
                    <p className="text-sm text-white/80">88 skenario percakapan dengan ilustrasi, frasa kunci & latihan</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold">88</p>
                    <p className="text-xs text-white/70">Conversations</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold">600+</p>
                    <p className="text-xs text-white/70">Key Phrases</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold">200+</p>
                    <p className="text-xs text-white/70">Exercises</p>
                  </div>
                </div>
              </div>

              {/* How to use */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-sm text-indigo-800 mb-2 flex items-center gap-2">
                  <BookOpen size={16} /> Cara Belajar yang Efektif
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-indigo-700">
                  <p>1️⃣ <strong>Baca dialog</strong> — pahami situasi & konteks</p>
                  <p>2️⃣ <strong>Pelajari Key Phrases</strong> — hafalkan ungkapan penting</p>
                  <p>3️⃣ <strong>Perhatikan Cultural Notes</strong> — pahami budaya</p>
                  <p>4️⃣ <strong>Kerjakan Practice</strong> — tes pemahaman Anda</p>
                </div>
              </div>

              {/* Conversation Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allConversations.map((c, i) => {
                  const cm = colorMap[c.color] || colorMap.blue
                  const CatIcon = categoryIcons[c.category] || Star
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActiveConv(i)}
                      className={`text-left rounded-2xl border ${cm.border} ${cm.light} p-4 hover:shadow-lg transition-all hover:-translate-y-0.5 group`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={`bg-gradient-to-r ${cm.gradient} p-2.5 rounded-xl text-white`}>
                          <CatIcon size={20} />
                        </div>
                        <div className="flex gap-1.5">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${difficultyColors[c.difficulty]}`}>
                            {c.difficulty}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-gray-100 text-gray-600">
                            Day {c.day}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-base text-gray-900 mb-1">{c.title}</h3>
                      <p className="text-xs text-gray-500 mb-3">{c.category} — Percakapan lengkap + latihan</p>
                      <div className={`flex items-center gap-1 text-xs font-bold ${cm.text} group-hover:gap-2 transition-all`}>
                        Mulai Belajar <ArrowRight size={14} />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          ) : (
            // ── Conversation Detail ────────────────────────
            <div>
              {/* Header */}
              <div className={`bg-gradient-to-r ${cm.gradient} rounded-2xl p-5 mb-6 text-white`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full font-bold">Day {conv.day}</span>
                  <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full font-bold">{conv.category}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${difficultyColors[conv.difficulty]}`}>{conv.difficulty}</span>
                </div>
                <h2 className="font-heading font-bold text-2xl">{conv.title}</h2>
              </div>

              {/* Content */}
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                {conv.body}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={() => setActiveConv(Math.max(0, activeConv - 1))}
                  disabled={activeConv === 0}
                  className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} /> Previous
                </button>
                <span className="text-xs text-gray-400">{activeConv + 1} / {allConversations.length}</span>
                <button
                  onClick={() => setActiveConv(Math.min(allConversations.length - 1, activeConv + 1))}
                  disabled={activeConv === allConversations.length - 1}
                  className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
