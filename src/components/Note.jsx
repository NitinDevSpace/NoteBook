import React from 'react'

// A single Note card styled like Google Keep
// Shows title (if provided) and content
// Limited in max height/width with scrollable overflow
function Note({ title, content }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64 m-2 hover:shadow-lg transition-shadow max-h-60 max-w-xs overflow-y-auto">
      {title && <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>}
      <p className="text-gray-600 whitespace-pre-wrap">{content}</p>
    </div>
  )
}

export default Note