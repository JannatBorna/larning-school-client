import React, { useState } from 'react';
import { Button, TextField, Alert } from '@mui/material';
import swal from 'sweetalert';
import './MakeAdmin.css';
import { Box } from '@mui/material';


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
        <div>

              <div className="my-5">
                    {/* <form onSubmit={handleAdminSubmit} className='make_admin'>
                        <TextField
                            sx={{ width: '20%' }}
                            label="Email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" /> 
                            
                            
                            <Button className='admin_button' type="submit" variant="contained">Make Admin</Button>
                    </form> */}

            <form onSubmit={handleAdminSubmit} className='make_admin'>   
                <Box
                    sx={{
                        width: 600,
                        maxWidth: '100%',
                        display: 'flex'
                    }}
                >
                        <TextField onBlur={handleOnBlur} fullWidth label="Email" id="fullWidth" />

                    <button className='admin_button mx-4' type="submit" variant="contained">Make Admin</button>
                </Box>
            </form>

             
                <br />
                <br />
                <br />

                {
                    adminSuccess && <Alert severity="success">Made Admin Successfully!</Alert>
                }
  </div>  
           

        </div>


    );
};

export default MakeAdmin;