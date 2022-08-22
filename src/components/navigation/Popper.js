import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import {FaUserCircle} from 'react-icons/fa'
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    zIndex: 100
  },
  typography: {
    padding: theme.spacing(2),
    zIndex:100
  },
}));

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();
  const {currentUser, loginWithGoogle, logout} = useContext(AuthContext);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div>
        <Popper open={open} style={{zIndex: 100}}  anchorEl={anchorEl} placement={placement} transition>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                <Paper style={{display:'flex',flexDirection: 'column', justifyContent: 'center', padding:10}}>
                {currentUser?
                <>
                 Signed In as : {currentUser.email}
                 <Button onClick={() => logout()} color='secondary' style={{marginTop:10}} variant='contained' size='small'>Log Out</Button>
                </>
                :
                    <>
                    <Typography className={classes.typography}>You're not Logged In</Typography>
                    <Button onClick={() => loginWithGoogle()} style={{marginTop:10}} size='small' color='primary' variant='contained'>Login with Google</Button>
                    </>}
                </Paper>
            </Fade>
            )}
        </Popper>
        {/* <Button onClick={handleClick('bottom-end')}>bottom-end</Button> */}

        <FaUserCircle onClick={handleClick('bottom-end')} size={30} color='black'/>
    </div>
  );
}