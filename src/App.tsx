// Import necessary hooks and components from React
import { useState, useEffect } from 'react';
// Import music data from a JSON file
import musicData from './assets/data.json';
// Import the song interface for type safety
import { ISong } from './types/types';
// Import the MusicPlayer component
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

// Main App component
function App() {
  // State variable to store the songs array, initialized as an empty array
  const [songs, setSongs] = useState<ISong[]>([]);

  // useEffect hook to fetch and set the songs data
  useEffect(() => {
    // Set the songs state to the imported musicData
    setSongs(musicData);
  }, []); // Empty dependency array ensures the effect runs only once on initial render

  // Render the app's UI
  return (
    <div>
      {/* Pass the songs data to the MusicPlayer component */}
      <MusicPlayer songs={songs} />
    </div>
  );
}

// Export the App component as the default export
export default App;
