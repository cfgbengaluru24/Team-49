import axios from 'axios';
import { useEffect, useState } from 'react';
import './VolunteerResource.css';
import Button from '@mui/material/Button';

import {Link} from 'react-router-dom';
import AddResource from "../AddResource/AddResource"

const VolunteerResource = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/volunteer-resources')
      .then(response => {
        const formattedSubjects = formatData(response.data.resources);
        setSubjects(formattedSubjects);
        if (formattedSubjects.length > 0) {
          setSelectedSubject(formattedSubjects[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching resources:', error);
      });
  }, []);

  const formatData = (data) => {
    // Transform the API data into the required format
    const subjects = [];
    data.forEach(item => {
      let subject = subjects.find(sub => sub.name === item.subjectName);
      if (!subject) {
        subject = {
          name: item.subjectName,
          chapters: []
        };
        subjects.push(subject);
      }
      subject.chapters.push({
        name: item.topic,
        content: item.resources.reduce((acc, resource) => {
          acc[resource.type] = resource.url;
          return acc;
        }, {})
      });
    });
    return subjects;
  };

  

  return (
    <div className="resource-container">
      <div className="sidebar">
        <>{subjects.map((subject, index) => (
          <div 
            key={index} 
            className="subject-item" 
            onClick={() => setSelectedSubject(subject)}
          >
            {subject.name}
          </div>
          
        ))}</>
        <AddResource />

      </div>
      <div className="content">
        {selectedSubject ? (
          <div className="resource-content">
             <h2 style={{textAlign: 'left', paddingLeft:"20px"}}>{selectedSubject.name}</h2>
            <div className="res-cards">
            {selectedSubject.chapters.map((chapter, index) => (
              <div key={index} className="card">
                <h3>{chapter.name}</h3>
                {chapter.content.pdf && (
                  <div>
                    
                    <a href={chapter.content.pdf} target="_blank" rel="noopener noreferrer">
                      {selectedSubject.name} {chapter.name} PDF
                    </a>
                  </div>
                )}
                {chapter.content.video && (
                  <div>
                    
                    <a href={chapter.content.video} target="_blank" rel="noopener noreferrer">
                      {selectedSubject.name} {chapter.name} Video
                    </a>
                  </div>
                )}
                {chapter.content.ppt && (
                  <div>
                    
                    <a href={chapter.content.ppt} target="_blank" rel="noopener noreferrer">
                      {selectedSubject.name} {chapter.name} PPT
                    </a>
                  </div>
                )}
              </div>
            ))}</div>
            
          </div>
        ) : (
          <h2>Select a subject to view the chapters</h2>
        )}
      </div>
    </div>
  );
};

export default VolunteerResource;
