import './App.css';
import { Songs } from './Context';
import DetailSong from './components/DetailSong';
import Header from './components/Header';
import ListSong from './components/ListSong';
import DataSongs from './data/songs.json'
import Playing from './components/Playing';
import { useState } from 'react';

function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
      setSong(DataSongs[0])
    else
      setSong(song)
  }
  return (
    <div className="">
        <Songs.Provider value={{DataSongs, song, handleSetSong}}>
          <Header/>
          <div className='grid grid-cols-3 h-screen-header-player bg-slate-700 overflow-hidden'>
              <DetailSong/>
              <ListSong/>
          </div>
          <Playing/>
        </Songs.Provider>

    </div>
  );
}

export default App;
