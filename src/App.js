import './App.css';
import { ListMovies } from './components/ListMovies';
import { RealtimeListMovies } from './components/RealtimeListMovies';
import { AddMovie } from './components/AddMovie';
import { UpdateMovie } from './components/UpdateMovie';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>React + Firebase = ❤️</h3>
      </header>
      <main className="App-main">
        <RealtimeListMovies />
        <ListMovies />
        <AddMovie />
        <UpdateMovie />
      </main>
    </div>
  );
};

export default App;
