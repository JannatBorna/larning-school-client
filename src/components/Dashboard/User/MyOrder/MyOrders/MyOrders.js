import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState({})

    useEffect(() => {
        fetch('https://warm-oasis-87609.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[])


    return (
        <div>
            <h2>My Orders:{myOrders.lenth} </h2>
        </div>
    );
};

export default MyOrders;