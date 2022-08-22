import React, { useState, useEffect } from 'react';
import './Contact.css';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
import Logo from './../../assets/logo.png';
import { BiDonateHeart } from 'react-icons/bi';
import Gmail from './../../assets/gmail.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SendEmail } from './../../Api';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Footer from '../home-page/Footer';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
  },
}));

const currencies = [
  {
    value: '0',
    label: 'General Query',
  },
  {
    value: '1',
    label: 'Regarding: Web Development Course',
  },
  {
    value: '2',
    label: 'Regarding: Core Java Course',
  },
  {
    value: '3',
    label: 'Regarding: Data Analytics Certification',
  },
  {
    value: '4',
    label: 'Regarding: Tableau Certification',
  },
];

export default function Donate() {
  const [currency, setCurrency] = React.useState('0');
  const matches = useMediaQuery('(min-width:768px)');
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [message, setMessage] = useState('');
  const classes = useStyles(matches);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, SetDescription] = useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  async function handleMail() {
    if (email === '') {
      setErrorText('please provide an email');
      return setError(true);
    }
    if (name === '') {
      setErrorText('please Enter your name');
      return setError(true);
    }
    if (description === '') {
      setErrorText('please provide a description');
      return setError(true);
    }
    var bodyData = new FormData();
    bodyData.append('action', 'message');
    bodyData.append('name', name);
    bodyData.append('email', email);
    bodyData.append('subject', subject);
    bodyData.append('message', description);
    setTitle('');
    setAuthor('');
    setMessage('Thanks for sending message, we will contact you soon!!');
    setEmail('');
    setName('');
    SetDescription('');
    setName('');
    // console.log(result);
  }

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  };

  return (
    <div>
      <div className={'contact-page'}>
        <div className={'contact-card'}>
          <div className={'email-logo'}>
            <BiDonateHeart
              size={55}
              style={{ fontSize: '50px', color: '#373a47' }}
            />
          </div>
          {message !== '' ? (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <text style={{ fontSize: '22px', color: 'black' }}>
                Thanks for Donating Book, We appreciate your contribution!
              </text>
            </div>
          ) : null}
          <div className={'form-container'}>
            <form className={classes.root}>
              <TextField
                id="standard-full-width"
                label="Enter your email"
                color="secondary"
                style={{ marginBlock: '10px' }}
                placeholder="example123@gmail.com"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  style: {
                    color: '#60264D',
                    fontWeight: 'bold',
                    fontSize: matches ? '20px' : '15px',
                  },
                }}
                InputLabelProps={{
                  style: { color: '#60264D', fontWeight: 'bold' },
                }}
                type="email"
              />
              <TextField
                label="Enter your name"
                style={{ marginBlock: '10px' }}
                InputProps={{
                  style: {
                    color: '#60264D',
                    fontWeight: 'bold',
                    fontSize: matches ? '20px' : '15px',
                  },
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{
                  style: { color: '#60264D', fontWeight: 'bold' },
                }}
                color="secondary"
                fullWidth
              />
              <TextField
                label="Book Title"
                style={{ marginBlock: '10px' }}
                InputProps={{
                  style: {
                    color: '#60264D',
                    fontWeight: 'bold',
                    fontSize: matches ? '20px' : '15px',
                  },
                }}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                InputLabelProps={{
                  style: { color: '#60264D', fontWeight: 'bold' },
                }}
                color="secondary"
                fullWidth
              />
              <TextField
                label="Book Author"
                style={{ marginBlock: '10px' }}
                InputProps={{
                  style: {
                    color: '#60264D',
                    fontWeight: 'bold',
                    fontSize: matches ? '20px' : '15px',
                  },
                }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                InputLabelProps={{
                  style: { color: '#60264D', fontWeight: 'bold' },
                }}
                color="secondary"
                fullWidth
              />
              <TextField
                label="Book Description"
                style={{ marginBlock: '10px' }}
                InputProps={{
                  style: {
                    color: '#60264D',
                    fontWeight: 'bold',
                    fontSize: matches ? '20px' : '15px',
                  },
                }}
                InputLabelProps={{
                  style: { color: '#60264D', fontWeight: 'bold' },
                }}
                value={description}
                onChange={(e) => SetDescription(e.target.value)}
                color="secondary"
                multiline
                fullWidth
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '30px',
                }}
              >
                <Button
                  onClick={() => handleMail()}
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: 'rgb(90,90,90)',
                    paddingBlock: '8px',
                    fontSize: '15px',
                  }}
                  disableElevation
                >
                  Donate
                </Button>
              </div>
            </form>
          </div>
        </div>
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={handleCloseError}
        >
          <Alert onClose={handleCloseError} severity="error">
            {errorText}
          </Alert>
        </Snackbar>
      </div>
      <Footer />
    </div>
  );
}
