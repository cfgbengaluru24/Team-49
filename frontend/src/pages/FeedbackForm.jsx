import { useEffect, useState } from 'react';
import "./FeedbackForm.css"
import axios from 'axios';

const FeedbackForm = () => {
  const [usernames, setUsernames] = useState([]);
  const [formData, setFormData] = useState({
    to: '',
    score: '',
    relevance: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/feedback/${localStorage.getItem("position") == "student" ? "volunteer" : "student"}s`)
      .then((response) => {
        setUsernames(response.data.usernames);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { to, score, relevance, comments } = formData;
    const data = {
      from_username: JSON.parse(localStorage.getItem("user")).username,
      to_username: to,
      answer1: score,
      answer2: relevance,
      answer3: comments,
    };
    axios
      .post(`http://localhost:3000/api/feedback/${localStorage.getItem("position")}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log('Form data submitted:', formData);
    alert("Feedback submitted successfully!");
    setFormData({
      to: '',
      score: '',
      relevance: '',
      comments: '',
    });
  };

  return (
    <div className="container">
    <h1>Feedback</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <span>To:</span>
        <input list="usernames" type="text" name="to" value={formData.to} onChange={handleChange} required />
        <datalist id="usernames">
          { usernames.map(username => <option key={username._id} value={username.username} />) }
        </datalist>
      </div>
      <div>
        <span>Ques 1: Score the class:</span>
        <div className="flex-container">
          <label>
            <input
              type="radio"
              name="score"
              value="Excellent"
              checked={formData.score === "Excellent"}
              onChange={handleChange}
              required
            />
            Excellent
          </label>
          <label>
            <input
              type="radio"
              name="score"
              value="Good"
              checked={formData.score === "Good"}
              onChange={handleChange}
            />
            Good
          </label>
          <label>
            <input
              type="radio"
              name="score"
              value="Average"
              checked={formData.score === "Average"}
              onChange={handleChange}
            />
            Average
          </label>
          <label>
            <input
              type="radio"
              name="score"
              value="Poor"
              checked={formData.score === "Poor"}
              onChange={handleChange}
            />
            Poor
          </label>
          <label>
            <input
              type="radio"
              name="score"
              value="Terrible"
              checked={formData.score === "Terrible"}
              onChange={handleChange}
            />
            Terrible
          </label>
        </div>
      </div>
      <div>
        <span>Ques 2: How relevant was the content?</span>
        <div className="flex-container">
          <label>
            <input
              type="radio"
              name="relevance"
              value="Excellent"
              checked={formData.relevance === "Excellent"}
              onChange={handleChange}
              required
            />
            Excellent
          </label>
          <label>
            <input
              type="radio"
              name="relevance"
              value="Good"
              checked={formData.relevance === "Good"}
              onChange={handleChange}
            />
            Good
          </label>
          <label>
            <input
              type="radio"
              name="relevance"
              value="Average"
              checked={formData.relevance === "Average"}
              onChange={handleChange}
            />
            Average
          </label>
          <label>
            <input
              type="radio"
              name="relevance"
              value="Poor"
              checked={formData.relevance === "Poor"}
              onChange={handleChange}
            />
            Poor
          </label>
          <label>
            <input
              type="radio"
              name="relevance"
              value="Terrible"
              checked={formData.relevance === "Terrible"}
              onChange={handleChange}
            />
            Terrible
          </label>
        </div>
      </div>
      <div>
        <span>Comments:</span>
        <div>
            <textarea name="comments" value={formData.comments} onChange={handleChange} />
      </div>
      </div>
      <div className="submit-container">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  );
};

export default FeedbackForm;
