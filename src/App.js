import { Route, Routes} from 'react-router-dom';

import AboutUsTemplate from './Templates/AboutUsTemplate/index';
import OurServices from './Templates/OurServices/index';
import BannerTemplate from './Templates/BannerTemplate/index';
import PricingPlan from './Templates/PricingPlan';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import './App.css';
import ErrorPage from './Pages/ErrorPage/index';
import LayoutPage from './Pages/LayoutPage';
import RagistrationPage from './Pages/RagistrationPage';


function App() {


  return (
    <Routes>
      <Route path='/' element={<LayoutPage />}>
        <Route path='/' element={<RagistrationPage/>}/>
        <Route path='/main' element={
          <Container>
            <div className="App ">
              <BannerTemplate />
              <AboutUsTemplate />
              <OurServices />
              <PricingPlan />
            </div>
          </Container>
        } />
        <Route path='*' element={<ErrorPage />} />

      </Route>

    </Routes>


  );
}

export default App;
