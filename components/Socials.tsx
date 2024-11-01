import { Mail, GithubIcon,LinkedinIcon,File } from 'lucide-react';
import {socialContent} from '@/components/Userinfo'

export default function Socials() {
  return (
    <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mt-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-black">/socials</h2>
      <div className="relative border-2 border-black rounded-3xl p-4 sm:p-8  overflow-hidden mb-4">
        {/* Main content */}
        <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 items-center justify-center">   
            
          <a href={socialContent.resume} target="_blank" rel="noopener noreferrer">
          <button className="w-full sm:w-auto bg-pink-200 text-black px-4 sm:px-6 py-2 rounded-full text-sm flex items-center justify-center">
            <File className="w-4 h-4 mr-2" />
            Resume
          </button>
          </a>
           
          <a href={socialContent.gmail} target="_blank" rel="noopener noreferrer">
          <button className="w-full sm:w-auto bg-lime-200 text-black px-4 sm:px-6 py-2 rounded-full text-sm flex items-center justify-center">
            <Mail className="w-4 h-4 mr-3" />
            Gmail
          </button>
          </a>

         <a href={socialContent.github} target="_blank" rel="noopener noreferrer">
          <button className="w-full sm:w-auto bg-green-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm flex items-center justify-center">
            <GithubIcon className="w-4 h-4 mr-2" />
            Github
          </button>
         </a>

          {/* <a href={socialContent.twitter} target="_blank" rel="noopener noreferrer">
          <button className="w-full sm:w-auto bg-blue-400 text-white px-4 sm:px-6 py-2 rounded-full text-sm flex items-center justify-center">
            <TwitterIcon className="w-4 h-4 mr-2" />
            Twitter
          </button>
         </a> */}

         <a href={socialContent.linkedin} target="_blank" rel="noopener noreferrer">
          <button className="w-full sm:w-auto bg-blue-800 text-white px-4 sm:px-6 py-2 rounded-full text-sm flex items-center justify-center">
            <LinkedinIcon className="w-4 h-4 mr-2" />
            LinkedIn
          </button>
         </a>

          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-2 left-4 text-green-700">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-1 right-4 text-purple-500">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}