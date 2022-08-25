import classes from './Footer.module.css'
import Logo from '../Logo/Logo'
import youtube from '../../Assets/images/youtube.svg'
import twitter from '../../Assets/images/twitter.svg'
import vimeo from '../../Assets/images/vimeo.svg'
import facebook from '../../Assets/images/facebook.svg'

const Footer = () => {
  return (
    <>
      <div className={classes.footerContainer}>
        <h3 className='heading-v1 text-center'>Have Question in mind? Let us help you</h3>
        <div className={classes.inputContainer}>
          <input type='text' placeholder="someone@gmail.com"/>
          <button>
            Send
          </button>
        </div>
        <div className={`containerWidth mx-auto ${classes.footerNav}`}>
          <Logo/>
          <div className={classes.footerNavOptions}>
            <div>
              Overview
            </div>
            <div>
              Symptoms
            </div>
            <div>
              Prevention
            </div>
            <div>
              Treatment
            </div>
          </div>
          <div className={classes.companyLogos}>
            <img src={facebook} alt="facebook"/>
            <img src={youtube} alt="youtube"/>
            <img src={vimeo} alt="vimeo"/>
            <img src={twitter} alt="twitter"/>
          </div>
        </div>      
      </div>
      <div className={classes.watermark}>
        <p>Developed by - <a href="https://rohith-b-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Rohith</a></p>
      </div>
      </>
  )
}

export default Footer;
