import React, { useEffect, useState } from 'react';
import './Course.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Laptop from './../../assets/laptop.jpg';
import { Button } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import Footer from './../home-page/Footer';
import { PostData } from './../PostData';
import { MdContentCopy } from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Modal from 'react-modal';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useHistory, useLocation } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function BookView() {
  const [price, setPrice] = useState(
    Math.floor(Math.random() * (1000 - 200)) + 200
  );
  const history = useHistory();
  const state = useLocation();
  console.log('running');
  console.log(state);
  const data = state?.data;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      {data ? (
        <div className={'course-page'}>
          <div className={'course-owerview'}>
            <div class={'left-view-course'}>
              <div
                style={{
                  marginTop: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <text className={'title-course'}>{data?.title}</text>
                <text className={'tagline-course'}>{data?.author}</text>
                {/* <text className={'tagline-course'} style={{marginTop:10}}>Categories: 
                            {typeof(data?.categories)=== String ? data.categories : null}
                        </text> */}
                {/* <Button endIcon={<ShareIcon/>} style={{color:'white',borderColor:'white',borderWidth:'2px'}} varient='outlined'>Share</Button> */}
                <div>
                  <Button
                    onClick={() => {
                      window.open(data.url);
                    }}
                    color="secondary"
                    variant="outlined"
                    style={{
                      borderWidth: '1px',
                      fontSize: '15px',
                      fontWeight: 'bold',
                      color: '#61264B',
                      borderColor: '#61264B',
                      marginTop: '50px',
                      marginRight: '10px',
                      marginBottom: '20px',
                    }}
                  >
                    VIEW NOW
                  </Button>
                </div>
              </div>
              {/* <div class='tools-images'>
                        {data.skillImages.map(value=>{
                            return <img src={value.image} alt={value.title}/>
                        })} 
                    </div> */}
            </div>
            <div className={'right-view-course'}>
              <div className={'card-course'}>
                <img src={data.cover} />
                <text
                  style={{
                    fontSize: '25px',
                    fontWeight: 'bolder',
                    color: 'rgb(58, 58, 58)',
                    marginLeft: '5px',
                  }}
                >
                  FREE
                </text>
                <Button
                  color="secondary"
                  variant="outlined"
                  style={{
                    margin: '10px',
                    borderWidth: '2px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                  onClick={() => {
                    window.open(data.url);
                  }}
                >
                  VIEW NOW
                </Button>
                {/* <ul className={'include-poinst'}>
                           {data.include.map(data=>{
                               return <li>{data}</li>
                           })}
                         </ul> */}
              </div>
            </div>
          </div>
          <div className="course-data">
            <div class="learning-course">
              <div>
                <text
                  style={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: '#373a47',
                  }}
                >
                  Description:
                </text>
                <br />
                <text>{data.description}</text>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : null}
    </div>
  );
}
