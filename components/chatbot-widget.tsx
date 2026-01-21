"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Phone, Mail, MapPin } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  isContactInfo?: boolean
}

const contactInfoMessage = {
  phone: "+91-XXXXXXXXXX",
  email: "info@capitalcorefinance.com",
  address: "Singanayakanahalli, Bengaluru, Karnataka 560064",
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! Welcome to Capital Core Finance. How can we help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [hasReceivedFirstMessage, setHasReceivedFirstMessage] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Bot response with contact info after first message
    setTimeout(() => {
      if (!hasReceivedFirstMessage) {
        // First response includes contact details
        const contactMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thank you for reaching out! Here are our contact details for immediate assistance:",
          sender: "bot",
          timestamp: new Date(),
          isContactInfo: true,
        }
        setMessages((prev) => [...prev, contactMessage])
        setHasReceivedFirstMessage(true)
      } else {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Our team will get back to you shortly. Would you like to book a free consultation or learn more about our loan services?",
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      }
    }, 600)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-4 md:right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 z-50"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-20 right-4 left-4 md:left-auto md:bottom-24 md:right-6 w-auto md:w-[360px] max-h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-5 py-4">
              <h3 className="font-semibold text-lg">Chat with us</h3>
              <p className="text-xs opacity-80">We typically reply within minutes</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[300px] bg-secondary/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl ${message.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-card border border-border text-foreground rounded-bl-sm"
                      }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>

                    {/* Contact info card */}
                    {message.isContactInfo && (
                      <div className="mt-3 space-y-2 pt-3 border-t border-border/50">
                        <a
                          href={`tel:${contactInfoMessage.phone}`}
                          className="flex items-center gap-2 text-sm text-accent hover:underline"
                        >
                          <Phone size={14} />
                          {contactInfoMessage.phone}
                        </a>
                        <a
                          href={`mailto:${contactInfoMessage.email}`}
                          className="flex items-center gap-2 text-sm text-accent hover:underline"
                        >
                          <Mail size={14} />
                          {contactInfoMessage.email}
                        </a>
                        <div className="flex items-start gap-2 text-sm text-muted-foreground">
                          <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                          <span>{contactInfoMessage.address}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-4 flex gap-3 bg-card">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-secondary border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <motion.button
                onClick={handleSendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity"
                aria-label="Send message"
              >
                <Send size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
