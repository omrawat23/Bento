'use client'

import { useState } from 'react'
import { SparklesIcon } from 'lucide-react'
import ProjectCard from './ProjectCard'
import PaginationControls from './PaginationControls'
import { projectsContent } from './Userinfo'

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 3
  const totalPages = Math.ceil(projectsContent.length / projectsPerPage)

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projectsContent.slice(indexOfFirstProject, indexOfLastProject)

  const nextPage = () => setCurrentPage(curr => Math.min(curr + 1, totalPages))
  const prevPage = () => setCurrentPage(curr => Math.max(curr - 1, 1))

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
        <PaginationControls currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[700px] overflow-y-auto pr-2">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} isWide={index === 0} />
        ))}
      </div>
    </div>
  )
}
