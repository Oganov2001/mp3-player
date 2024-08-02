const TrackList = ({ tracks, setCurrentTrack }) => {
    return (
        <div className="track-list">
            {tracks.map((track, index) => (
                <div 
                    key={index} 
                    className="track" 
                    onClick={() => setCurrentTrack(track)}
                >
                    {track.name}
                </div>
            ))}
        </div>
    );
};

export default TrackList;
