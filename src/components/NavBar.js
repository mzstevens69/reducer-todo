import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
   
    
    return (
        <div>
            <AppBar position='static'>
                <ToolBar>
                    <Typography align='center' variant='title' color='inherit' >
                        My Todo List
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )

}
export default NavBar;