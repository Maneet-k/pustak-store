import React, { useState } from 'react';
import './About.css';
import Gmail from './../../assets/gmail.png';
import InfoIcon from '@material-ui/icons/Info';
import Footer from '../home-page/Footer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from './../../assets/logo.png';

export default function Contact() {
  window.scrollTo(0, 0);
  const matches = useMediaQuery('(min-width:768px)');

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className={'contact-page'} style={{ paddingBottom: '10px' }}>
        <div className={'contact-card'}>
          <div className={'email-logo'}>
            <InfoIcon style={{ fontSize: '50px', color: '#62264A' }} />
          </div>
          <text
            style={{ fontSize: '25px', fontWeight: 'bold', color: '#62264A' }}
          >
            About Us
          </text>
          <div
            style={{
              display: 'flex',
              flexDirection: matches ? 'row' : 'column',
              justifyContent: 'space-around',
              width: '100%',
              marginTop: '50px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <text style={{ color: '#5F254C', fontSize: '18px' }}>
                Register With Pustk Store
              </text>
              <img width="100px" src={Logo} />
            </div>
          </div>
          <div
            style={{
              color: '#5F254C',
              marginTop: '40px',
              marginInline: '3%',
              fontWeight: '500',
            }}
          >
            <text>
              <b style={{ fontSize: '18px', textDecorationLine: 'underline' }}>
                {' '}
                About Pustk Store
              </b>
              <br />
              In this modern era , we know that most of our needs are dependent
              upon the internet. So students find most of their resources from
              the internet. But sometimes it becomes difficult for them to find
              a proper resource of knowledge that they are requiring that could
              be related to their college work or their own personal interest.
              <br /> <br /> To solve this problem, we came up with an idea of
              creating an integrated platform which includes the students and
              the book donors (that could be students also) world wide to get
              free resources as much as possible on a platform for their free
              use.
              <br />
              <br /> This platform will be a full stack website with features of
              uploading notes and pdfs and the students who need to access this
              knowledge can get by signing in to the platform. People can also
              donate their used books on our platform. Those books can also be
              served as a resource to the needy students.
            </text>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
