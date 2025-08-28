import React from 'react'

// A single Note card styled like Google Keep
// Shows title (if provided) and content
// Limited in max height/width with scrollable overflow
function Note({ title, content, onDelete }) {
  return (
		<div className="relative border border-white/70  shadow-lg rounded-lg p-4 w-64 m-2 hover:shadow-lg transition-shadow max-h-96 max-w-xs overflow-y-hidden">
			<div className="">
				{title && (
					<h2 className="text-lg font-semibold mb-6">{title}</h2>
				)}
				<p className="whitespace-pre-wrap">{content}</p>
				<button
					onClick={(e) => {
						e.stopPropagation();
						onDelete();
					}}
					className="absolute top-1 right-1 z-10 text-gray-600 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-300 hover:text-red-600"
					aria-label="Delete note"
				>
					×
				</button>
			</div>
		</div>
	);
}

export default Note