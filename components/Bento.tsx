'use client'

import { useState } from 'react'
import { SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { projectsContent, projectData } from './ProjectContent'

const ProjectCard = ({ project, isWide = false }: { project: projectData; isWide?: boolean }) => {
  return (
    <div className={`bg-[#fffaf4] rounded-3xl overflow-hidden border-2 border-black shadow-md hover:shadow-xl transition-all ${isWide ? 'col-span-full lg:col-span-2' : 'col-span-full lg:col-span-1'}`}>
      {/* Image Section */}
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-2 w-full">
       
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

        {/* Tags */}
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
            <a
              href={project.link.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 text-sm sm:text-base font-bold underline underline-offset-4"
            >
              GitHub
            </a>
          )}
          {project.link.live && (
            <a
              href={project.link.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 text-sm sm:text-base font-bold underline underline-offset-4"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CurameSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 3
  const totalPages = Math.ceil(projectsContent.length / projectsPerPage)

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projectsContent.slice(indexOfFirstProject, indexOfLastProject)

  const nextPage = () => {
    setCurrentPage(curr => Math.min(curr + 1, totalPages))
  }

  const prevPage = () => {
    setCurrentPage(curr => Math.max(curr - 1, 1))
  }

  return (
    <div className="max-w-[850px] p-4 sm:p-6 md:p-8 bg-[#fffaf4] rounded-2xl relative overflow-hidden border-2 border-black m-4">
      {/* Header with Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center text-black">
            code:projects
            <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 ml-2" />
          </h2>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-lime-200 text-black text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium border border-black">Personal Project</span>
            <span className="bg-gray-100 text-black text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium border border-black">Branding</span>
            <span className="bg-gray-100 text-black text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium border border-black">Layout</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Pagination Controls */}
          <div className="flex items-center gap-2 mr-4 border-2 border-black rounded-full px-2 py-1">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="p-1 sm:p-2 rounded-full bg-gray-700 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <span className="text-xs sm:text-sm font-bold text-black">
              {currentPage}/{totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="p-1 sm:p-2 rounded-full bg-gray-700 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          {/* Number Badge */}
          <div className="bg-purple-200 text-black font-bold text-xl sm:text-2xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl border-2 border-black">
            02
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[700px] overflow-y-auto pr-2">
        {currentProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            isWide={index === 0}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-8 h-8 sm:w-12 sm:h-12 bg-green-200 rounded-full -z-10 flex items-center justify-center border-2 border-black">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-300 rounded-full border-2 border-black"></div>
      </div>
      <div className="absolute bottom-4 right-4 w-6 h-6 sm:w-8 sm:h-8 bg-pink-200 rounded-full -z-10 border-2 border-black"></div>
    </div>
  )
}