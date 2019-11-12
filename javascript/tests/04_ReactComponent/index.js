import React from 'react';
import ReactDOM from 'react-dom';
import Sample1 from './samples/Sample1';
import Sample2 from './samples/Sample2';
import Sample3 from './samples/Sample3';
import Sample4 from './samples/Sample4';
import Sample5 from './samples/Sample5';
import { FlexCentered } from './style';

ReactDOM.render(
    <FlexCentered>
        <Sample1 />
        <Sample2 />
        <Sample3 />
        <Sample4 />
        <Sample5 />
    </FlexCentered>,
    document.getElementById('root'),
);
