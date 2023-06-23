import { useState } from 'react';
import axios from 'axios';
//import './TransferMedicalRecord.css';

interface MedicalRecord {
    id: string;
    patientID: string;
    patientName: string;
    diagnosis: string;
    medications: string;
}

function TransferMedicalRecord(props: { org: string }) {
    const org = props.org
    const [id, setId] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleTransfer = async () => {
        try {
            await axios.get(`/api/medicaldata/${id}/transfer`, {
                headers: {
                    org: org
                }
            });
            setError(null);
            console.log('Medical record transferred successfully.');
        } catch (error) {
            setError('Error transferring medical record');
        }
    };

    return (
        <div className="medical-record-fetch-container">
            <h2 className="medical-record-fetch-title">Fetch Medical Record</h2>
            <form
                className="medical-record-fetch-form"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter ID"
                    className="medical-record-fetch-input"
                />
                <button
                    type="button"
                    className="medical-record-fetch-button"
                    onClick={handleTransfer}
                >
                    Transfer
                </button>
            </form>
            {error && <p className="medical-record-fetch-error">{error}</p>}
        </div>
    );
}

export default TransferMedicalRecord;
