# Music Player Application

## Overview

This application is a React-based music player, created using Vite for an efficient and fast build setup. It features a clean UI built with Material-UI and includes several components for a complete music playing experience:

- **MusicPlayer**: The core component that manages the playback of songs.
- **SongRow**: Represents an individual song entry, complete with playback and volume controls, and song information.
- **SongList**: Displays a collection of `SongRow` components, essentially forming the playlist or song library.
- **MusicUploadForm**: Allows users to upload their own music files (.mp3 or .wav).
- **PlayAllButton**: A dedicated button to play all the songs in the playlist.
- **CopyrightNotice**: Displays copyright information in the UI.

## State Management

State within the application is managed using React's `useState` and `useEffect` hooks:

- **MusicPlayer**: Handles the state of the currently playing song and play/pause actions.
- **SongRow**: Manages its own state for play status, volume, and track progress.
- **MusicUploadForm**: Controls the state related to file upload and validation.
- **PlayAllButton**: Functions to initiate the playback of the entire song list, without maintaining an internal state.

## Running the Application Locally

Follow these steps to run the application locally with Vite:

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.
2. Clone the repository to your local machine.
3. Open the terminal and navigate to the project directory.
4. Run `npm install` to install all dependencies.
5. To start the development server, execute `npm run dev`.
6. The application will be available at `http://localhost:3000`.

## Assumptions and Additional Features

- All songs are assumed to be in `.mp3` or `.wav` format.
- A mock animation in the console simulates the file upload process in the `MusicUploadForm`.
- Songs can be controlled individually in each `SongRow` and collectively through the `PlayAllButton`.
- The application's styling leverages Material-UI components for a sleek and modern interface.
