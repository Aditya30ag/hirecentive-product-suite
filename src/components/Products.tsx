export default function Products() {
  const products = [
    {
      id: 'rebuildcv',
      name: 'RebuildCV',
      tagline: 'AI-Powered Resume Builder',
      description: 'AI-powered, multilingual resume editor and builder designed for job seekers across industries and geographies.',
      features: [
        'Unlimited edits & version tracking',
        'ATS-optimized formatting',
        'AI-powered improvement suggestions',
        'Job-role knowledge graph integration',
        'Free student access via universities'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
      textColor: 'text-white',
      accentColor: 'from-purple-400 to-pink-400'
    },
    {
      id: 'prepcv',
      name: 'PrepCV',
      tagline: 'AI Mock Interview Platform',
      description: 'AI-based mock interview and placement readiness platform tailored for universities and training institutions.',
      features: [
        'Emotionally intelligent AI interviews',
        'Structured feedback system',
        'Placement Management System (PMS)',
        'Student progress tracking',
        'University integration tools'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      textColor: 'text-white',
      accentColor: 'from-blue-400 to-cyan-400'
    },
    {
      id: 'hirecentive-network',
      name: 'Hirecentive Network',
      tagline: 'Recruiter Referral Engine',
      description: 'Recruiter referral engine that turns every recruiter into a micro-entrepreneur.',
      features: [
        'Automated candidate matching',
        'Incentive-based referral system',
        'LLM-powered role matching',
        'Viral growth loop',
        'Pre-vetted candidate pool'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-500',
      textColor: 'text-white',
      accentColor: 'from-green-400 to-emerald-400'
    },
    {
      id: 'llm-infrastructure',
      name: 'LLM Hiring Infrastructure',
      tagline: 'AI-Powered Matching Engine',
      description: 'Large language model–driven hiring infrastructure that maps roles, skills, and qualifications.',
      features: [
        'Living knowledge graph',
        'Context-aware matching',
        'Transferable skills recognition',
        'Continuous self-learning',
        'Ecosystem integration'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      textColor: 'text-white',
      accentColor: 'from-yellow-400 to-orange-400'
    }
  ];

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-purple-300 text-sm font-medium">Product Suite</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Product Suite</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Four powerful products working together to create a self-sustaining hiring ecosystem 
            that benefits candidates, universities, recruiters, and companies.
          </p>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-2 border border-white/10 hover:border-purple-400/30 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Header with Enhanced Layout */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${product.bgColor} rounded-2xl flex items-center justify-center ${product.textColor} shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{product.name}</h3>
                    <div className={`px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${product.color} text-white shadow-lg inline-block`}>
                      {product.tagline}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Description */}
              <p className="text-gray-300 mb-6 leading-relaxed text-base lg:text-lg">{product.description}</p>

              {/* Enhanced Features List */}
              <ul className="space-y-3 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 group/feature">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.color} shadow-lg group-hover/feature:scale-125 transition-transform duration-300`}></div>
                    <span className="text-gray-300 text-sm lg:text-base group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Enhanced CTA Button */}
              <button className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${product.color} text-white font-semibold text-base hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg group-hover:shadow-purple-500/50`}>
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Enhanced Ecosystem Integration */}
        <div className="relative">
          {/* Connection Lines Background */}
          <div className="absolute inset-0 hidden lg:block">
            <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path d="M 100 100 Q 250 50 400 100 T 700 100 T 900 100" stroke="url(#connectionGradient)" strokeWidth="3" fill="none" strokeDasharray="10,5" className="animate-pulse" />
            </svg>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-24 h-24 border border-purple-400 rounded-full" />
              <div className="absolute bottom-10 right-10 w-20 h-20 border border-blue-400 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-green-400 rounded-full" />
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-400/30 mb-6">
                <span className="text-purple-300 text-sm font-medium">Ecosystem Integration</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Connected <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Ecosystem</span>
              </h3>
              <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our products don&apos;t exist in silos. They work together to create a powerful, 
                data-driven hiring ecosystem that gets smarter over time.
              </p>
            </div>

            {/* Enhanced Ecosystem Flow - All 3 in Same Line */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12 mb-12">
              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-white shadow-lg"></div>
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">Candidates</h4>
                <p className="text-gray-300 text-sm">Build optimized resumes</p>
              </div>

              <div className="hidden md:flex flex-col items-center">
                <div className="text-4xl text-purple-400 animate-pulse mb-2">→</div>
                <div className="text-xs text-gray-400">AI Matching</div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 my-2"></div>
                <div className="text-4xl text-blue-400 animate-pulse mt-2">→</div>
                <div className="text-xs text-gray-400">Smart Placement</div>
              </div>

              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-400 rounded-full border-2 border-white shadow-lg"></div>
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">Universities</h4>
                <p className="text-gray-300 text-sm">Prepare students</p>
              </div>

              <div className="hidden md:flex flex-col items-center">
                <div className="text-4xl text-blue-400 animate-pulse mb-2">→</div>
                <div className="text-xs text-gray-400">Smart Placement</div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 my-2"></div>
                <div className="text-4xl text-green-400 animate-pulse mt-2">→</div>
                <div className="text-xs text-gray-400">AI Hiring</div>
              </div>

              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-400 rounded-full border-2 border-white shadow-lg"></div>
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">Companies</h4>
                <p className="text-gray-300 text-sm">Hire faster & smarter</p>
              </div>
            </div>

            {/* Enhanced Bottom Section */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-gray-300 text-base">
                  Powered by our <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">LLM Infrastructure</span> that continuously learns and improves
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
