import React, { useState } from 'react'; // Import React and useState hook from React library
import { Button } from '@mui/material'; // Import Button component from Material-UI

// Define the MusicUploadForm functional component
const MusicUploadForm: React.FC = () => {
  // useState hook for managing the file state
  const [file, setFile] = useState<File | null>(null);
  // useState hook for managing the file validation state
  const [isValidFile, setIsValidFile] = useState<boolean>(true);

  // Function to handle file input change events
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Check if files are present in the event target
    if (event.target.files) {
      // Get the first selected file
      const selectedFile = event.target.files[0];
      // Check if the file extension is valid
      if (validateFileExtension(selectedFile)) {
        setFile(selectedFile); // Update the file state
        setIsValidFile(true); // Set the file as valid
      } else {
        setIsValidFile(false); // Set the file as invalid
      }
    }
  };

  // Function to validate the file extension
  const validateFileExtension = (file: File): boolean => {
    const validExtensions = ['.mp3', '.wav']; // Define valid file extensions
    // Get the file extension and convert it to lowercase
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    // Check if the file extension is in the list of valid extensions
    return validExtensions.includes('.' + fileExtension);
  };

  // Function to animate the upload process in the console
  const animateUpload = () => {
    let progress = 0; // Initialize progress
    // Set an interval to update progress
    const interval = setInterval(() => {
      progress += 20; // Increment progress
      console.log(`Uploading... ${progress}%`); // Log the progress
      if (progress >= 100) {
        clearInterval(interval); // Clear the interval once progress reaches 100%
        console.log('Upload complete!'); // Log upload completion
      }
    }, 1000); // Set interval to 1 second
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (file) {
      console.log('File uploaded:', file); // Log the uploaded file
      animateUpload(); // Start the upload animation
    }
  };

  // Render the MusicUploadForm component
  return (
    <form onSubmit={handleSubmit}> 
      <input type="file" onChange={handleFileChange} accept="audio/*" /> 
      {!isValidFile && <p>Please upload a valid .mp3 or .wav file.</p>} 
      <Button type="submit" variant="contained" disabled={!file || !isValidFile}>Upload</Button> 
    </form>
  );
}

export default MusicUploadForm; // Export the MusicUploadForm component
