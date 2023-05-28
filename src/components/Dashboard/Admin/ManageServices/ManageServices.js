import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';
import './ManageServices.css';

const ManageServices = () => {
    const [manageServices, setManageServices] = useState([]);

    useEffect(() => {
        fetch('https://larningschool-server.onrender.com/services')
            .then(res => res.json())
            .then(data => setManageServices(data))
    }, [])


    const handleDelete = id => {
        const url = `https://larningschool-server.onrender.com/services/${id}`
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
                            }
                        });
                    const remaining = manageServices.filter(manageService => manageService._id !== id);
                    setManageServices(remaining);
                }

            })
    }

return (
        <div>
            <h2 className="mb-5">Manage Services</h2>

            <Container>
                <div className="manage-products">
                    {
                        manageServices.map(manageService => <div
                            key={manageService._id}>

                            <div className="manage-product">
                                <img className="w-50" src={manageService.img} alt="" />
                                <h4 className="name-text my-2">{manageService.name}</h4>
                                <small className="description-text">{manageService.describe}</small>
                                <h6 className="price-text"><p>Price: {manageService.price}</p></h6>
                                <button className="manageService_button" onClick={() => handleDelete(manageService._id)}>Remove</button>
                            </div>

                        </div>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default ManageServices;


    