'use client'

import { SparklesIcon } from 'lucide-react'
import Image from 'next/image'
import { ProjectData } from './Userinfo'

const ProjectCard = ({ project, isWide = false }: { project: ProjectData; isWide?: boolean }) => {
  return (
    <div className={`bg-[#fffaf4] rounded-3xl overflow-hidden border-2 border-black shadow-md hover:shadow-xl transition-all ${isWide ? 'col-span-full lg:col-span-2' : 'col-span-full lg:col-span-1'}`}>
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 lg:hidden">
        <Image 
          src={project.image} 
          alt={project.title} 
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      {/* Content Section */}
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg sm:text-xl font-bold flex items-center text-black">
            {project.title}
            <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 ml-2" />
          </h3>
        </div>
        <p className="text-gray-800 text-sm sm:text-base mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-lime-200 text-black text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium border"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-4 mt-6">
          {project.link.github && (
            <a href={project.link.github} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 text-sm sm:text-base font-bold underline underline-offset-4">
              GitHub
            </a>
          )}
          {project.link.live && (
            <a href={project.link.live} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 text-sm sm:text-base font-bold underline underline-offset-4">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard