import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateMedicalRecord from './components/CreateMedicalRecord/CreateMedicalRecord';
import FetchMedicalRecords from './components/FetchMedicalRecords/FetchMedicalRecords';

function App() {
  return (
    <Router>
      <div className="centred">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/create-medical-record" Component={CreateMedicalRecord} />
          <Route path="/fetch-medical-record" Component={FetchMedicalRecords} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
