import React, { useState } from 'react';
import { Button, TextField, Alert } from '@mui/material';
import swal from 'sweetalert';
import './MakeAdmin.css';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://warm-oasis-87609.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    swal("Good job!", "Admin Create Successfully!", "success");

                    setAdminSuccess(true); console.log(data)
                }

            })


        e.preventDefault()
    }


    return (
        <div >
            <h2 className="my-4 admin_text">Make An Admin</h2>


            <div className="my-5">
                <form onSubmit={handleAdminSubmit} className='make_admin'>
                    <TextField
                        sx={{ width: '70%' }}
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />

                        <br />
                    <br />

                    <button className='admin_button' type="submit" variant="contained">Make Admin</button>

                </form>

                {
                    adminSuccess && <Alert severity="success">Made Admin</Alert>
                }

            </div>

        </div>


    );
};

export default MakeAdmin;