import React from 'react';
import './Navigation.css';
import Logo from './../../assets/logo.png';
import Drawer from './Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ProgramItem from './ProgramItem';
import { Link } from 'react-router-dom';
import { PostData } from './../PostData';
import PositionedPopper from './Popper';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setSelectedIndex(0);
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="navigation-container">
      <div className="navigation-bar">
        <Link to="/" style={{ textDecorationLine: 'none' }}>
          <div className="edu-logo">
            <img src={Logo} alt="logo" />
            <text>Pustk Store</text>
          </div>
        </Link>
        <div className={'navigation-items'}>
          <Link to="/books">
            <button>Books</button>
          </Link>
          <Link to="/donate">
            <button>Donate</button>
          </Link>
          <Link to="/">
            <button>Notes</button>
          </Link>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
          <Link to="/about">
            <button>About Us</button>
          </Link>
        </div>
        <div>
          <PositionedPopper />
        </div>
      </div>
    </div>
  );
}
