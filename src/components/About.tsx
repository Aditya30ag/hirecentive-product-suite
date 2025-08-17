export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Hirecentive</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We&apos;re not just building a company. We&apos;re rebuilding the purpose of work! 
            At Hirecentive, we believe people deserve more than just jobs—they deserve growth, 
            direction, and a future worth showing up for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base">
                To make this world a more connected space where AI helps people make a bigger impact, 
                not take away jobs. We believe in human-AI collaboration that amplifies human potential.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base">
                A future where hiring is seamless, intelligent, and human-centric. Where every candidate 
                gets a fair chance and every company finds the perfect fit through AI-powered insights.
              </p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-10">Our Core Values</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <span className="text-white font-bold text-base">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">Human-First AI</h4>
                  <p className="text-gray-300 text-base">Technology that serves humanity, not replaces it.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <span className="text-white font-bold text-base">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">Innovation & Excellence</h4>
                  <p className="text-gray-300 text-base">Pushing boundaries to create the best hiring solutions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <span className="text-white font-bold text-base">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">Global Impact</h4>
                  <p className="text-gray-300 text-base">Making hiring better for everyone, everywhere.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <span className="text-white font-bold text-base">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">Trust & Transparency</h4>
                  <p className="text-gray-300 text-base">Building reliable, ethical AI solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MEITY Partnership */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Official MEITY Partnership
            </h3>
            <p className="text-lg lg:text-xl mb-8 opacity-90 leading-relaxed">
              We&apos;re proud to be partnered with the Ministry of Electronics and Information Technology (MEITY) 
              to drive digital transformation in India&apos;s hiring ecosystem.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-90">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Government</div>
                <div className="text-base">Backed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Trusted</div>
                <div className="text-base">Partner</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Digital</div>
                <div className="text-base">India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
