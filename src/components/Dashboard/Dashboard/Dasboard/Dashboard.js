import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link, Outlet} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../../hook/useAuth';
import DashboardHome from './../DashboardHome/DashboardHome';
import './Dashboard.css'





const drawerWidth = 185;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/" className="decoration"><Button className="dash-button my-3" color="inherit">Home</Button></Link>

            <br />

            <Link to="/ourServices" className="decoration"><Button className="dash-button my-3" color="inherit">Services</Button></Link>

            <br />

            {
                !admin && <Box>
                    
                    <Link to={`/dashboard/myOrders`} className="decoration"><Button className="dash-button my-3" color="inherit">My Order</Button></Link>

                    <br />

                    <Link to={`/dashboard/addFeedback`} className="decoration"><Button className="dash-button my-3" color="inherit">Add Feedback</Button></Link>

                    <br />

                    <Button onClick={logOut}
                        className="btn-logout mx-2" variant="secondary">Logout
                    </Button>
                </Box>
            }

            
            {
                admin && <Box>
                    <Link to="/dashboard/makeAdmin" className="decoration"><Button className="dash-button my-3" color="inherit">Make Admin</Button></Link>

                    <br />

                    <Link to={`/dashboard/addServices`} className="decoration"><Button className="dash-button my-3" color="inherit">Add Services</Button></Link>

                    <br />

                    <Link to={`/dashboard/manageAllOrder`} className="decoration"><Button className="dash-button my-3" color="inherit">Manage All Order</Button></Link>

                    <br />

                    <Link to={"/dashboard/manageServices"} className="decoration"><Button className="dash-button my-3" color="inherit">Manage Services</Button></Link>
                </Box>
            }



        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'cadetblue',
                    height: '15%',
                    color: 'Black'

                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>

                    <Typography>
                        {
                            admin && <Box>
                                <Button onClick={logOut}
                                    className="btn-logout mx-5" variant="secondary">Logout
                                </Button>
                            </Box>
                        }


                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

            </Box>

            <Typography>
                <DashboardHome></DashboardHome>
            </Typography>

            <Outlet />
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;