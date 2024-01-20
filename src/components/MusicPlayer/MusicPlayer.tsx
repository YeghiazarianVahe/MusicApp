// Import necessary modules
import React, { useState } from 'react';
import { ISong } from '../../types/types'; // Import song interface
import SongRow from './SongRow'; // Import component for individual song rows
import { Box, Typography } from '@mui/material'; // Import MUI components for layout
import MusicUploadForm from './MusicUploadForm'; // Import music upload form
import CopyrightNotice from './CopyrightNotice'; // Import copyright notice component
import PlayAllButton from './PlayAllButton';

// Define the props interface for the MusicPlayer component
interface MusicPlayerProps {
  songs: ISong[]; // Expect an array of songs as a prop
}

// Define the MusicPlayer component as a functional React component
const MusicPlayer: React.FC<MusicPlayerProps> = ({ songs }) => {
  // State to store the currently playing song's ID
  const [playingSong, setPlayingSong] = useState<string | null>(null);

  // Function to handle playing a song
  const handlePlaySong = (songId: string) => {
    setPlayingSong(songId); // Set the playingSong state to the song ID
  };

  // Function to handle when a song ends
  const handleSongEnd = (songId: string) => {
    const currentIndex = songs.findIndex(song => song.id === songId); // Find the index of the current song
    const nextIndex = (currentIndex + 1) % songs.length; // Calculate the index of the next song
    setPlayingSong(songs[nextIndex].id); // Set the playingSong state to the next song's ID
  };

  return (
    <Box sx={{ width: '75%', margin: 'auto' }}> 
      <Typography variant="h4" align='center'> 
        Music Player
      </Typography>
      {songs.map(song => (
        <SongRow
          key={song.id} // Unique key for each song row
          song={song} // Pass the song object as a prop
          onPlaySong={handlePlaySong} // Pass the play song handler
          isPlaying={playingSong === song.id} // Indicate if the song is playing
          onSongEnd={handleSongEnd} // Pass the song end handler
        />
      ))}
      <PlayAllButton /> 
      <MusicUploadForm />
      <CopyrightNotice /> 
    </Box>
  );
};

export default MusicPlayer; // Export the component
