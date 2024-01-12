import './testimonial.css'
import { useState } from 'react';
import { Carousel } from "react-bootstrap";

const Testomonial = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='container'>
      <Carousel activeIndex={index} onSelect={handleSelect} className='testimonial__slider'>
        <Carousel.Item interval={4000}>
          {/* <img src={'./assets/slider.svg'} alt="slides" className="slider__main__image" /> */}
          <div className='main__slider__main__slider'>
            <div className="slider__main__image left__main">
              <img src='./assets/sufyan.svg' alt="slides" className="" />
              <div>M.Sufyan</div>
              <div>SomeCompany LLC.</div>
            </div>
            <div className='right__main'>
              <div >
                <div>
                  <img src='./assets/test-left.svg' alt="questions" className="" />
                </div>
                <div className='product__text'>
                  The product was amazing &
                  Works perfectly fine.
                </div>
                <div>
                  <img src='./assets/testi-right.svg' alt="questions" className="" />
                </div>
              </div>
              <div className='circle__circle'>
              </div>
            </div>
          </div>
          <Carousel.Caption >
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  )
}

export default Testomonial