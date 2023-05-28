import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {

    const [myBookings, setMyBookings] = useState([]);


    // const { user } = useAuth()


    useEffect(() => {
        fetch('https://larningschool-server.onrender.com/orders')
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [])

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://larningschool-server.onrender.com/services')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])




    const handleDelete = id => {
        const url = `https://larningschool-server.onrender.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                            } else {
                                swal("Your imaginary file is safe!");
                            }
                        });
                    const remaining = myBookings.filter(myBookings => myBookings._id !== id);
                    setMyBookings(remaining);
                }

            })
    }


    return (
        <div className='mt-5'>
            <h2 className="my-5 mt-5 orders_length"><span className="color-text">Your Order:
            </span><span className="color-length">{myBookings.length}</span> <span className="color-text">items</span></h2>
            <div className="reviews-container">



                {
                    myBookings.map(myBooking => <MyOrder

                        key={myBooking.name}
                        myBooking={myBooking}
                        handleDelete={handleDelete}
                        products={products}
                    >

                    </MyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;
