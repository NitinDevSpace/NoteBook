import React, { useState, useEffect } from "react";

function NoteModal({ note, onClose, onUpdate }) {
	// Local state for editing the note content and title
	const [editedNote, setEditedNote] = useState(note?.content || "");
	const [editedTitle, setEditedTitle] = useState(note?.title || "");

	// Update local state if a new note is opened
	useEffect(() => {
		setEditedNote(note?.content || "");
		setEditedTitle(note?.title || "");
	}, [note]);

	// Handle save (called when clicking outside modal)
	const handleSave = () => {
		onUpdate({ ...note, title: editedTitle, content: editedNote }); // send updated note back
		onClose(); // close modal
	};

	// If modal is closed, don't render anything
	if (!note) return null;

	return (
		<div
			className="fixed inset-0 backdrop-blur-sm bg-black/20 flex justify-center items-center z-50"
			onClick={handleSave}
		>
			<div
				className="flex flex-col  bg-white text-black p-6 rounded-lg w-1/3 h-10/12 shadow-lg"
				onClick={(e) => e.stopPropagation()}
			>
				<input
					type="text"
					className="w-full  p-2 border rounded mb-4"
					value={editedTitle}
					onChange={(e) => setEditedTitle(e.target.value)}
					placeholder="Title"
				/>
				<textarea
					className="w-full grow p-2 border rounded mb-4"
					rows="6"
					value={editedNote}
					onChange={(e) => setEditedNote(e.target.value)}
				/>
				<button
					onClick={(e) => {
						e.stopPropagation();
						handleSave();
					}}
					className="mt-2 right-0 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
				>
					Close
				</button>
			</div>
		</div>
	);
}

export default NoteModal;
