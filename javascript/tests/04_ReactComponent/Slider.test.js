import { mount } from 'enzyme';
import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';

import { Slider } from './Slider';
import * as Style from './style';

/*
 * The Slider should:
 * a. Allow for variable slide intervals, but default to 4 seconds
 * b. Should pause when a user is interacting with the component
 * c. The Slider should be able to take different types of slides. For example,
 * it could be a single image or a set of tiles. Reference Beatport.com for an example
 */

describe('Slider', () => {

    it('mounts the Slider component', () => {
        const container = mount(
            <Slider />
        );
        expect(container.find(Slider).exists()).toBe(true);
    });

    it('allows for variable slide intervals', async () => {
        jest.useFakeTimers();
        const seconds = Math.floor(Math.random() * 10) + 1; // fuzzy test
        const { queryByText } = render(
            <Slider seconds={seconds}>
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
            </Slider>
        );
        
        // Slide 1
        expect(await queryByText('Slide 1')).not.toBeNull();
        expect(await queryByText('Slide 2')).toBeNull();
        expect(await queryByText('Slide 3')).toBeNull();
        act(() => jest.advanceTimersByTime(seconds * 1000));
        
        // Slide 2
        expect(await queryByText('Slide 1')).toBeNull();
        expect(await queryByText('Slide 2')).not.toBeNull();
        expect(await queryByText('Slide 3')).toBeNull();
        act(() => jest.advanceTimersByTime(seconds * 1000));
        
        // Slide 3
        expect(await queryByText('Slide 1')).toBeNull();
        expect(await queryByText('Slide 2')).toBeNull();
        expect(await queryByText('Slide 3')).not.toBeNull();
        act(() => jest.advanceTimersByTime(seconds * 1000));
        
        // Slide 1
        expect(await queryByText('Slide 1')).not.toBeNull();
        expect(await queryByText('Slide 2')).toBeNull();
        expect(await queryByText('Slide 3')).toBeNull();
    });

    it('defaults to 4 seconds', async () => {
        jest.useFakeTimers();
        const seconds = 4; // expected default
        const { queryByText } = render(
            <Slider>
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
            </Slider>
        );
        
        // Slide 1
        expect(await queryByText('Slide 1')).not.toBeNull();
        expect(await queryByText('Slide 2')).toBeNull();
        expect(await queryByText('Slide 3')).toBeNull();
        act(() => jest.advanceTimersByTime(seconds * 1000));
        
        // Slide 2
        expect(await queryByText('Slide 1')).toBeNull();
        expect(await queryByText('Slide 2')).not.toBeNull();
        expect(await queryByText('Slide 3')).toBeNull();
        act(() => jest.advanceTimersByTime(seconds * 1000));
        
        // Slide 3
        expect(await queryByText('Slide 1')).toBeNull();
        expect(await queryByText('Slide 2')).toBeNull();
        expect(await queryByText('Slide 3')).not.toBeNull();
        act(() => jest.advanceTimersByTime(seconds * 1000));
        
        // Slide 1
        expect(await queryByText('Slide 1')).not.toBeNull();
        expect(await queryByText('Slide 2')).toBeNull();
        expect(await queryByText('Slide 3')).toBeNull();
    });

    it('should pause when a user is interacting with the component', async () => {
        jest.useFakeTimers();
        const seconds = Math.floor(Math.random() * 10) + 1; // fuzzy test
        const { queryByText } = render(
            <Slider seconds={seconds}>
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
            </Slider>
        );

        expect(await queryByText('Slide 1')).not.toBeNull();
        fireEvent.mouseOver(queryByText('Slide 1'));
        act(() => jest.advanceTimersByTime(seconds * 1000));
        expect(await queryByText('Slide 1')).not.toBeNull();
        fireEvent.mouseOut(queryByText('Slide 1'));
        act(() => jest.advanceTimersByTime(seconds * 1000));
        expect(await queryByText('Slide 1')).toBeNull();
    });

    it('should be able to take different types of slides', async () => {
        jest.useFakeTimers();
        const seconds = Math.floor(Math.random() * 10) + 1; // fuzzy test
        const { queryByTestId } = render(
            <Slider seconds={seconds}>
                <div data-testid="Slide 1">Slide 1</div>
                <a data-testid="Slide 2" href="#">Slide 2</a>
                <img data-testid="Slide 3" />
            </Slider>
        );

        // Slide 1
        expect(await queryByTestId('Slide 1')).not.toBeNull();
        expect(await queryByTestId('Slide 2')).toBeNull();
        expect(await queryByTestId('Slide 3')).toBeNull();
        act(() => jest.advanceTimersByTime(seconds * 1000));
        
        // Slide 2
        expect(await queryByTestId('Slide 1')).toBeNull();
        expect(await queryByTestId('Slide 2')).not.toBeNull();
        expect(await queryByTestId('Slide 3')).toBeNull();
        act(() => jest.advanceTimersByTime(seconds * 1000));

        // Slide 3
        expect(await queryByTestId('Slide 1')).toBeNull();
        expect(await queryByTestId('Slide 2')).toBeNull();
        expect(await queryByTestId('Slide 3')).not.toBeNull();
        act(() => jest.advanceTimersByTime(seconds * 1000));

        // Slide 1
        expect(await queryByTestId('Slide 1')).not.toBeNull();
        expect(await queryByTestId('Slide 2')).toBeNull();
        expect(await queryByTestId('Slide 3')).toBeNull();
    });

    it('could be a single slide', async () => {
        jest.useFakeTimers();
        const seconds = Math.floor(Math.random() * 10) + 1; // fuzzy test
        const { queryByText } = render(
            <Slider seconds={seconds}>
                <div>Slide 1</div>
            </Slider>
        );

        expect(await queryByText('Slide 1')).not.toBeNull();
        act(() => jest.advanceTimersByTime(seconds * 1000));
        expect(await queryByText('Slide 1')).not.toBeNull();
        act(() => jest.advanceTimersByTime(seconds * 1000));
        expect(await queryByText('Slide 1')).not.toBeNull();
    });
});
