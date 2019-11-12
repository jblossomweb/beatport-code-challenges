import React from 'react';
import { Slider } from '../Slider';
import { denverImages } from './images';
import { unsplash, preload } from './utils';

const allImages = denverImages.map(unsplash);
preload(allImages);

export default () => (
    <Slider>
        {/* Image Elements */}
        {denverImages.map(id => (
            <img
                key={id}
                src={unsplash(id)}
                alt={id}
            />
        ))}
    </Slider>
);
