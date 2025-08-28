import React from 'react'

function NavBar() {
  return (
		<div className="flex sticky bg-[#8899ac] p-4 items-center">
			<img
				src={`${import.meta.env.BASE_URL}Icon.png`}
				alt="Logo"
				className="w-12"
			/>
			<h1 className="text-4xl font-bold">NoteBook</h1>
		</div>
	);
}

export default NavBar