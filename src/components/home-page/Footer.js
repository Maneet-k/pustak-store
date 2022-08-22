import React, { useState } from 'react'
import Gmail from './../../assets/gmail.png'
import {SiGmail} from 'react-icons/si'
import {Link} from 'react-router-dom';
import {VscLinkExternal} from 'react-icons/vsc'
export default function Footer() {

    return (
        <div className={'footer'}>
            <div className={'footer-grid'}>
                <div style={{fontSize:'18px',fontWeight:'bold'}}>
                    <text style={{color:'rgb(41, 41, 41)'}}>Important Links</text>
                    <div className='important-links'>
                        <Link className='link' to='/about'>About Us<VscLinkExternal size={13}/></Link>
                        <Link className='link' to='/contact'>Contact Us <VscLinkExternal size={13}/></Link>
                    </div>

                </div>
                <div>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <img width='40px' height='45px' src={Gmail} alt='gmail-logo'/>
                        <div style={{display:'flex',flexDirection:'column',marginLeft:'10px'}}>
                            <text style={{fontSize:'20px',fontWeight:'bold',color:'rgb(41, 41, 41)'}}>Mail Us</text>
                            <a style={{textDecorationLine:'none',color:'rgb(41, 41, 41)'}} href='mailto:maneetkaur797@gmail.com'>maneetkaur797@gmail.com</a>
                        </div>
                    </div>
                    <div className={'follo-us'} style={{fontSize:'18px',fontWeight:'bold'}}>
                        <text style={{color:'rgb(41, 41, 41)'}}>Follow Us</text>
                        <div className={'social-links'}>
                            <a className='facebook-icon'  href="https://www.facebook.com" target='_blank' rel="noreferrer" ><i class="fab fa-facebook-f icon"></i><span></span></a>
                            <a className='linkedin-icon' href="https://www.linkedin.com" target='_blank' rel="noreferrer" ><i class="fab fa-linkedin-in icon"></i><span></span></a>
                            <a className='insta-icon' href="https://www.instagram.com" target='_blank' rel="noreferrer" ><i class="fab fa-instagram icon"></i><span></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{textAlign:'center'}}>
            <text className={'copyright'}>Copyright © 2022, All Right Reserved <span>Pustk Store</span></text><br/>
            </div>
        </div>
    )
}