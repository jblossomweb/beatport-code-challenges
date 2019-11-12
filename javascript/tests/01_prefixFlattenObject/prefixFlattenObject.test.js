/**
 * Given an object of multiple depths flatten the object and prefix nested objects
 * with their parents key. Arrays should remain in tact.
 *
 * @param {Object} obj
 * @param {String} prefix
 * @returns {Object}
 */

const prefixFlattenObject = (obj, prefix = '') => Object.keys(obj).reduce(
    (flattened, prop) => {
        if (typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
            const children = prefixFlattenObject(obj[prop], `${prop}_`);
            return Object.keys(children).reduce(
                (a, child) => ({
                    ...a,
                    [`${prefix}${child}`]: children[child],
                }),
                flattened,
            );
        }
        return {
            ...flattened,
            [`${prefix}${prop}`]: obj[prop],
        };
    },
    {},
);

// note: this gets the job done using loops, but is not quite optimal:

// const prefixFlattenObject = (obj, prefix = '') => {
//     let flattened = {};
//     Object.keys(obj).forEach(prop => {
//         const value = obj[prop];
//         if (typeof value === 'object' && !Array.isArray(value)) {
//             const children = prefixFlattenObject(value, `${prop}_`);
//             Object.keys(children).forEach(child => {
//                 flattened[`${prefix}${child}`] = children[child];
//             });
//         } else {
//             flattened[`${prefix}${prop}`] = value;
//         }
//     });
//     return flattened;
// };

const input = {
    prop0: 'value0',
    prop1: {
        nested0: 'nv0',
        nested1: {
            supernested0: 'sn0',
            supernested1: ['sn1']
        }
    },
    prop2: 'value2',
};

const expectedOutput = {
    prop0: 'value0',
    prop1_nested0: 'nv0',
    prop1_nested1_supernested0: 'sn0',
    prop1_nested1_supernested1: ['sn1'],
    prop2: 'value2'
};

describe('prefixFlattenObject', () => {
    it('flattens plain objects, prefixing each key with its parent\'s key + _', () => {
        const flattened = prefixFlattenObject(input);

        expect(flattened).toEqual(expectedOutput);
        expect(flattened.prop0).toBe('value0');
        expect(flattened.prop2).toBe('value2');
        expect(typeof flattened.prop1).toBe('undefined');
        expect(flattened.prop1_nested0).toBe('nv0');
        expect(flattened.prop1_nested1_supernested0).toBe('sn0');
        expect(flattened.prop1_nested1_supernested1[0]).toBe('sn1');
    });
});
