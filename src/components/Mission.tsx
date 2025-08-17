export default function Mission() {
  return (
    <section id="mission" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-purple-300 text-sm font-medium">Our Purpose</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Mission</span> & <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">Philosophy</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We&apos;re not just building AI tools—we&apos;re creating a future where technology amplifies 
            human potential and creates more meaningful connections.
          </p>
        </div>

        {/* Enhanced Main Mission Statement */}
        <div className="group relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center mb-16 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-24 h-24 border border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-20 h-20 border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:scale-105 transition-transform duration-500">
              &quot;AI will not take away jobs, but will help people make a bigger impact.&quot;
            </h3>
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
              This isn&apos;t just a tagline—it&apos;s our core belief. We&apos;re building the bridge between 
              human potential and artificial intelligence, ensuring that technology serves humanity, 
              not the other way around.
            </p>
          </div>
        </div>

        {/* Enhanced Mission Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-purple-400 rounded-full border-2 border-white shadow-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Human-Centric Design</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Every feature we build starts with understanding human needs. We design AI that works 
              alongside people, not against them.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-400 rounded-full border-2 border-white shadow-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Amplify Potential</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Our AI doesn&apos;t replace human skills—it magnifies them. We help people achieve more 
              than they thought possible.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0-9c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-400 rounded-full border-2 border-white shadow-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Global Connection</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              We&apos;re building bridges between talent and opportunity across borders, cultures, 
              and industries.
            </p>
          </div>
        </div>

        {/* Enhanced Why This Matters */}
        <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 mb-16 border border-white/10 hover:border-purple-400/30 transition-all duration-500 overflow-hidden relative">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why This Mission <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Matters</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="group/item flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-2xl group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3 text-lg">The Current Problem</h4>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Traditional hiring is broken. It&apos;s slow, biased, and misses incredible talent. 
                      Companies struggle to find the right people, while qualified candidates go unnoticed.
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-2xl group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">?</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3 text-lg">The AI Fear</h4>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Many worry that AI will eliminate jobs. But the real opportunity is using AI 
                      to make people more effective, not replace them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="group/item flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-2xl group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3 text-lg">Our Solution</h4>
                    <p className="text-gray-300 text-base leading-relaxed">
                      AI-powered tools that make hiring faster, fairer, and more effective. 
                      Technology that serves human potential, not limits it.
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-2xl group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">∞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3 text-lg">The Future</h4>
                    <p className="text-gray-300 text-base leading-relaxed">
                      A world where everyone has access to opportunity, where AI amplifies human 
                      capabilities, and where hiring creates meaningful connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-purple-300 text-sm font-medium">Join Our Mission</span>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Us in Building the <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Future</span>
          </h3>
          <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re an investor, advisor, future employee, or just someone who believes 
            in human potential, we&apos;d love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold text-base shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Partner With Us
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-base hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1">
              <span className="flex items-center justify-center gap-2">
                Learn More
                <svg className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
