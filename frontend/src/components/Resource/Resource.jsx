// import { useState } from 'react';
// import './Resource.css';

// const subjects = [
//   {
//     name: 'Math',
//     chapters: [
//       {
//         name: 'Chapter 1',
//         content: {
//           pdf: 'path/to/math_chapter1.pdf',
//           video: 'path/to/math_chapter1.mp4',
//           ppt: 'path/to/math_chapter1.ppt'
//         }
//       },
//       {
//         name: 'Chapter 2',
//         content: {
//           pdf: 'path/to/math_chapter2.pdf',
//           video: 'path/to/math_chapter2.mp4',
//           ppt: 'path/to/math_chapter2.ppt'
//         }
//       },
//       {
//         name: 'Chapter 3',
//         content: {
//           pdf: 'path/to/math_chapter3.pdf',
//           video: 'path/to/math_chapter3.mp4',
//           ppt: 'path/to/math_chapter3.ppt'
//         }
//       }
//     ]
//   },
//   {
//     name: 'Science',
//     chapters: [
//       {
//         name: 'Chapter 1',
//         content: {
//           pdf: 'path/to/science_chapter1.pdf',
//           video: 'path/to/science_chapter1.mp4',
//           ppt: 'path/to/science_chapter1.ppt'
//         }
//       },
//       {
//         name: 'Chapter 2',
//         content: {
//           pdf: 'path/to/science_chapter2.pdf',
//           video: 'path/to/science_chapter2.mp4',
//           ppt: 'path/to/science_chapter2.ppt'
//         }
//       },
//       {
//         name: 'Chapter 3',
//         content: {
//           pdf: 'path/to/science_chapter3.pdf',
//           video: 'path/to/science_chapter3.mp4',
//           ppt: 'path/to/science_chapter3.ppt'
//         }
//       }
//     ]
//   }
// ];

// const Resource = () => {
//   const [selectedSubject, setSelectedSubject] = useState(subjects[0]); // Default to "Math"

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     console.log('File selected:', file);
//     // Handle file upload logic here
//   };

//   return (
//     <div className="resource-container">
//       <div className="sidebar">
//         {subjects.map((subject, index) => (
//           <div 
//             key={index} 
//             className="subject-item" 
//             onClick={() => setSelectedSubject(subject)}
//           >
//             {subject.name}
//           </div>
//         ))}
//         <div className="upload-container">
//           <input 
//             type="file" 
//             id="file-upload" 
//             style={{ display: 'none' }} 
//             onChange={handleFileUpload} 
//           />
//           <label htmlFor="file-upload" className="upload-button">
//             Upload File
//           </label>
//         </div>
//       </div>
//       <div className="content">
//         {selectedSubject ? (
//           <div className="resource-content">
//             <h2>{selectedSubject.name}</h2>
//             {selectedSubject.chapters.map((chapter, index) => (
//               <div key={index} className="card">
//                 <h3>{chapter.name}</h3>
//                 <div>
//                   <h4>PDF</h4>
//                   <a href={chapter.content.pdf} target="_blank" rel="noopener noreferrer">
//                     {selectedSubject.name} {chapter.name} PDF
//                   </a>
//                 </div>
//                 <div>
//                   <h4>Video</h4>
//                   <a href={chapter.content.video} target="_blank" rel="noopener noreferrer">
//                     {selectedSubject.name} {chapter.name} Video
//                   </a>
//                 </div>
//                 <div>
//                   <h4>PPT</h4>
//                   <a href={chapter.content.ppt} target="_blank" rel="noopener noreferrer">
//                     {selectedSubject.name} {chapter.name} PPT
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <h2>Select a subject to view the chapters</h2>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Resource;



import axios from 'axios';
import { useEffect, useState } from 'react';
import './Resource.css';

const Resource = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/resources')
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
        {subjects.map((subject, index) => (
          <div 
            key={index} 
            className="subject-item" 
            onClick={() => setSelectedSubject(subject)}
          >
            {subject.name}
            
          </div>
        ))}
        
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

export default Resource;