import './App.css';
import { Header } from './components/header/header';
import { MainContent } from './components/mainContent/mainContent';
import { TopRated } from './components/topRated/topRated';

function App() {
  return (
    <div>
      <Header />
      <TopRated />
      <MainContent />
    </div>
    )
}

export default App;