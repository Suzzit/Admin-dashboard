import React,{useLayoutEffect, useRef} from 'react'
import {gsap} from 'gsap'

function Loader() {
  const animateAbles = useRef()

  useLayoutEffect(()=>{
      const ctx = gsap.context(() => {
        animateAbles.current = gsap.timeline()
          .to(".inside-box1", {
            x: -5
          })
          .to(".small-square", {
            x: 3
          })
      }, animateAbles);
  }, [])

  return (
    <div className='loading-page'>
      <div className='loading-page_animelement' ref={animateAbles}>
        <div className='vertical-rectangle'>
          <div className='inside-box1'>

          </div>
        </div>

        <div className='small-square'>
          <div className='inside-box2'>

          </div>
        </div>

        <div className='big-square'>
          <div className='inside-box3'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader