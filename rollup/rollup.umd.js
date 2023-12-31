import {terser} from 'rollup-plugin-terser';
import base from './rollup.base';
import postcss from 'rollup-plugin-postcss';

const globals = {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
    'classnames': 'classNames',
};

export const production = {
    ...base,
    output: {
        file: 'build/webrix.umd.min.js',
        format: 'umd',
        plugins: [terser()],
        name: 'Webrix',
        globals,
    },
    plugins: [
        ...base.plugins(),
        postcss({minimize: true}),
    ],
};

export const development = {
    ...base,
    output: {
        file: 'build/webrix.umd.js',
        format: 'umd',
        name: 'Webrix',
        globals,
    },
    plugins: [
        ...base.plugins(),
        postcss({sourceMap: true}),
    ],
};