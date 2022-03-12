import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Rating from 'react-rating';
import './Feedback.css';

const Feedback = ({ feedback }) => {
    const { name, img, description, rating } = feedback;
    return (
        <div className="review">
            <Container>
                <Image className="w-25" src={img} roundedCircle />
                <h4 className="name_text my-2">{name}</h4>
                <small className="description_text">{description}</small>
                <br />
                <Rating
                    className="rating_color"
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>

            </Container>

        </div>
    );
};

export default Feedback;