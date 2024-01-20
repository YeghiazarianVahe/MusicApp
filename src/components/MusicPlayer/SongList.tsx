// Import necessary modules
import React from 'react';
import SongRow from './SongRow'; // Import the SongRow component
import { ISong } from '../../types/types'; // Import the ISong interface

// Define the props for the SongList component
interface SongListProps {
 songs: ISong[]; // Array of songs to display
 onPlaySong: (songId: string) => void; // Function to handle song play events
 playingSong: string | null; // ID of the currently playing song, or null if none
}

// Define the SongList component as a React functional component
const SongList: React.FC<SongListProps> = ({ songs, onPlaySong, playingSong }) => {
 return (
   <div>
     {/* Map over the songs array and render a SongRow for each song */}
     {songs.map((song) => (
       <SongRow
         key={song.id} // Assign a unique key for each SongRow
         song={song} // Pass the song object as a prop
         onPlaySong={onPlaySong} // Pass the onPlaySong function as a prop
         isPlaying={playingSong === song.id} // Indicate if the song is currently playing
         onSongEnd={function (songId: string): void {
           throw new Error('Function not implemented.'); // Placeholder for handling song end events
         }}
       />
     ))}
   </div>
 );
};

// Export the SongList component as the default export
export default SongList;
