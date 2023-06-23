import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateMedicalRecord from './components/CreateMedicalRecord/CreateMedicalRecord';
import FetchMedicalRecords from './components/FetchMedicalRecords/FetchMedicalRecords';
import TransferMedicalRecord from './components/TransferMedicalRecord/TransferMedicalRecord';

function App() {

  const [selectedValue, setSelectedValue] = useState('org1');

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Router>
      <div className="centred">
        <select value={selectedValue} onChange={handleDropdownChange}>
          <option value='org1'>Healthcare Provider 1</option>
          <option value='org2'>Healthcare Provider 2</option>
        </select>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/create-medical-record" Component={() => <CreateMedicalRecord org={selectedValue} />} />
          <Route path="/fetch-medical-record" Component={() => <FetchMedicalRecords org={selectedValue} />} />
          <Route path="/transfer-medical-record" Component={() => <TransferMedicalRecord org={selectedValue} />} />
        </Routes>
        <div className="home-button-container">
        <Link to="/" className="home-button">Home</Link>
      </div>
      </div>
    </Router>
  );
}

export default App;
