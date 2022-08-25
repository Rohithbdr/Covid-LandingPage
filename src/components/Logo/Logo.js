import navLogo from '../../Assets/images/navLogo.svg'
import classes from '../../Assets/css/custom.module.css'

const Logo = () => {
  return (
    <a href="#overview" className={`${classes.navLogoContainer} flex items-center`} style={{gap: '14px'}}>
      <img src={navLogo} className={classes.navLogo} alt="page logo"/>
      <p className="font-bold mt-0">COVID-19</p>
    </a>
  )
}

export default Logo;