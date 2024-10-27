import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaginationControls = ({ currentPage, totalPages, nextPage, prevPage }:any) => {
  return (
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
  )
}

export default PaginationControls
