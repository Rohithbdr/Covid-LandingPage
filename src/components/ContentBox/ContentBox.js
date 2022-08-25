

const ContentBox = (props) => {
  const {subHeading, heading, para, textCenter = false} = props;  
  return (
    <>
      <h3 className={`sub-heading-v2  ${textCenter && ' text-center'}`}>
        {subHeading}
      </h3>
      <h3 className={`heading-v2  ${textCenter && ' text-center'}`}>        
        {heading}
      </h3>
      <p className={`para-v2 ${textCenter && ' text-center'}`}>
        {para}        
      </p>      
    </>
  )
}

export default ContentBox;
