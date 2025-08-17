"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-pink-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Left Side - Enhanced Text Content */}
            <div className="text-left space-y-10">
              <div className="space-y-8">
                {/* Enhanced Badge */}
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <span className="text-purple-300 text-sm font-medium">Welcome to Hirecentive</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Incentivized Hiring That Benefits
                  <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent mt-2">
                    Everyone!
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  The perfect Win-Win-Win Solution! Creating harmony in recruitment through human connection & AI.
                </p>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 hover:scale-105">
                  <span className="flex items-center justify-center gap-3">
                    Explore now!
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <button className="group border-2 border-purple-400 text-purple-300 px-12 py-6 rounded-2xl hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1">
                  <span className="flex items-center justify-center gap-3">
                    Request Demo
                    <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            
            {/* Right Side - Enhanced Hexagonal Logo */}
            <div className="relative flex justify-center">
              <div className="relative group">
                {/* Enhanced Outer Glow Ring */}
                <div className="absolute inset-0 w-80 h-80 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Enhanced Main Hexagon */}
                <div className="relative w-80 h-80 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl transform rotate-45 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500 group-hover:scale-105">
                  <div className="transform -rotate-45 text-center">
                    <div className="w-32 h-32 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg p-4 group-hover:shadow-2xl transition-shadow duration-500">
                      <Image
                        src="/logo.png" 
                        alt="Hirecentive Logo" 
                        className="w-full h-full object-contain"
                        height={128}
                        width={128}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Rotating Text Ring */}
                <div className="absolute inset-0 w-80 h-80 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-purple-300 text-base font-medium">CONNECT</div>
                  <div className="absolute top-1/2 right-0 transform translate-y-1/2 text-pink-300 text-base font-medium">INCENTIVIZE</div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-blue-300 text-base font-medium">REPEAT</div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-purple-300 text-base font-medium">CONNECT</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Three User Types Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-32">
            <div className="group bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden relative">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" />
              
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">CANDIDATE</h3>
              <p className="text-gray-300 text-base mb-4 font-medium text-center">Apply as Candidate</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 text-center">Finding the perfect job can be challenging but not with Hirecentive! Automate your job search and have a recruiter buddy who believes in you.</p>
              <button className="group/btn text-purple-300 hover:text-white transition-colors text-sm font-medium hover:underline flex items-center justify-center gap-2 mx-auto">
                Learn More 
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden relative">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" />
              
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">COMPANY</h3>
              <p className="text-gray-300 text-base mb-4 font-medium text-center">Start Hiring</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 text-center">Finding the right person for the job can be hard and expensive! Hirecentive uses a unique approach to recruitment, leveraging technology without sidelining the human touch.</p>
              <button className="group/btn text-blue-300 hover:text-white transition-colors text-sm font-medium hover:underline flex items-center justify-center gap-2 mx-auto">
                Learn More 
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 hover:border-green-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 overflow-hidden relative">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" />
              
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">FREELANCE RECRUITER</h3>
              <p className="text-gray-300 text-base mb-4 font-medium text-center">Join the Network</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 text-center">Get rewarded for helping companies find the right talent with our effortlessly automated process. Simply refer and support your candidate, and we&apos;ll handle the rest!</p>
              <button className="group/btn text-green-300 hover:text-white transition-colors text-sm font-medium hover:underline flex items-center justify-center gap-2 mx-auto">
                Learn More 
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Enhanced Key Benefits */}
          <div className="flex flex-wrap justify-center gap-16 mb-24">
            {[
              { icon: "👍", label: "SIMPLE & EASY", color: "from-purple-500 to-pink-500" },
              { icon: "💰", label: "INCENTIVISED", color: "from-yellow-500 to-orange-500" },
              { icon: "✅", label: "VERIFIED USERS", color: "from-green-500 to-emerald-500" },
              { icon: "📊", label: "VALUE DRIVEN", color: "from-blue-500 to-cyan-500" },
              { icon: "⚡", label: "EFFICIENT", color: "from-pink-500 to-purple-500" }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 bg-gradient-to-br ${benefit.color} rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-2xl group-hover:scale-110 transition-transform duration-300 group-hover:shadow-purple-500/25`}>
                  {benefit.icon}
                </div>
                <div className="text-white text-base font-semibold tracking-wide group-hover:text-purple-300 transition-colors duration-300">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 24,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-8 h-12 border-2 border-purple-400 rounded-full flex justify-center shadow-lg">
          <div className="w-1.5 h-4 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
