import React from 'react'

export default function Contact() {
  return (
    <div className="items-center h-screen bg-cover bg-center p-10" style={{backgroundImage:"url(art.jpg)", }}>
    <section className="contact-form border w-[400px] mx-auto  p-9 mt-5 mr-[59%]  bg-white shadow-md rounded-md" >
      <h2 className="text-4xl font-bold mb-6 text-cover">Contact us</h2>
      <form >
        <input type="text" placeholder="Full Name" className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md" required />
        <input type="email" placeholder=" Emial Address" className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md " required />
        <input type="text" placeholder="Phone Number" className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md " required />
        <textarea placeholder="Message" className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md " rows={5} required></textarea>
        <button type="submit" className="w-full bg-blue-400 hover:bg-blue-700 text-white py-2 rounded-md">Send Message</button>

      </form>
    </section>
    
  </div>
  )
}
