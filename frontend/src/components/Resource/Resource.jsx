import { useState } from 'react';
import './Resource.css';

const resources = [
  {
    name: 'Math',
    content: {
      pdf: 'path/to/math.pdf',
      video: 'path/to/math.mp4',
      ppt: 'path/to/math.ppt'
    }
  },
  {
    name: 'Science',
    content: {
      pdf: 'path/to/science.pdf',
      video: 'path/to/science.mp4',
      ppt: 'path/to/science.ppt'
    }
  },
  {
    name: 'History',
    content: {
      pdf: 'path/to/history.pdf',
      video: 'path/to/history.mp4',
      ppt: 'path/to/history.ppt'
    }
  }
];

const Resource = () => {
  const [selectedResource, setSelectedResource] = useState(resources[0]); // Default to "Math"

  return (
    <div className="resource-container">
      <div className="sidebar">
        {resources.map((resource, index) => (
          <div 
            key={index} 
            className="resource-item" 
            onClick={() => setSelectedResource(resource)}
          >
            {resource.name}
          </div>
        ))}
      </div>
      <div className="content">
        {selectedResource ? (
          <div className="resource-content">
            <div className="card">
              <h2>{selectedResource.name}</h2>
              <div>
                <h3>PDF</h3>
                <a href={selectedResource.content.pdf} target="_blank" rel="noopener noreferrer">
                  {selectedResource.name} PDF
                </a>
              </div>
              <div>
                <h3>Video</h3>
                <a href={selectedResource.content.video} target="_blank" rel="noopener noreferrer">
                  {selectedResource.name} Video
                </a>
              </div>
              <div>
                <h3>PPT</h3>
                <a href={selectedResource.content.ppt} target="_blank" rel="noopener noreferrer">
                  {selectedResource.name} PPT
                </a>
              </div>
            </div>
          </div>
        ) : (
          <h2>Select a resource to view the content</h2>
        )}
      </div>
    </div>
  );
}

export default Resource;
