
import './App.css';

import FeedbackForm from './components/FeedbackForm';
import ReviewList from './components/ReviewList';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
<div>
  <center><h1>Movie Feedback</h1></center>
  <nav>
    <center><Link to="/feedback">Give Feedback</Link>
    <Link to="/reviews">Reviews</Link></center>
  </nav>
  <Routes>
    <Route path="/" element={<Navigate to="/feedback/"/>}/>
    <Route path="/feedback" element={<FeedbackForm></FeedbackForm>}/>
    <Route path="/reviews" element={<ReviewList></ReviewList>}/>
  </Routes>
</div>
    </Router>
  );
}

export default App;
