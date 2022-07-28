import './App.css';

import Header from './pages/header/Header';
import Body from './pages/body/Body';
import GetStarted from './components/getstarted/GetStarted';
import Contact from './components/contact/Contact';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <GetStarted/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
