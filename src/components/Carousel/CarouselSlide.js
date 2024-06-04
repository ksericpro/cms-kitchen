import React from 'react'

const CarouselSlide = (props) => {
    const {id, slideBg, slideTitle, slideDescription} = props;
    return (
    <div className='slideWrap' style={{backgroundImage: `url(${slideBg})`}}>
        <div className='textWrap'>
            <h2>${slideTitle}</h2>
            <small>${id}</small>
            <p>${slideDescription}</p>
        </div>
    </div>
  )
}

export default CarouselSlide