import './App.css';
import { Header } from './components/header/index';
import { Logo } from './components/header/Logo';

function App() {
  return (
    <div className="App">
      <Header>
          <Logo />
      </Header>
    </div>
  );
}

export default App;