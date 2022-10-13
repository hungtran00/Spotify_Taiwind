import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

function Playing(props) {
    const {song, handleSetSong} = useContext(Songs)
    const handClickNext = () => {
        handleSetSong(song.id + 1)
    }
    const handClickPrevious = () => {
        handleSetSong(song.id - 1)
    }
    return (
        <div>
            <AudioPlayer
             className='player_music'
            src={song.url}
            layout="stacked-reverse" 
            showSkipControls={true} 
            showJumpControls={false}
            onClickNext={handClickNext}
            onClickPrevious={handClickPrevious}/>
        </div>
    );
}

export default Playing;