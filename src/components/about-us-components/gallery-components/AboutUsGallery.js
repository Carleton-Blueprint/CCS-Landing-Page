import React from 'react'
import { useState, useRef } from 'react'
import GalleryImage from './GalleryImage'
import GalleryDots from './GalleryDots'
const AboutUsGallery = (props) => {
	const allImages = props.images;
  const movingLeft = useRef(false);
  const imagesLength = allImages.length;
  const startIndex = useRef(0);
  const animationTimeInt = useRef(200);
  const animationTimeString = useRef("duration-[200ms]")
  const animationTypeString = useRef("ease-in-out")
  const isRunning = useRef(false)
	const [visibleImages, setVisibleImages] = useState([0,1,2,3,4])

  const generateVisibleImages = (start,left) =>{
    movingLeft.current = left
    let pushVisibleImages = []
    
    for (let i = start ; i<start+5 ; i++){
      pushVisibleImages.push(i % imagesLength)
    }
    return pushVisibleImages
  }

  const increment = (n, isInitial) => {
    if (n <= 0) {
      isRunning.current = false;
      animationTypeString.current = 'ease-in-out';
      return;
    };
  
    // Set the animation type to ease in out if its just a one move over. set to linear if the move is more than one.
    animationTypeString.current = (n === 1 && isInitial) ? 'ease-in-out' : 'ease-linear';
  
    const updateImages = () => {
      const start = (startIndex.current + 1) % imagesLength;
      startIndex.current = start;
      setVisibleImages(generateVisibleImages(startIndex.current, false));
      increment(n - 1, false);
    };
  
    // Execute updateImages immediately if isInitial, else with a delay
    if (isInitial) {
      updateImages();
    } else {
      setTimeout(updateImages, animationTimeInt.current);
    }
  };
  
  const decrement = (n, isInitial) => {
    if (n <= 0) {
      isRunning.current = false;
      animationTypeString.current = 'ease-in-out';
      return;
    }
    // Set the animation type to ease in out if its just a one move over. set to linear if the move is more than one.
    animationTypeString.current = (n === 1 && isInitial) ? 'ease-in-out' : 'ease-linear';

    const updateImages = () => {
      let start = startIndex.current - 1;
      if (start === -1) start = imagesLength - 1; // Wrap around if index goes below 0
      startIndex.current = start;
      setVisibleImages(generateVisibleImages(startIndex.current, true));
      decrement(n - 1, false);
    };
  
    // Execute updateImages immediately if isInitial, else with a delay
    if (isInitial) {
      updateImages();
    } else {
      setTimeout(updateImages, animationTimeInt.current);
    }
  };
  

  const handleImageNav = (distance, direction) => {
      if (distance === -1 || isRunning.current) {return;}
      setAnimationTime(distance);
      isRunning.current = true;
      if (direction){
        increment(distance, true)
      }
      else{
        decrement(distance, true)
      }
    }
  
  

  const getBrightness = (imageIndex) =>{
    const index = visibleImages.indexOf(imageIndex)
    if (index === -1){
      return 'brightness-0'
    }
    const brightnessArray = ['brightness-50', 'brightness-75','brightness-100','brightness-75','brightness-50']
    return brightnessArray[index]
  }
  const getCss = (imageIndex) => {
    // Early return for images not currently visible
    if (!visibleImages.includes(imageIndex)) {
      return `${movingLeft.current ? 'right-0' : 'left-0'} opacity-0 transition-all ${animationTypeString.current} ${animationTimeString.current} w-0 h-0`;
    }
  
    // Get default styles for visible images
    const baseStyle = `opacity-100 ${animationTypeString.current} ${animationTimeString.current}`;
    const zIndexAndSize = {
      0: `z-20 w-[80px] h-14 md:w-[120px] md:h-24 lg:w-60 lg:h-48`,
      1: `z-30 w-[120px] h-[88px] md:w-40 md:h-32 lg:w-80 lg:h-64`,
      2: `z-40 w-[160px] h-[120px] md:w-[200px] md:h-40 lg:w-[400px] lg:h-80`,
      3: `z-30 w-[120px] h-[88px] md:w-40 md:h-32 lg:w-80 lg:h-64`,
      4: `z-20 w-[80px] h-14 md:w-[120px] md:h-24 lg:w-60 lg:h-48`
    };
  
    // Specific positioning logic
    let positionStyle = '';
    switch (visibleImages.indexOf(imageIndex)) {
      case 0:
        positionStyle = `left-0 ${movingLeft.current ? 'transition-opacity' : 'transition-all'}`;
        break;
      case 1:
        positionStyle = 'left-1/4 transform -translate-x-1/2 transition-all';
        break;
      case 2:
        positionStyle = 'left-1/2 transform -translate-x-1/2 transition-all';
        break;
      case 3:
        positionStyle = 'left-3/4 transform -translate-x-1/2 transition-all';
        break;
      case 4:
        positionStyle = `right-0 ${movingLeft.current ? 'transition-all' : 'transition-opacity'}`;
        break;
      default:
        break;
    }
  
    return `${positionStyle} ${baseStyle} ${zIndexAndSize[visibleImages.indexOf(imageIndex)]}`;
  };
  

  const setAnimationTime = (skipDistance) =>{
    let duration, durationString;

    switch (skipDistance) {
      case 1:
        duration = 200;
        durationString = 'duration-[200ms]';
        break;
      case 2:
      case 3:
        duration = 100;
        durationString = 'duration-[100ms]';
        break;
      default:
        duration = 50;
        durationString = 'duration-[50ms]';
        break;
    }
    animationTimeString.current = durationString
    animationTimeInt.current = duration
  }
  return (
    <div className=' w-fit'>
      <div className='flex items-center h-fit gap-6 duration'>
  
        <div
        className='bg-[--lightgray] w-[40px] h-[40px] transition-all ease-in-out duration-300 rounded-full'
        onMouseEnter={(e) => e.currentTarget.className = 'bg-[--red] w-[40px] h-[40px] -translate-x-1 transition-all ease-in-out duration-300 rounded-full'}
        onMouseLeave={(e) => e.currentTarget.className = 'bg-[--lightgray] w-[40px] h-[40px] translate-x-0 transition-all ease-in-out duration-300 rounded-full'}
        onClick={() => {setAnimationTime(1); decrement(1, true, true)}}
        onMouseDown={(e) => e.preventDefault()}
        >
          <svg viewBox='0 0 40 40' xmlns="http://www.w3.org/2000/svg">
            <path 
            className={`transition-all ease-in-out duration-300`}
            d="M11.9393 18.9393C11.3536 19.5251 11.3536 20.4749 11.9393 21.0607L21.4853 30.6066C22.0711 31.1924 23.0208 31.1924 23.6066 30.6066C24.1924 30.0208 24.1924 29.0711 23.6066 28.4853L15.1213 20L23.6066 11.5147C24.1924 10.9289 24.1924 9.97919 23.6066 9.3934C23.0208 8.80761 22.0711 8.80761 21.4853 9.3934L11.9393 18.9393ZM14.5 18.5H13V21.5H14.5V18.5Z"
            fill="white" 
            />
          </svg>
        </div>
          
        
        <div>
          <div className="relative flex items-center h-80 w-[230px] lg:w-[945px]">
              {allImages.map((image,index) =>(
                <div className={`absolute ${getCss(index)}`}>
                  <GalleryImage key={image.galleryImage.id} url={image.galleryImage.gatsbyImageData} description={image.galleryImage.description} index = {index} brightness = {`${getBrightness(index)}`}/>
                </div>
              )
            )}
          </div>
        </div>



        <div
        className='bg-[--lightgray] w-[40px] h-[40px] transition-all ease-in-out duration-300 rounded-full'
        onMouseEnter={(e) => e.currentTarget.className = 'bg-[--red] w-[40px] h-[40px] translate-x-1 transition-all ease-in-out duration-300 rounded-full'}
        onMouseLeave={(e) => e.currentTarget.className = 'bg-[--lightgray] w-[40px] h-[40px] translate-x-0 transition-all ease-in-out duration-300 rounded-full'}
        onClick={() => {setAnimationTime(1); increment(1, true, true)}}
        onMouseDown={(e) => e.preventDefault()}
        >
          <svg viewBox='0 0 40 40' xmlns="http://www.w3.org/2000/svg">
            <path 
            className={`transition-all ease-in-out duration-300`}
            d="M26.0607 21.0607C26.6464 20.4749 26.6464 19.5251 26.0607 18.9393L16.5147 9.3934C15.9289 8.80761 14.9792 8.80761 14.3934 9.3934C13.8076 9.97918 13.8076 10.9289 14.3934 11.5147L22.8787 20L14.3934 28.4853C13.8076 29.0711 13.8076 30.0208 14.3934 30.6066C14.9792 31.1924 15.9289 31.1924 16.5147 30.6066L26.0607 21.0607ZM23.5 21.5L25 21.5L25 18.5L23.5 18.5L23.5 21.5Z"
            fill="white" 
            />
          </svg>
        </div>
    
		  </div>
      <div className='flex items-center justify-center'>
        <GalleryDots imagesLength = {imagesLength} activeImage = {visibleImages[2]} callbackChangeImage = { (distance,direction) => handleImageNav(distance,direction)}/>
      </div>
    </div>
  )
}
export default AboutUsGallery