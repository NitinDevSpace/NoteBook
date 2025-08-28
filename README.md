# NoteBook

NoteBook is a simple and efficient note-taking application that allows users to create, edit, and delete notes with ease. It features modal editing for a smooth user experience and persists notes locally using the browser's local storage.

## Features

- Create, edit, and delete notes
- Modal-based note editing
- Notes are saved and loaded from local storage, ensuring persistence across sessions

## Tech Stack

- React
- Vite
- Tailwind CSS
- Local Storage API

## Installation and Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/notebook.git
   cd notebook
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to start using NoteBook.

## Project Structure

- `src/` - Contains the source code for the application
  - `components/` - Reusable React components
  - `App.jsx` - Main application component
  - `index.jsx` - Entry point
- `public/` - Static assets
- `vite.config.js` - Vite configuration

## Future Improvements

- Add user authentication to sync notes across devices
- Implement tagging and categorization of notes
- Add search functionality
- Support markdown formatting
- Enable cloud backup and synchronization

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
