import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../../hook/useAuth';
import swal from 'sweetalert';
import './AddFeedback.css'


const AddFeedback = () => {
    const { user } = useAuth();
    const { register } = useForm();
    const nameRef = useRef();
    const imgRef = useRef();
    const ratingRef = useRef();
    const descriptionRef = useRef();
    


    const handleUser = e => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const rating = ratingRef.current.value;


        const newUser = { name, img, rating, description };

        fetch('https://warm-oasis-87609.herokuapp.com/feedbacks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    swal("Good job!", "Feedback Successfully!", "success");



                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <div className="add-review mx-5">
                <h2 className="color-text mt-5">Add Feedback</h2>

                <form onSubmit={handleUser}>
                    <input type="text" placeholder="Name" ref={nameRef} value={user?.displayName} />
                    <input type="img" placeholder="image url" ref={imgRef} value={user?.img} />
                    <textarea {...register("description")} placeholder="description" ref={descriptionRef} />
                    <br />
                    <input type="rating" placeholder="Product rating Number" ref={ratingRef} />

                    <input className="btn btn-secondary" type="submit" value="Submit" />
                </form>


            </div>
        </div>
    );
};

export default AddFeedback;