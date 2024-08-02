import { useState } from 'react';
import Player from './components/Player';
import TrackList from './components/TrackList';
import './App.css';

const App = () => {
    const [currentTrack, setCurrentTrack] = useState(null);

    const tracks = [
        { name: 'Track 1', src: 'path/to/track1.mp3' },
        { name: 'Track 2', src: 'path/to/track2.mp3' },
        { name: 'Track 3', src: 'path/to/track3.mp3' },
    ];

    return (
        <div className="app">
            <h1>Music Player</h1>
            <TrackList tracks={tracks} setCurrentTrack={setCurrentTrack} />
            {currentTrack && <Player currentTrack={currentTrack} />}
        </div>
    );
};

export default App;
