import React, { useCallback, useEffect } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import useEmblaCarousel from 'embla-carousel-react';

export default function EmblaCarousel(props) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

  return (
    <div className='embla'>
        <div className='embla__viewport' ref={emblaRef}>
            <div className='embla__container'>
                {props.images.map(image => {
                    return <div className='embla__slide' key={image}><img src={image} /></div>
                })}
            </div>
        </div>
        <button className="embla__button embla__prev" onClick={scrollPrev}><IconChevronLeft size={36} /></button>
        <button className="embla__button embla__next" onClick={scrollNext}><IconChevronRight size={36} /></button>
    </div>
  )
}
