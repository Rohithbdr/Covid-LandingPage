import ContentBox from '../ContentBox/ContentBox'
import classes from './Symptoms.module.css'
import coverImg from '../../Assets/images/symptoms.svg'

const Symptoms = () => {
  return (
    <div id="symptoms" className={`${classes.symptomsContainer} containerWidth`}>
      <div className={classes.contentBox}>
        <ContentBox
          subHeading={'Covid-19'}
          heading={'Symptoms'}
          para={'Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory '}
          textCenter={true}
        />
      </div>
      <img src={coverImg} className='mx-auto' alt='Symptoms cover img'/>   
    </div>
  )
}

export default Symptoms;