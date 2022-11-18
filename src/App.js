import AboutUsTemplate from './Templates/AboutUsTemplate/index';
import OurServices from './Templates/OurServices/index';
import BannerTemplate from './Templates/BannerTemplate/index';
import PricingPlan from './Templates/PricingPlan';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <Container>
      <div className="App ">
        <BannerTemplate />
        <AboutUsTemplate />
        <OurServices />
        <PricingPlan />
      </div>

    </Container>

  );
}

export default App;
