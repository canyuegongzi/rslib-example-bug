import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import * as path from "path";
import * as fs from "fs";
const nodeEnv = process.env.NODE_ENV === 'production' ? '"production"' : '"development"';


const findTemplatePath = () => {
  try {
    fs.accessSync(path.resolve(__dirname, './example/index.html'), fs.constants.F_OK)
    return path.resolve(__dirname, './example/index.html')
  }
  catch (e) {
    try {
      fs.accessSync(path.resolve(__dirname, './index.html'), fs.constants.F_OK)
      return path.resolve(__dirname, './index.html')
    }catch (e) {
      return ''
    }
  }
}
export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass()
  ],
  source: {
    alias: {
      '@': './src/',
    },
    entry: {
      index: [
        path.resolve(__dirname, './src/index.tsx'),
        // path.resolve(__dirname, './example/example.tsx')
      ]
    },
    define: { 'process.env.NODE_ENV': nodeEnv },
    transformImport: [],
  },
  tools: {
    rspack: (config, { mergeConfig }) => {
      console.log("11111111111111111111")
      return mergeConfig(config, {
        devtool: 'eval',
        //externalsType: "module-import",
        output: {
          //module: true,
          //chunkFormat: "module",
          library: {
            type: 'commonjs-static',
          },
        },
        /*module: {
          parser: {
            javascript: {
              importMeta: false, // keep import.meta for runtime
            },
          },
        },*/
        optimization: {
          minimize: false, // no need to minify for library
        },
        experiments: {
          outputModule: true
        },
      });
    },
  },
});
