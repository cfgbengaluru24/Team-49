import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const UploadResourceModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [subjectName, setSubjectName] = useState('');
  const [topicName, setTopicName] = useState('');
  const [resourceType, setResourceType] = useState('');
  const [url, setUrl] = useState('');
  const addedBy = '60f6b5f7c0b0a0d5a8d2b2a5'; // fixed Volunteer ID
  const [status, setStatus] = useState('pending'); // status field

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!subjectName || !topicName || !resourceType || !url || !status) {
      alert('All fields are required');
      return;
    }

    const resource = {
      subjectName,
      topic: topicName,
      resources: [{
        type: resourceType,
        url: url,
        addedBy: addedBy,
        status: status
      }]
    };

    try {
      const response = await axios.post('http://localhost:3000/api/resources', resource);
      console.log('Resource uploaded successfully:', response.data);
      alert('Resource created successfully!');
      setShowModal(false);
    } catch (error) {
      console.error('There was an error uploading the resource:', error);
      alert('Error uploading resource');
    }
  };

  return (
    <div className="container mt-5">
      {/* Upload Button */}
      <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
        Upload Resource
      </button>

      {/* Upload Modal */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" aria-labelledby="uploadModalLabel" aria-hidden={!showModal}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="uploadModalLabel">Upload Resource</h5>
              <button type="button" className="close" aria-label="Close" onClick={() => setShowModal(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="subjectName">Subject Name</label>
                  <input type="text" className="form-control" id="subjectName" value={subjectName} onChange={(e) => setSubjectName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="topicName">Topic Name</label>
                  <input type="text" className="form-control" id="topicName" value={topicName} onChange={(e) => setTopicName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="resourceType">Resource Type</label>
                  <select className="form-control" id="resourceType" value={resourceType} onChange={(e) => setResourceType(e.target.value)} required>
                    <option value="">Select type</option>
                    <option value="pdf">PDF</option>
                    <option value="ppt">PPT</option>
                    <option value="video">Video</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="url">URL</label>
                  <input type="url" className="form-control" id="url" value={url} onChange={(e) => setUrl(e.target.value)} required />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default UploadResourceModal;
