import ContentBox from "../ContentBox/ContentBox";
import ContagionCard from "./ContagionCard";
import classes from './Contagion.module.css'
import containtedObjects from '../../Assets/images/containtedObjects.svg';
import airTransmission from '../../Assets/images/airTransmission.svg';
import humanContacts from '../../Assets/images/humanContacts.svg';

const Contagion = () => {
  return (
    <div id="contagion" className={`pt-28 md:py-16 containerWidth`}>
      <div className={classes.contentBox}>
        <ContentBox
          textCenter={true}
          subHeading={'Covid-19'}
          heading={'Contagion'}
          para={'Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type'}
        />
      </div>
      <div className={classes.contagionCardsContainer}>
        <ContagionCard
          img={airTransmission}
          heading={'Air Transmission'}
          para={'Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify'}
        />
        <ContagionCard
          img={humanContacts}
          heading={'Human Contacts'}
          para={'Washing your hands is one of thesimplest ways you can protect'}
        />
        <ContagionCard
          img={containtedObjects}
          heading={'Containted Objects'}
          para={'Use the tissue while sneezing,In this way, you can protect your droplets.'}
        />
      </div>      
    </div>
  )
}

export default Contagion;