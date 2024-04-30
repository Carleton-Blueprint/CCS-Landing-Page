import React from 'react'
import { useState, useRef } from 'react'
import GalleryImage from './gallery-components/GalleryImage'
const Test = (props) => {
	const [allImages,setAllImages] = useState(props.images);
  const movingLeft = useRef(false);
  const imagesLength = allImages.length;
  const mapDots = Array(imagesLength).fill(0);
  const startIndex = useRef(0);
  const animationTimeInt = useRef(350);
  const animationTimeString = useRef("duration-[350ms]")
  const isRunning = useRef(false)
	const [visibleImages, setVisibleImages] = useState([0,1,2,3,4])
  const [leftArrowColor, setLeftArrowColor] = useState("#ABAAAA")
  const [rightArrowColor, setRightArrowColor] = useState("#ABAAAA")
  const increment = (n, isInitial) => {
      if (n <= 0) {
        isRunning.current = false;
        return;
      };
      if (isInitial){
        let start = (startIndex.current + 1) % imagesLength;

        startIndex.current = start;
        
        let pushVisibleImages = []
        for (let i = start ; i<start+5 ; i++){
          pushVisibleImages.push(i % imagesLength)
        }
        movingLeft.current = false;
        setVisibleImages(pushVisibleImages)
      
        increment(n - 1 ,false);
      }
      else{
        setTimeout(() => {
          let start = (startIndex.current + 1) % imagesLength;

          startIndex.current = start;
          
          let pushVisibleImages = []
          for (let i = start ; i<start+5 ; i++){
            pushVisibleImages.push(i % imagesLength)
          }
          movingLeft.current = false;
          setVisibleImages(pushVisibleImages)
          increment(n - 1, false);
        },animationTimeInt.current);
      }
    
  };
  const decrement = (count) => {
    for (let n = 0 ; n<count ;n++){
      let start = (startIndex.current - 1);
      if (start === -1) {start = imagesLength-1}    
      startIndex.current = start
      let pushVisibleImages = []
      for (let i = start ; i<start+5 ; i++){
        pushVisibleImages.push(i % imagesLength)
      }

      movingLeft.current = true;
      setVisibleImages(pushVisibleImages)
    }
    
  };
  const getBrightness = (imageIndex) =>{
    if (!visibleImages.includes(imageIndex)){
      return 'brightness-0'
    }
    if (visibleImages[0] === imageIndex){
      return 'brightness-50'
    }
    if (visibleImages[1] === imageIndex){
      return 'brightness-75'
    }
    if (visibleImages[2] === imageIndex){
      return 'brightness-100'
    }
    if (visibleImages[3] === imageIndex){
      return 'brightness-75'
    }
    if (visibleImages[4] === imageIndex){
      return 'brightness-50'
    }
  }
  const getCss = (imageIndex) =>{
    //Set left to keep state based on index greater than or less than -1 or 0 index of the visible images list
    if (!visibleImages.includes(imageIndex)){
      return movingLeft.current ? `right-0 opacity-0 transition-all linear ${animationTimeString.current} w-0 h-0` : `left-0 opacity-0 transition-all linear ${animationTimeString.current} w-0 h-0`
    }
    if (visibleImages[0] === imageIndex && movingLeft.current){
      return `left-0 opacity-100 transition-opacity linear ${animationTimeString.current} w-60 h-48 z-20`
    }
    if (visibleImages[0] === imageIndex && !movingLeft.current){
      return `left-0 opacity-100 transition-all linear ${animationTimeString.current} w-60 h-48 z-20`
    }
    if (visibleImages[1] === imageIndex){
      return `left-1/4 opacity-100 transform -translate-x-1/2 transition-all linear ${animationTimeString.current} z-30 w-80 h-64`
    }
    if (visibleImages[2] === imageIndex){
      return `left-1/2 transform -translate-x-1/2 opacity-100 transition-all linear ${animationTimeString.current} z-40 w-[364px] h-80`
    }
    if (visibleImages[3] === imageIndex){
      return `left-3/4 transform -translate-x-1/2 opacity-100 transition-all linear ${animationTimeString.current} z-30 w-80 h-64`
    }
    if (visibleImages[4] === imageIndex  && !movingLeft.current){
      return `right-0 opacity-100 transition-opacity linear ${animationTimeString.current} z-20 w-60 h-48`
    }
    if (visibleImages[4] === imageIndex  && movingLeft.current){
      return `right-0 opacity-100 transition-all linear ${animationTimeString.current} z-20 w-60 h-48`
    }

  }

  const setAnimationTime = (skipDistance) =>{
    const distanceTimings = {
      1 : [350, "duration-[300ms]"],
      2 : [150, "duration-[150ms]"],
      3 : [100, "duration-[100ms]"],
      4 : [75, "duration-[75ms]"], 
    }

    animationTimeString.current = distanceTimings[skipDistance][1]
    animationTimeInt.current = distanceTimings[skipDistance][0]
  }
  return (
    <div>
      <div className='flex items-center h-fit gap-6 duration'>
  
        <div className="button">
          <svg className=' w-full h-[40px]' viewBox='0 0 44 40' fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
            className={`transition-all ease-in-out duration-300 ${leftArrowColor === '#ABAAAA' ? 'translate-x-1' : 'translate-x-0'}`} 
            d="M-2.06624e-06 20C-1.1006e-06 8.9543 8.95431 1.1006e-06 20 2.06624e-06C31.0457 3.03189e-06 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 -3.03189e-06 31.0457 -2.06624e-06 20Z" 
            fill={leftArrowColor}
            onMouseEnter={() => {setLeftArrowColor("#e91c24")}}
            onMouseLeave={() => setLeftArrowColor("#ABAAAA")}
            onClick={() => decrement(1)}
            onMouseDown={(e) => e.preventDefault()}
            />
            <path 
            className={`transition-all ease-in-out duration-300 ${leftArrowColor === '#ABAAAA' ? 'translate-x-1' : '-translate-x-0'}`}
            d="M11.9393 18.9393C11.3536 19.5251 11.3536 20.4749 11.9393 21.0607L21.4853 30.6066C22.0711 31.1924 23.0208 31.1924 23.6066 30.6066C24.1924 30.0208 24.1924 29.0711 23.6066 28.4853L15.1213 20L23.6066 11.5147C24.1924 10.9289 24.1924 9.97919 23.6066 9.3934C23.0208 8.80761 22.0711 8.80761 21.4853 9.3934L11.9393 18.9393ZM14.5 18.5H13V21.5H14.5V18.5Z"
            fill="white" 
            onMouseEnter={() => setLeftArrowColor("#e91c24")} 
            onMouseLeave={() => setLeftArrowColor("#ABAAAA")}
            onClick={() => decrement(1)}
            onMouseDown={(e) => e.preventDefault()}
            />
          </svg>
        </div>
          
        
        <div>
          <div className="relative flex items-center h-80 w-[945px]">
              {allImages.map((image,index) =>(
                <div className={`absolute ${getCss(index)}`}>
                  <GalleryImage key={image.galleryImage.id} url={image.galleryImage.url} description={image.galleryImage.description} index = {index} brightness = {`${getBrightness(index)}`}/>
                </div>
              )
            )}
          </div>
        </div>
        <div className="button" >
          <svg className=' w-full h-[40px]' viewBox='0 0 44 40' fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
            className={`transition-all ease-in-out duration-300 ${rightArrowColor === '#ABAAAA' ? 'translate-x-0' : 'translate-x-1'}`} 
            d="M-2.06624e-06 20C-1.1006e-06 8.9543 8.95431 1.1006e-06 20 2.06624e-06C31.0457 3.03189e-06 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 -3.03189e-06 31.0457 -2.06624e-06 20Z" 
            fill={rightArrowColor}
            onMouseEnter={() => {setRightArrowColor("#e91c24")}}
            onMouseLeave={() => setRightArrowColor("#ABAAAA")}
            onClick={() => increment(1, true)}
            onMouseDown={(e) => e.preventDefault()}
            />
            <path 
            className={`transition-all ease-in-out duration-300 ${rightArrowColor === '#ABAAAA' ? 'translate-x-0' : 'translate-x-1'}`}
            d="M26.0607 21.0607C26.6464 20.4749 26.6464 19.5251 26.0607 18.9393L16.5147 9.3934C15.9289 8.80761 14.9792 8.80761 14.3934 9.3934C13.8076 9.97918 13.8076 10.9289 14.3934 11.5147L22.8787 20L14.3934 28.4853C13.8076 29.0711 13.8076 30.0208 14.3934 30.6066C14.9792 31.1924 15.9289 31.1924 16.5147 30.6066L26.0607 21.0607ZM23.5 21.5L25 21.5L25 18.5L23.5 18.5L23.5 21.5Z"
            fill="white" 
            onMouseEnter={() => setRightArrowColor("#e91c24")} 
            onMouseLeave={() => setRightArrowColor("#ABAAAA")}
            onClick={() => increment(1, true)}
            onMouseDown={(e) => e.preventDefault}
            />
          </svg>
        </div>
    
		  </div>

      <div className='flex justify-center gap-3 pt-10'>
        {mapDots.map((_, index) => (
          <div key={index}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle 
             cx="9" cy="9" r="9" fill={`${visibleImages[2] === index ? '#08679D' : '#D9D9D9'}`}
             onMouseEnter={(e) => e.target.setAttribute('fill', '#0292B7')}
             onMouseLeave={(e) => visibleImages[2] === index ? e.target.setAttribute('fill', '#08679D') : e.target.setAttribute('fill', '#D9D9D9') }
             />
            </svg>

          </div>
        ))}
      </div>
    
      <div onClick={() => setAnimationTime(1)}>Normal</div>
      <div onClick={() => setAnimationTime(2)}>Fast</div>
      <div onClick={() => setAnimationTime(3)}>Faster</div>
      <div onClick={() => setAnimationTime(4)}>Fastest</div>

      <div onClick={() => increment(1, true)}>one</div>
      <div onClick={() => increment(2, true)}>two</div>
      <div onClick={() => increment(3, true)}>three</div>
      <div onClick={() => increment(4, true)}>four</div>

    </div>
  )
}
export default Test