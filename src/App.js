import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import MegaMenu from './components/MegaMenu/MegaMenu';
import SlideEffect from './components/SlideEffect/SlideEffect';
import SlideRow from './components/SlideRow/SlideRow';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <MegaMenu/>
      <SlideEffect/>
      <LandingPage/>
      <SlideRow/>
      <Footer/>
    </div>
  );
}

export default App;
