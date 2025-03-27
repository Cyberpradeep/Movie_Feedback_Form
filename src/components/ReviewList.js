import React, { useEffect, useState } from 'react'

export default function ReviewList() {

    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem("reviews")||"[]");
        setReviews(stored);
    },[]);

  return (
    <div className="review-list">
    <h2>   All Movie Reviews</h2>
    {reviews.length === 0 ? (
        <p>No Reviews Submitted Yet</p>
    ) : (
        <ul>
            {reviews.map((review, index) => (
                <li key={index} className="review-card">
                    <strong>{review.name}</strong> reviewed <em>{review.movie}</em>
                    <br/>
                    Rating: {review.ratings}/5
                    <br />
                    {review.command && <p>{review.command}</p>}
                </li>
            ))}
        </ul>
    )}
</div>

  )
}
