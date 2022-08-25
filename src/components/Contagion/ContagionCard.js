import classes from './Contagion.module.css'

const ContagionCard = (props) => {
  const {img, heading, para} = props;  

  return (
    <div className={classes.contagionCard}>
      <img src={img} alt={heading}/>
      <h3 className='heading-v3'>{heading}</h3>
      <p className='para-v2'>{para}</p>
    </div>
  )
}

export default ContagionCard;