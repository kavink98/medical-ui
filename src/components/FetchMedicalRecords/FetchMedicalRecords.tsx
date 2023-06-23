import React, { useState } from 'react';
import axios from 'axios';
import './FetchMedicalRecords.css';

const FetchMedicalRecords: React.FC = () => {
  const [searchType, setSearchType] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [medicalRecords, setMedicalRecords] = useState<any[]>([]);

  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let response;

      if (searchType === 'id') {
        response = await axios.get(`/api/medicaldata/${searchValue}`);
      } else if (searchType === 'patientID') {
        response = await axios.get(`/api/medicaldata/patient/${searchValue}`);
      }

      if (response && response.status === 200) {
        setMedicalRecords(response.data);
      } else {
        console.error('Failed to fetch medical records:', response?.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="fetch-medical-records">
      <h2>Fetch Medical Records</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="searchType">Search Type:</label>
          <select id="searchType" value={searchType} onChange={handleSearchTypeChange}>
            <option value="">-- Select Type --</option>
            <option value="id">ID</option>
            <option value="patientID">Patient ID</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="searchValue">Search Value:</label>
          <input
            type="text"
            id="searchValue"
            value={searchValue}
            onChange={handleSearchValueChange}
            required
          />
        </div>
        <button type="submit" className="fetch-button">
          Fetch Medical Records
        </button>
      </form>

      {medicalRecords.length > 0 && (
        <div className="medical-records">
          <h3>Medical Records:</h3>
          <ul>
            {medicalRecords.map((record) => (
              <li key={record.id}>
                <p>
                  <span className="record-field">ID:</span> {record.id}
                </p>
                <p>
                  <span className="record-field">Patient ID:</span> {record.patientID}
                </p>
                <p>
                  <span className="record-field">Patient Name:</span> {record.patientName}
                </p>
                <p>
                  <span className="record-field">Diagnosis:</span> {record.diagnosis}
                </p>
                <p>
                  <span className="record-field">Medications:</span> {record.medications}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FetchMedicalRecords;
