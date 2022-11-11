import AboutUsTemplate from './Templates/AboutUsTemplate/index';
import OurServices from './Templates/OurServices/index';
import BannerTemplate from './Templates/BannerTemplate/index';
import './App.css';

function App() {
  return (
    <div className="App container">
      <BannerTemplate />
      <AboutUsTemplate />
      <OurServices />
    </div>
  );
}

export default App;
