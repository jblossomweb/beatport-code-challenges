import React from 'react';
import { Slider } from '../Slider';
import { giphyImages } from './images';
import { giphy, preload } from './utils';

const images = giphyImages.map(giphy);
preload(images);

export default () => (
    <Slider seconds={8}>
        {/* Single Element */}
        <img src={images[0]} alt={''} />
    </Slider>
);
