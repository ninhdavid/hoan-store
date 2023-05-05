/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
    content: [
        join(__dirname, '{src,app,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            gridTemplateRows: {
                11: 'repeat(11, minmax(0, 1fr))',
            },
            gridRowStart: {
                8: '8',
            },
        },
    },
    plugins: [],
};
