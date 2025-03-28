
'use client'

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form
      action="https://formspree.io/f/manedoop"
      method="POST"
      className="max-w-md mx-auto p-4 space-y-4 bg-black text-white"
    >
      <div>
        <label htmlFor="name" className="block mb-1">Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-900 border border-gray-700"
          placeholder="Il tuo nome"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-900 border border-gray-700"
          placeholder="La tua email"
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-1">Oggetto</label>
        <input
          id="subject"
          name="subject"
          type="text"
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-900 border border-gray-700"
          placeholder="Oggetto del tuo messaggio"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1">Messaggio</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-900 border border-gray-700"
          rows={5}
          placeholder="Il tuo messaggio"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-white text-black font-semibold rounded hover:bg-gray-300"
      >
        Invia Messaggio
      </button>
    </form>
  )
}
