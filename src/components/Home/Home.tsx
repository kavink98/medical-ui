
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="centred">
      <h1 className="home-title">Medical Records App</h1>
      <div className="home-buttons">
        <Link to="/create-medical-record" className="home-button">
          Create Medical Record
        </Link>
        <Link to="/fetch-medical-record" className="home-button">
          Fetch Medical Record
        </Link>
        <Link to="/transfer-medical-record" className="home-button">
          Transfer Medical Record
        </Link>
      </div>
    </div>
  );
}

export default Home;
