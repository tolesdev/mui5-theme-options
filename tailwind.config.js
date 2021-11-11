const plugin = require('tailwindcss/plugin');

/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 **/
module.exports = {
    mode: 'jit',
    purge: [
        './apps/**/pages/**/*.{js,ts,jsx,tsx}',
        './apps/**/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    variantOrder: [
        'first',
        'last',
        'odd',
        'even',
        'visited',
        'checked',
        'group-hover',
        'group-focus',
        'focus-within',
        'hover',
        'focus',
        'focus-visible',
        'active',
        'disabled',
        'open', // Custom variant
    ],
    plugins: [
        plugin(function ({ addVariant, e }) {
            addVariant('open', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(
                        `open${separator}${className}`
                    )}[data-state='open']`;
                });
            });
        }),
    ],
};
