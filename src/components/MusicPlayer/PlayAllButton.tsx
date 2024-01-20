// Import Button component from Matrial UI
import { Button } from '@mui/material';

// Simulate that on click print in console some text
const PlayAllButton = () => {
  return <Button variant="contained" onClick={()=> console.log('Play all songs...')}>Play All</Button>;
}

export default PlayAllButton;
