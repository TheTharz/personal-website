import HomePage from './pages/HomePage';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div>
      <ParallaxProvider>
        <HomePage />
      </ParallaxProvider>
    </div>
  );
}

export default App;
