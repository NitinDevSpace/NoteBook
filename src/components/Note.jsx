import React from 'react'

// A single Note card styled like Google Keep
// Shows title (if provided) and content
// Limited in max height/width with scrollable overflow
function Note({ title, content, onDelete }) {
  return (
    <div className="bg-white/80 shadow-md rounded-lg p-4 w-64 m-2 hover:shadow-lg transition-shadow max-h-60 max-w-xs overflow-y-auto">
      <div className="relative">
        {title && <h2 className="text-lg font-semibold mb-2 text-black">{title}</h2>}
        <p className="text-black whitespace-pre-wrap">{content}</p>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="absolute top-1 right-1 z-10 text-red-600 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:text-red-800"
          aria-label="Delete note"
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default Note