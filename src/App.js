import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import SignInSide from './components/Login/SignInSide';
import { default as PatientDashboard } from './components/PatientDashboard/Dashboard';
import { default as DoctorDashboard } from './components/DoctorDashboard/Dashboard';
import { Helmet } from 'react-helmet'
import symbol from './assets/symbol.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={symbol} />
      </Helmet>
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/" exact>
            <SignInSide />
          </Route>
          <Route path="/patient">
            <PatientDashboard />
          </Route>
          <Route path="/doctor">
            <DoctorDashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
