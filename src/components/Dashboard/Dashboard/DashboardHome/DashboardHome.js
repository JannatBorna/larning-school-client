import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../../hook/useAuth';
import admin1 from '../../../../image/dashboard/admin.jpg';
import user1 from '../../../../image/dashboard/user.png';
import './DashboardHome.css'


const DashboardHome = () => {
    const { admin, user } = useAuth();
    return (
        <div className="admin-image">


            {
                admin && <Box>
                    <h2 className='mt-5 dashboard_user'>Welcome to Admin Dashboard ~~ <span className="display-name">{user.displayName}</span></h2>
                    <img className="w-50" src={admin1} alt="" />
                </Box>
            }

            {
                !admin && <Box>
                    <h2 className='dashboard_user'>Welcome to user Dashboard ~~ <span className="display-name">{user.displayName}</span></h2>
                    <img className="w-50" src={user1} alt="" />
                </Box>
            }


        </div>
    );
};

export default DashboardHome;