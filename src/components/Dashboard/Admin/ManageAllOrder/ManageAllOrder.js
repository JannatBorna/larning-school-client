import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';
import './ManageAllOrder.css';


const ManageAllOrder = () => {

    const [manageAllOrders, setManageAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://larningschool-server.onrender.com/orders')
            .then(res => res.json())
            .then(data => setManageAllOrders(data))
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
                    const remaining = manageAllOrders.filter(manageAllOrder => manageAllOrder._id !== id);
                    setManageAllOrders(remaining);
                }
            })
    }

    const handleUpdate = id => {
        swal("Good job!", "Update Successfully!", "success");
        const url = `https://larningschool-server.onrender.com/orders/${id}`
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {

                if (data.updateCount) {

                    const remaining = manageAllOrders.filter(manageAllOrder => manageAllOrder._id !== id);
                    setManageAllOrders(remaining);
                }

            })
        }


    return (
        <div className='manage_all'>
            <h2 className="mb-5 mt-5 manage_text">Manage All Order</h2>

            <Container>
                <div className="manageALL-order">
                    {
                        manageAllOrders.map(manageAllOrder => <div
                            key={manageAllOrder._id}>

                            <div className="manage-product">
                                <img className="w-50" src={manageAllOrder.img} alt="" />
                                <h4 className="name-text my-2">{manageAllOrder.name}</h4>
                                <small className="description-text">{manageAllOrder.describe}</small>
                                <h6 className="price-text"><p>Price:$ {manageAllOrder.price}</p></h6>

                                <button className="manageAll_button mx-5" onClick={() => handleUpdate(manageAllOrder._id)}>Update</button>
                                
                                <button className="manageAll_button" onClick={() => handleDelete(manageAllOrder._id)}>Delete</button>
                            </div>

                        </div>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default ManageAllOrder;
