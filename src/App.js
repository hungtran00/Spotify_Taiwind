import './App.css';
import DetailSong from './components/DetailSong';
import Header from './components/Header';
import ListSong from './components/ListSong';

function App() {
  return (
    <div className="">
        <Header/>
        <div className='grid grid-cols-3 h-screen-header-player bg-slate-700'>
            <DetailSong/>
            <ListSong/>
        </div>
    </div>
  );
}

export default App;
