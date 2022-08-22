import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import PaymentIcon from '@material-ui/icons/Payment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{height:'100vh',backgroundColor:'#373A47'}}>
      <List >
         <div style={{textAlign:'right',marginTop:'20px',marginRight:"20px"}}>
           <CloseIcon onClick={toggleDrawer(anchor,false)} style={{color:'white',fontSize:'40px'}}/>
         </div>
         <ListItem button style={{marginTop:"30px"}} onClick={handleClick}>
          <ListItemIcon><ImportContactsIcon style={{color:'white',fontSize:'30px'}}/></ListItemIcon>
          <ListItemText primary={<text style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>All Programmes</text>} />
          {open ? <ExpandLess style={{color:'white'}}/> : <ExpandMore style={{color:'white'}}/>}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to='/course/development/web-development' style={{textDecorationLine:'none'}}>
            <ListItem button onClick={()=>setState({right:false})} style={{paddingLeft:'60px',color:'white'}}>
              <ListItemText primary="Web Development" />
            </ListItem>
            </Link>
            <Link to='/course/development/java' style={{textDecorationLine:'none'}}>
            <ListItem button onClick={()=>setState({right:false})} style={{paddingLeft:'60px',color:'white'}}>
              <ListItemText primary="Core Java" />
            </ListItem>
            </Link>
            <Link to='/course/analytics/data-analytics' style={{textDecorationLine:'none'}}>
            <ListItem button onClick={()=>setState({right:false})} style={{paddingLeft:'60px',color:'white'}}>
              <ListItemText primary="Data Analytics" />
            </ListItem>
            </Link>
             <Link to='/course/analytics/tableau' style={{textDecorationLine:'none'}}>
            <ListItem button onClick={()=>setState({right:false})} style={{paddingLeft:'60px',color:'white'}}>
              <ListItemText primary="Tableau" />
            </ListItem>
            </Link>
          </List>
        </Collapse>
        <Link to='/contact' style={{textDecorationLine:'none'}}>
        <ListItem button onClick={()=>setState({right:false})} style={{textDecorationLine:'none'}}>
          <ListItemIcon><MailIcon style={{color:'white',fontSize:'30px'}}/></ListItemIcon>
          <ListItemText primary={<text style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>Contact Us</text>} />
        </ListItem>
        </Link>
        <Link to='/about' style={{textDecorationLine:'none'}}>
        <ListItem button onClick={()=>setState({right:false})}>
          <ListItemIcon><InfoIcon style={{color:'white',fontSize:'30px'}}/></ListItemIcon>
          <ListItemText primary={<text style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>About Us</text>} />
        </ListItem>
        </Link>

      </List>
      </div>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{fontSize:'30px',color:'#3f3a37'}}/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}