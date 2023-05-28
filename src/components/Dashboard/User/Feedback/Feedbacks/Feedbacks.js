import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Feedback from '../Feedback/Feedback';
import './Feedbacks.css'

const Feedbacks = () => {
     const [feedbacks, setFeedback] = useState([])

     useEffect(() => {
         fetch('https://larningschool-server.onrender.com/feedbacks')
          .then(res => res.json())
          .then(data => setFeedback(data))
     }, [])
    return (
      <div>
            <Container>
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
            </Container>
      </div>
    );
};

export default Feedbacks;