import classes from './WhatShouldWeDo.module.css'

const Section = (props) => {
  const {sno, title, para, img, version} = props  

  return (
    <div className={classes.pointer}>
      <div className={`${classes.pointerTexts} ${version === '2' && classes.second}`}>
        <div className={classes.pointerNumber}>
          <p>{sno}</p>
        </div>
        <div>
          <h3 className='heading-v2'>
            {title}
          </h3>
          <p className='para-v2'>
            {para}
          </p>
        </div>
      </div>
      <div className={classes.pointerImage}>
        <img src={img} alt={title}/>
      </div>
    </div>
  )
}

export default Section;