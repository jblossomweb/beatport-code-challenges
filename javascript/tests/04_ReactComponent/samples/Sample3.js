import React from 'react';
import { Slider } from '../Slider';
import { beatportImages } from './images';
import { beatport, preload } from './utils';

const images = beatportImages.map(beatport);
preload(images);

export default () => (
    <Slider>
        {/* Image Links */}
        {beatportImages.map(id => (
            <a key={id} target="_blank" href={beatport(id)}>
                <img
                    key={id}
                    src={beatport(id)}
                    alt={id}
                />
            </a>
        ))}
    </Slider>
);
