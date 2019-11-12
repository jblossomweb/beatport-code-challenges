import React from 'react';
import { Slider } from '../Slider';

export default () => (
    <Slider seconds={2}>
        {/* Div elements */}
        <div key={'red'} style={{ color: '#fff', background: 'red' }}>Red</div>
        <div key={'orange'} style={{ color: '#000', background: 'orange' }}>Orange</div>
        <div key={'yellow'} style={{ color: '#000', background: 'yellow' }}>Yellow</div>
        <div key={'green'} style={{ color: '#fff', background: 'green' }}>Green</div>
        <div key={'blue'} style={{ color: '#fff', background: 'blue' }}>Blue</div>
        <div key={'purple'} style={{ color: '#fff', background: 'purple' }}>Purple</div>
    </Slider>
);
