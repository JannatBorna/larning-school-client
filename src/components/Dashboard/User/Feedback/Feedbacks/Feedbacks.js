import React, { useEffect, useState } from 'react';
import Feedback from '../Feedback/Feedback';
import './Feedbacks.css'

const Feedbacks = () => {
     const [feedbacks, setFeedback] = useState([])

     useEffect(() => {
          fetch('/Review.json')
          .then(res => res.json())
          .then(data => setFeedback(data))
     }, [])
    return (
      <div>
             <h2 className="student_feedback">Student Feedback</h2>
             
             <div className="feedbacks_container">
               
                {
                    feedbacks.map(feedback => <Feedback
                        key={feedback.name}
                        feedback={feedback}
                    >

                    </Feedback>)
                }
            </div>
      </div>
    );
};

export default Feedbacks;