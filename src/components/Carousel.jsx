
import React, { useRef, useState, useEffect } from 'react'

const Carousel = () => {
  const trackRef = useRef(null)
  const totalSlides = 3
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const offset = -currentSlide * 100
    track.style.transform = `translateX(${offset}%)`
  }, [currentSlide])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(s => (s + 1) % totalSlides)
    }, 2000)
    return () => clearInterval(interval)
  }, [totalSlides])

  const next = () => setCurrentSlide(s => (s + 1) % totalSlides)
  const prev = () => setCurrentSlide(s => (s - 1 + totalSlides) % totalSlides)

  return (
    <div className="carousel-container relative w-[1700px] overflow-hidden ml-25">
      <div id="slide-track" ref={trackRef} className="flex transition-transform duration-500 ease-in-out">

        <div className="slide flex-shrink-0 w-full">
          <img src="./images/carousel1.avif" alt="Description of Slide 1" className="w-full h-[500px] object-cover" />
        </div>

        <div className="slide flex-shrink-0 w-full">
          <img src="./images/carousel2.avif" alt="Description of Slide 2" className="w-full h-[500px] object-cover" />
        </div>

        <div className="slide flex-shrink-0 w-full">
          <img src="./images/carousel3.avif" alt="Description of Slide 3" className="w-full h-[500px] object-cover" />
        </div>

      </div>

      <button onClick={prev}
        className="absolute top-1/2 left-[30px] transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white z-10 rounded-3xl">
        &#10094;
      </button>
      <button onClick={next}
        className="absolute top-1/2 right-[30px] transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white z-10 rounded-3xl">
        &#10095;
      </button>

      <img className='mt-10 ml-60 w-300 h-50' src="./images/carousel4.webp" alt="" />
    </div>


  )
}

export default Carousel