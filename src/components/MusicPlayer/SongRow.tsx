import React, { useEffect, useRef, useState } from 'react'; // Importing React hooks and features
import { ISong } from '../../types/types'; // Importing the ISong interface for type checking
// Importing various components from Material-UI for UI design
import { Card, CardContent, Typography, IconButton, Slider, Grid, Box, CardMedia } from '@mui/material';
// Importing icons from Material-UI for play, pause, and volume control
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

// Defining the props for SongRow component
interface SongRowProps {
  song: ISong; // Single song object
  onPlaySong: (songId: string) => void; // Function to handle song play
  isPlaying: boolean; // Boolean to indicate if the song is playing
  onSongEnd: (songId: string) => void; // Function to handle song end
}

// Functional component for SongRow
const SongRow: React.FC<SongRowProps> = ({ song, onPlaySong, isPlaying, onSongEnd }) => {
  // useRef to create a reference to the audio element
  const audioRef = useRef(new Audio(song.url));
  // useState to manage current time of the song
  const [currentTime, setCurrentTime] = useState(0);
  // useState to manage duration of the song
  const [duration, setDuration] = useState(0);
  // useState to manage volume of the song
  const [volume, setVolume] = useState(100);

  // useEffect hook to manage side effects
  useEffect(() => {
    const audio = audioRef.current; // Reference to the audio element

    const setAudioData = () => {
      setDuration(audio.duration); // Set the duration of the song
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime); // Update current time of the song
    };

    const handleEnded = () => {
      setCurrentTime(0); // Reset current time to 0 when song ends
      onSongEnd(song.id); // Call onSongEnd function
    };

    // Adding event listeners to the audio element
    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);
    audio.volume = volume / 100; // Setting the volume

    // Play or pause the song based on isPlaying state
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    // Cleanup function to remove event listeners
    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [isPlaying, volume, onSongEnd, song.id]); // Dependencies for useEffect

  // Function to handle play/pause button click
  const handlePlayPause = () => {
    onPlaySong(isPlaying ? '' : song.id);
  };

  // Function to handle changes in the time slider
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    audioRef.current.currentTime = newValue as number; // Set current time of the song
    setCurrentTime(newValue as number); // Update state with new current time
  };

  // Function to handle changes in volume slider
  const handleVolumeChange = (event: any, newValue: number | number[]) => {
    setVolume(newValue as number); // Update volume state
  };

  // Function to format time into minutes and seconds
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60); // Calculate minutes
    const seconds = Math.floor(time % 60); // Calculate seconds
    // Format time in mm:ss format
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Render the SongRow component
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}> 
      <CardContent> 
        <Grid container alignItems="center" spacing={2}> 
          <Grid item xs={2}> 
            <IconButton onClick={handlePlayPause}> 
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />} 
            </IconButton>
          </Grid>
          <Grid item xs={4}> 
            <Box display="flex" alignItems="center"> 
              <CardMedia // CardMedia to display song artwork
                component="img"
                sx={{ width: 48, height: 48 }}
                image={song.artwork}
                alt={song.title}
              />
              <Box sx={{ marginLeft: 2 }}> 
                <Typography variant="h5">{song.title}</Typography> 
                <Typography color="textSecondary">{song.artist}</Typography> 
                <Typography color="textSecondary"> 
                  {formatTime(currentTime)} / {formatTime(duration)}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}> 
            <Slider // Slider component for song time
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleSliderChange}
              aria-labelledby="time-slider"
            />
          </Grid>
          <Grid item xs={2}> 
            <Box display="flex" alignItems="center"> 
              <VolumeUpIcon /> 
              <Slider // Slider component for volume control
                min={0}
                max={100}
                value={volume}
                onChange={handleVolumeChange}
                aria-labelledby="volume-slider"
                sx={{ marginLeft: 1, width: '80%' }}
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SongRow; // Export the SongRow component
