import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './AddServices.css'


const AddServices = () => {

    const { register } = useForm();

    const nameRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();



    const handleUser = e => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;


        const newUser = { name, img, description, price };

        fetch('https://warm-oasis-87609.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    swal("Good job!", "Product Add Successfully!", "success");



                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <div className="add-review">
                <h2>Add <span className="color-product">P</span>roduct</h2>

                <form onSubmit={handleUser}>
                    <input type="text" placeholder="Product Name" ref={nameRef} />
                    <input {...register("img")} placeholder="image url" ref={imgRef} />
                    <textarea {...register("description")} placeholder="description" ref={descriptionRef} />
                    <br />
                    <input type="number" {...register(" price")} placeholder="Product Price" ref={priceRef} />
                    <input className="btn btn-secondary" type="submit" value="Add Now" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;




// import React from 'react';

// const AddServices = () => {
//     return (
//         <div>
//             <h2>add Services</h2>
//         </div>
//     );
// };

// export default AddServices;