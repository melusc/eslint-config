import {defineConfig} from 'eslint/config';
import eslintNodeTest from 'eslint-node-test';

export default defineConfig([eslintNodeTest.configs.recommended]);
