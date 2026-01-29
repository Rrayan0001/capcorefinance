"use client"

import type React from "react"

import { useState } from "react"
import { X, Phone, MessageCircle, CheckCircle } from "lucide-react"

interface ResourceDownloadModalProps {
  isOpen: boolean
  onClose: () => void
  resourceTitle: string
  resourceUrl: string
}

export default function ResourceDownloadModal({
  isOpen,
  onClose,
  resourceTitle,
}: ResourceDownloadModalProps) {
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phone || phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number")
      return
    }

    // Show success message
    setSubmitted(true)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi, I would like to receive the document: ${resourceTitle}. My phone number is: ${phone}`)
    window.open(`https://wa.me/919975985314?text=${message}`, '_blank')
    onClose()
  }

  const handleCall = () => {
    window.open('tel:+919975985314', '_self')
  }

  const handleClose = () => {
    setPhone("")
    setSubmitted(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="font-semibold text-lg text-gray-900">Get Document</h3>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-900 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Request Received!</h4>
              <p className="text-gray-600 mb-6">
                We'll send <strong>{resourceTitle}</strong> to your WhatsApp/phone shortly.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 px-4 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </button>
                <button
                  onClick={handleCall}
                  className="flex-1 px-4 py-3 bg-accent text-black rounded-xl font-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call Now
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-gray-600 mb-4">
                Enter your mobile number to receive <strong className="text-gray-900">{resourceTitle}</strong> directly on WhatsApp
              </p>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900 flex items-center gap-2">
                  <Phone size={16} />
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                />
              </div>

              <button
                type="submit"
                disabled={phone.length !== 10}
                className="w-full px-4 py-3 bg-accent text-black rounded-xl font-semibold hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Request Document
              </button>

              <p className="text-xs text-gray-500 text-center">
                Our team will send you the document within 24 hours
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
