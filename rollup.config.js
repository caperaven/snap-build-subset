import { terser } from "rollup-plugin-terser";

export default {
    input: "src/index.js",
    output: [
        {file: 'dist/snap-path.js', format: 'es'}
    ],
    plugins: [
        terser()
    ]
};