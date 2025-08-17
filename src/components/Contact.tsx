'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize hiring together? Whether you&apos;re an investor, advisor, 
            potential partner, or future team member, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="Your company or organization"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                  I&apos;m interested in *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white backdrop-blur-sm"
                >
                  <option value="general" className="bg-purple-900 text-white">General Inquiry</option>
                  <option value="investment" className="bg-purple-900 text-white">Investment Opportunity</option>
                  <option value="partnership" className="bg-purple-900 text-white">Partnership</option>
                  <option value="career" className="bg-purple-900 text-white">Career Opportunity</option>
                  <option value="product" className="bg-purple-900 text-white">Product Information</option>
                  <option value="media" className="bg-purple-900 text-white">Media/PR</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="Tell us more about your interest..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold text-base shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-300 leading-relaxed text-base mb-8">
                We&apos;re always excited to meet people who share our vision of making the world 
                more connected through AI-powered hiring solutions.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">Email Us</h4>
                  <p className="text-gray-300 text-base">connect@hirecentive.com</p>
                  <p className="text-gray-300 text-base">partnerships@hirecentive.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">Visit Us</h4>
                  <p className="text-gray-300 text-base">Mangalore, India</p>
                  <p className="text-gray-300 text-base">Gurugram, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">Social Media</h4>
                  <p className="text-gray-300 text-base">LinkedIn: @hirecentive</p>
                  <p className="text-gray-300 text-base">Twitter: @hirecentive_ai</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/10">
              <h4 className="font-semibold text-white mb-4 text-lg">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-purple-300 hover:bg-purple-900/20">
                  📋 Schedule a Demo
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-blue-300 hover:bg-blue-900/20">
                  💼 View Open Positions
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-green-300 hover:bg-green-900/20">
                  🤝 Partnership Inquiry
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-yellow-300 hover:bg-yellow-900/20">
                  💰 Investment Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
