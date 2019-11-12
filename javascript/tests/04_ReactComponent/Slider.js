import React, { useState, useEffect } from 'react';
import * as Style from './style';

/**
 * @type {React.Component}
 *
 * @description Create a Slider/Carousel using modern react. It's up to you to add styles.
 * Sass is available, but feel free to use any styling solution you. CSS-in-JS, CSS, etc.
 * This component needs to be reusable and customizable. Multiple instances of this component
 * should be able to exist in the same view.
 *
 * The Slider should:
 * a. Allow for variable slide intervals, but default to 4 seconds
 * b. Should pause when a user is interacting with the component
 * c. The Slider should be able to take different types of slides. For example,
 * it could be a single image or a set of tiles. Reference Beatport.com for an example
 */

export const Slider = ({
    seconds = 4,
    children,
}) => {
    const [isActive, setIsActive] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = Array.isArray(children) ? children : [children];
    const numSlides = slides.length;

    useEffect(() => {
        let timer;
        if (numSlides > 1 && isActive) {
            const advanceSlide = () => {
                let nextSlide = currentSlide + 1;
                if (nextSlide === numSlides) {
                    nextSlide = 0;
                }
                setCurrentSlide(nextSlide);
            };
            timer = setTimeout(advanceSlide, seconds * 1000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [isActive, currentSlide]);

    const start = () => setIsActive(true);
    const stop = () => setIsActive(false);

    return (
        <Style.Wrapper>
            <Style.Slides
                onMouseOver={stop}
                onFocus={stop}
                onMouseOut={start}
                onBlur={start}
            >
                <Style.Slide zoom={isActive}>
                    {slides[currentSlide]}
                </Style.Slide>
            </Style.Slides>
        </Style.Wrapper>
    );
};
