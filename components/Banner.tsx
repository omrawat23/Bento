import { SparklesIcon } from 'lucide-react'

export default function Component() {
  return (
    <div className="max-w-4xl px-4 sm:px-6 lg:px-8 m-4">
      <div className="border border-black rounded-lg overflow-hidden">
        <div className="bg-[#fffaf4] p-4 sm:p-6 relative">
          {/* Browser-like controls */}
          <div className="absolute top-3 left-3 flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          {/* Main content */}
          <div className="mt-8 sm:mt-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black tracking-tighter mb-4">PORTFOLIO</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2">
              <div className="bg-pink-200 rounded-full px-4 py-1 border-b border-black">
                <span className="text-sm text-black">Om Rawat</span>
              </div>
              <div className="bg-lime-200 rounded-full px-4 py-1 border-b border-black">
                <span className="text-sm text-black whitespace-nowrap">Frontend Designer | Illustrator</span>
              </div>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-black">2024</span>
            </div>
          </div>

          {/* Decorative elements */}
          <SparklesIcon className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
          <SparklesIcon className="absolute bottom-2 left-2 w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
          
          {/* Cursor icon */}
          <svg className="absolute bottom-2 right-2 w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {/* Category tags */}
      <div className="flex flex-wrap justify-center mt-4 gap-2 text-black px-2">
        {['Branding', 'UI/UX Design', 'Layout', 'Illustration', 'Social Media'].map((category) => (
          <div key={category} className="flex items-center">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-black flex items-center justify-center mr-2">
              <span className="text-lg sm:text-xl">+</span>
            </div>
            <span className="border border-black rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm">{category}</span>
          </div>
        ))}
      </div>
    </div>
  )
}