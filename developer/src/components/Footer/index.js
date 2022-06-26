import React from 'react';
import gitHub from "../../assets/contact-icons/githubimg.png";
import gmail from "../../assets/contact-icons/gmail.png";
import linkedin from "../../assets/contact-icons/linkedin.png";

function Footer () {

    return (
        <div className='footer' style={{textAlign: 'center'}}>
           <div> 
           <a href="https://github.com/sdavis525">
          <img
            src={gitHub}
            alt="GitHub"
            className="icons"
          />
        </a>
        <a href="mailto:mavvymarketing@gmail.io">
          <img
            src={gmail}
            alt="Gmail"
            className="icons"
          />
        </a>
        <a href="https://www.linkedin.com/in/sophiadavis525">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="icons"
          />
        </a>
           </div>
         </div>
       );
     }

export default Footer;