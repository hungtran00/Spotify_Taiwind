import './App.css';
import { Songs } from './components/Context';
import DetailSong from './components/DetailSong';
import Header from './components/Header';
import ListSong from './components/ListSong';
import DataSong from './data/songs.json'

function App() {
  return (
    <div className="">
        <Songs.Provider value={{DataSong}}>
          <Header/>
          <div className='grid grid-cols-3 h-screen-header-player bg-slate-700'>
              <DetailSong/>
              <ListSong/>
          </div>
        </Songs.Provider>
    </div>
  );
}

export default App;
