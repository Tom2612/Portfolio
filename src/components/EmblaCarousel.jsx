import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react';

export default function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

  return (
    <div className='embla'>
        <div className='enbla__viewport' ref={emblaRef}>
            <div className='embla__container'>
                <div className='embla__slide'>Slide 1</div>
                <div className='embla__slide'>Slide 2</div>
                <div className='embla__slide'>Slide 3</div>
                <div className='embla__slide'>Slide 4</div>
                <div className='embla__slide'>Slide 5</div>
                <div className='embla__slide'>Slide 6</div>
                <div className='embla__slide'>Slide 7</div>
            </div>
        </div>
        <button className="embla__prev" onClick={scrollPrev}>Prev</button>
        <button className="embla__next" onClick={scrollNext}>Next</button>
    </div>
  )
}
