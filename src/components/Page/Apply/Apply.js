import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import useAuth from '../../../hook/useAuth';
import './Apply.css'
const Apply = () => {

    const { user } = useAuth();
    const { register } = useForm();
    const { servicesId } = useParams();
    const [apply, setApply] = useState({})
    

    useEffect(() => {
        fetch(`https://warm-oasis-87609.herokuapp.com/services/${servicesId}`)
        .then(res => res.json())
        .then(data => setApply(data))
      
    }, [servicesId])

    const nameRef = useRef();
    const imgRef = useRef();
    const addressRef = useRef();
    const PhoneNumberRef = useRef();
    const servicesRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();


    const handleUser = e => {

        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const address = addressRef.current.value;
        const phoneNumber = PhoneNumberRef.current.value;
        const services = servicesRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;

        const newUser = { phoneNumber, address, services, name, img, price, description };

        // fetch('https://desolate-sea-37549.herokuapp.com/orders', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newUser)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             swal("Good job!", "Order Place Successfully!", "success");
        //             e.target.reset();

        //         }
        //     })
        // e.preventDefault();



    }

    return (
        <div>
            <h2 className="">place Now</h2>
            <div className="order-product">
                <form onSubmit={handleUser}>

                    <input type="text" placeholder="Name" value={user?.displayName} />
                    <input type="email" placeholder="Email" value={user?.email} />
                    <input type="product name" placeholder="Product Name" ref={servicesRef} value={apply?.name} />
                    <input type="img" placeholder="Product img" ref={imgRef} value={apply?.img} />
                    <input type="price" placeholder="Price" ref={priceRef} value={apply?.price}/>
                    <textarea {...register("description")} placeholder="description" ref={descriptionRef} value={apply?.description} />
                    <br />
                    <input type="address" placeholder="Your Address" ref={addressRef} />
                    <input type="Phone" placeholder="Phone no." ref={PhoneNumberRef} />
                    <input className="btn btn-secondary" type="submit" value="Order Place" />
                </form>
            </div>
        </div>
    );
};

export default Apply;
                    