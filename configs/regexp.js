import {defineConfig} from 'eslint/config';
import * as regexpPlugin from 'eslint-plugin-regexp';

export default defineConfig([regexpPlugin.configs.recommended]);
