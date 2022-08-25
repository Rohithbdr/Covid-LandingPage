import classes from './Overview.module.css'
import coverImg from '../../Assets/images/homeCoverImage.svg'
import coverImgSm from '../../Assets/images/homeCoverImageSm.svg'
import coverImg2 from '../../Assets/images/overviewSecond.svg'
import ContentBox from '../ContentBox/ContentBox'

const Overview = () => {
  return (
    <div id="overview" className={classes.overviewContainer}>
      <div className={`flex flex-col md:flex-row ${classes.firstFold} containerWidth`}>
        <div className={`w-full md:hidden ${classes.second}`}>
          <img src={coverImgSm} alt="Cover img"/>          
        </div>
        <div className={`w-full ${classes.first}`}>
          <h3 className='sub-heading-v1'>
            COVID-19 Alert
          </h3>
          <h1 className='heading-v1'>Stay At Home Quarantine To Stop Corona Virus</h1>
          <p className='para-v1'>There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to.</p>
          <button>
            <span>
              Let Us Help
            </span>
          </button>
        </div>
        <div className={`w-full hidden md:block ${classes.second}`}>
          <img src={coverImg} alt="Cover img"/>          
        </div>
      </div>
      <div className={`flex flex-col md:flex-row ${classes.secondFold} containerWidth`}>
        <div className={`w-full ${classes.first}`}>
          <img src={coverImg2} alt="what is covid?"/>
        </div>
        <div className={`w-full ${classes.second}`}>
          <ContentBox
            subHeading={'What Is Covid-19'}
            heading={'Coronavirus'}            
            para={'Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response'}
          />
          <button>
            Learn More
          </button>
        </div>        
      </div>
    </div>  
  )

}

export default Overview;