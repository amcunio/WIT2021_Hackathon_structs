import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import SignInSide from './components/Login/SignInSide';
import { default as DoctorDashboard, default as PatientDashboard } from './components/PatientDashboard/Dashboard';

function App() {
  return (
    <>
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
