/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Slider } from '../Slider';
import { otherImages } from './images';
import { unsplash, preload } from './utils';

const images = otherImages.map(unsplash);
preload(images);

export default () => (
    <Slider>
        {/* Mixed Content */}
        <div key={0}>Plain Text</div>
        <a key={1} href="http://resume.jblossom.io/" target="_blank" title="click me">Text Link</a>
        <div key={2}>
            <div>
                <a href="http://resume.jblossom.io/" target="_blank">Link 1</a><br />
                <a href="https://github.com/jblossomweb" target="_blank">Link 2</a><br />
            </div>
        </div>
        <a key={3} href={unsplash(otherImages[0])} target="_blank">
            <img
                src={unsplash(otherImages[0])}
                alt={'Image Link'}
                title={'Image Link'}
            />
        </a>
        <img
            key={4}
            alt={'img element only'}
            src={unsplash(otherImages[1])}
        />
    </Slider>
);
/* eslint-enable jsx-a11y/img-redundant-alt */
