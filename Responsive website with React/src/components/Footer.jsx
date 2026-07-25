import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from "../styles/Button"
// import { IconName } from "react-icons/fa";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { PiNewspaperDuotone } from 'react-icons/pi';


const Footer = () => {
  return <Wrapper>
       <section className="contact-short">
        <div className='grid grid-two-column'>
          <div>
          <h3>Ready to get started</h3>
          <h3>Talk to us today</h3>
          </div>

            <div className='contact-short-btn'>
              <NavLink>
                <Button>Get Started</Button>
              </NavLink>
            </div>

        </div>
       </section>
 

        {/* footer */}

       <footer>
        <div className="container grid grid-four-column">

          {/* 1 column */}
          <div className='footer-about'>
            <h3>Rahul krof</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* 2 column */}
          <div className='footer-sub'>
            <h3>Subcribe to get important update</h3>
            <form action='#'>
              <input type="email" required autoComplete='off' placeholder='Email'/>
              <input type="submit" value="Subscribe" />              
            </form>
          </div>

           {/* 3 column */}

           <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social-icons">
             <div>
              <a href="https://discord.com/">
             <FaDiscord className="icons"/>
             </a>
              </div>              
             <div>
             <a href='https://www.instagram.com/'>
             <FaInstagram className="icons"/>
             </a>
              </div>              
             <div>
              <a href='https://www.youtube.com/watch?v=LC_Ck1xOPVM&list=RDLC_Ck1xOPVM&start_radio=1'>
             <FaYoutube className="icons"/>
             </a>
              </div>              
            </div>
           </div>

           {/* 4 column */}

           <div className='footer-contact'>
            <h3>Call Us</h3>
            <h3>+91 12345678</h3> 
           
          </div>
          </div>

          {/* bottom section */}
          <div className="footer-bottom-section">
            <hr/>
            <div className="container grid grid-two-column">
              <p>
                @{new Date().getFullYear()} RahulKrof. All Right Reserved
              </p>
              <div>
                <p>PRIVACY POLITCY</p>
                <p>TERMS & CONDITIONS</p>
              </div>

         
          </div>


        </div>
       </footer>


  </Wrapper>
    
  
}

const Wrapper = styled.section`

    .contact-short {
      max-width: 60vw;
      margin: auto;
      padding: 4rem 10rem;
      background-color: ${({ theme }) => theme.colors.bg};
      border-radius: 1rem;
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
      transform: translateY(50%);


      .grid div:last-child{
        justify-self: end;
        align-self: center;
      }
    }

    footer{
      padding: 14rem 0 9rem 0;
      background-color: ${({ theme }) => theme.colors.footer_bg};


      h3{
       color: ${({ theme }) => theme.colors.hr};
       margin-bottom: 2.4rem;
      }

      p{
        color: ${({ theme }) => theme.colors.white};
      }

      .footer-social-icons{
         display: flex;
         gap: 2rem;

        div{
          padding: 1rem;
          border-radius: 50%;
          border: 2px solid ${({ theme }) => theme.colors.white};

        .icons{
          colors: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }

        }
             
      }

       .footer-bottom-section{
         padding-top: 9rem;
        

       hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
       }  
      }
    }
 



     @media (max-width: ${({ theme }) => theme.media.mobile}) {
      
     .contact-short{
     
        max-width: 95vw;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
     }

     footer .footer-bottom-section{
     
       padding-top: 3.2rem;
     }

}
`;


export default Footer
