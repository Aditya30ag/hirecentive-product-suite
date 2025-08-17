import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                <Image src="/logo.png" alt="Hirecentive Logo" className="w-full h-full object-cover" height={128} width={128} />
              </div>
              <span className="text-3xl font-bold">HIREÇENTIVE</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-lg leading-relaxed text-lg">
              Making the world more connected through AI-powered hiring solutions. 
              We believe AI will help people make a bigger impact, not take away jobs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-purple-900/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-purple-600 transition-all duration-300 border border-purple-700/50 hover:border-purple-500 shadow-lg hover:shadow-purple-500/25">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.856-3.047-1.856 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-blue-900/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 border border-blue-700/50 hover:border-blue-500 shadow-lg hover:shadow-blue-500/25">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-pink-900/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-pink-600 transition-all duration-300 border border-pink-700/50 hover:border-pink-500 shadow-lg hover:shadow-pink-500/25">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-white">Products</h3>
            <ul className="space-y-4">
              <li><a href="#products" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-base">RebuildCV</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-base">PrepCV</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-green-300 transition-colors duration-300 text-base">Hirecentive Network</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 text-base">LLM Infrastructure</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-white">Company</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-base">About Us</a></li>
              <li><a href="#mission" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-base">Mission & Vision</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-300 transition-colors duration-300 text-base">Careers</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 text-base">Partnerships</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
              <p className="text-gray-300">connect@hirecentive.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Address</h4>
              <p className="text-gray-300">3-27-2232/7, New Layout, Kadri Kambla, Mangalore - 575004</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Legal</h4>
              <a href="#terms" className="text-purple-300 hover:text-white transition-colors duration-300 underline">Terms & Conditions</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-base mb-6 md:mb-0">
              © 2024 Hirecentive. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-8 text-base text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>

          {/* MEITY Badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-base text-white shadow-lg">
              <svg className="w-5 h-5 mr-3 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Official MEITY Partner
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
