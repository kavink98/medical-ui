import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateMedicalRecord.css';

function CreateMedicalRecord() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    patientID: '',
    patientName: '',
    diagnosis: '',
    medications: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic here to submit the form data
    console.log(formData);
    // Reset the form after submission
    setFormData({
      id: '',
      patientID: '',
      patientName: '',
      diagnosis: '',
      medications: '',
    });
    // Navigate back to the home page
    navigate('/');
  };

  return (
    <div className="create-medical-record-container">
      <h2 className="create-medical-record-title">Create Medical Record</h2>
      <form className="create-medical-record-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="patientID">Patient ID:</label>
          <input type="text" id="patientID" name="patientID" value={formData.patientID} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input type="text" id="patientName" name="patientName" value={formData.patientName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="diagnosis">Diagnosis:</label>
          <textarea id="diagnosis" name="diagnosis" value={formData.diagnosis} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="medications">Medications:</label>
          <textarea id="medications" name="medications" value={formData.medications} onChange={handleChange} />
        </div>
        <button type="submit" className="create-medical-record-button">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateMedicalRecord;
