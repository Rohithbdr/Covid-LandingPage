import ContentBox from "../ContentBox/ContentBox";
import classes from './WhatShouldWeDo.module.css'
import wearMask from '../../Assets/images/wearMask.svg'
import washHands from '../../Assets/images/washHands.svg'
import noseRag from '../../Assets/images/noseRag.svg'
import avoidContact from '../../Assets/images/avoidContact.svg'
import Section from './Section'

const WhatShouldWeDo = () => {
  return (
    <div id="prevention" className={`${classes.whatShouldWeDo} containerWidth`}>
      <div className={classes.contentBox}>
        <ContentBox
          subHeading={'Covid-19'}
          heading={'What Should We Do'}
          para={'Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused'}
          textCenter={true}
        />
      </div>
      <div className={classes.pointersContainer}>
        <Section
          title={'Wear masks'}
          sno={'01'}
          para={'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively '}
          img={wearMask}
          version={'1'}
        />
        <Section
          title={'Wash Your Hands'}
          sno={'02'}
          para={'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals '}
          img={washHands}
          version={'2'}
        />
        <Section
          title={'Use nose - Rag'}
          sno={'03'}
          para={'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively '}
          img={noseRag}
          version={'1'}
        />
        <Section
          title={'Avoid contacts'}
          sno={'04'}
          para={'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic'}
          img={avoidContact}
          version={'2'}
        />
      </div>
    </div>
  )
}

export default WhatShouldWeDo;