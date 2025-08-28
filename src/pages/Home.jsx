import React, { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import Note from "../components/Note";
import NoteModal from "../components/NoteModal";

function Home() {
	// State for title input
	const [title, setTitle] = useState("");
	// State for note content
	const [note, setNote] = useState("");
	// State to hold all saved notes
	const [notes, setNotes] = useState(() => {
		return JSON.parse(localStorage.getItem("notes")) || [];
	});
	// State to track if textarea is focused (to show title input)
	const [isFocused, setIsFocused] = useState(false);
	// Ref to dynamically resize the textarea
	const textAreaRef = useRef(null);
	// State for selected note for modal
	const [selectedNote, setSelectedNote] = useState(null);


	// Save notes to localStorage whenever they change
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	// Handle changes in textarea and auto-resize
	const handleChange = (e) => {
		setNote(e.target.value);
		textAreaRef.current.style.height = "auto";
		textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
	};

	// Add a new note to the list
	const addNote = () => {
		if (!title.trim() && !note.trim()) return; // prevent adding empty notes
		const newNote = { title, content: note };
		setNotes([...notes, newNote]);
		setTitle(""); // clear title
		setNote(""); // clear content
		textAreaRef.current.style.height = "auto"; // reset textarea height
		setIsFocused(false); // hide title field until next focus
	};

	return (
		<>
			<NavBar />
			<div className="flex gap-4 justify-center items-start mt-12 max-w-3/4 mx-auto">
				<div className="flex flex-col w-2/3">
					{/* Show title input only when textarea is focused */}
					{isFocused && (
						<input
							type="text"
							placeholder="Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="border rounded p-2 mb-2 focus:outline-none"
						/>
					)}
					{/* Textarea for writing note */}
					<textarea
						ref={textAreaRef}
						value={note}
						onChange={handleChange}
						onFocus={() => setIsFocused(true)}
						placeholder="Take a Note"
						rows={1}
						className="border rounded p-2 w-full overflow-hidden focus:outline-none max-h-40 max-w-lg"
					/>
				</div>
				{/* Button to add note */}
				<button
					onClick={addNote}
					className="px-4 py-2 rounded bg-[#8899ac] self-start"
				>
					Add
				</button>
			</div>
			{/* Display list of saved notes */}
			<div className="flex flex-wrap justify-center items-start mt-12 max-w-3/4 mx-auto">
				{notes.map((n, index) => (
					<div key={index} onClick={() => setSelectedNote({ ...n, index })}>
						<Note
							title={n.title}
							content={n.content}
							onDelete={() => {
								const updatedNotes = notes.filter((_, i) => i !== index);
								setNotes(updatedNotes);
							}}
						/>
					</div>
				))}
			</div>
			{selectedNote && (
				<NoteModal
					note={selectedNote}
					onClose={() => setSelectedNote(null)}
					onUpdate={(updatedNote) => {
						const updatedNotes = [...notes];
						updatedNotes[updatedNote.index] = {
							title: updatedNote.title,
							content: updatedNote.content,
						};
						setNotes(updatedNotes);
					}}
				/>
			)}
		</>
	);
}

export default Home;
