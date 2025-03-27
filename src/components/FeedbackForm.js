import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FeedbackForm(props) {
  const [form, setForm] = useState({
    name: "",
    movie: "",
    ratings: "",
    comments: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const existingReviews = JSON.parse(localStorage.getItem("reviews") || "[]"); 
    const updatedReviews = [...existingReviews, form];
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    alert("Thank you for your feedback!");
    navigate("/reviews");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); 
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Movie Feedback Form</h2>

      <div>
        <label>Name: </label>
        <input type="text" name="name" onChange={handleChange} value={form.name} required />
      </div>

      <div>
        <label>Movie: </label>
        <select name="movie" onChange={handleChange} value={form.movie} required>
          <option value="">Select</option>
          <option value="Fifty Shades">Fifty Shades</option>
          <option value="Game of Thrones">Game of Thrones</option>
          <option value="Fire">Fire</option>
        </select>
      </div>

      <div>
        <label>Rating (1-5): </label>
        <input
          type="number"
          name="ratings" 
          onChange={handleChange}
          min="1"
          max="5"
          value={form.ratings}
          required
        />
      </div>

      <div>
        <label>Comments: </label>
        <textarea name="comments" onChange={handleChange} value={form.comments}></textarea>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FeedbackForm;
