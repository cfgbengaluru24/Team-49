import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FeedbackTable = ({ feedbackType }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/feedbacks');
        setFeedbacks(response.data[feedbackType]);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  // useEffect(() => {
    // (async () => {
      // const labels1 = await axios.post('http://localhost:5000/predict', { feedbacks: feedbacks?.map(feedback => feedback.answer3) });
      // setLabels(labels.data);
      // console.log(labels1.data);
      // setLabels(labels);
    // })();
  // }, [feedbacks]);

  const renderTableRows = (feedbacks) => {
    return feedbacks.map((feedback, index) => (
      <tr key={feedback._id}>
        <td>{feedback.from_username?.username || 'N/A'}</td>
        <td>{feedback.to_username?.username || 'N/A'}</td>
        <td>{feedback.answer1}</td>
        <td>{feedback.answer2}</td>
        <td>{feedback.answer3}</td>
        {/* <td>{labels[index] || 'N/A'}</td> */}
      </tr>
    ));
  };

  return (
    <div>
      <h2>Feedback Table</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>From Username</th>
            <th>To Username</th>
            <th>Answer 1</th>
            <th>Answer 2</th>
            <th>Comment</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.length > 0 ? renderTableRows(feedbacks) : <tr><td colSpan="5">No feedback available</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
