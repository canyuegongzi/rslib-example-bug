import {RslibConfig, build as rsLibBuild} from "@rslib/core";
import {pluginReact} from "@rsbuild/plugin-react";
import {pluginSass} from "@rsbuild/plugin-sass";
import * as path from "path";
async function buildFun(): Promise<any> {
  console.log("build")
  const defaultConfig: RslibConfig = {
    lib: [
      {
        format: 'esm',
        source: {
          entry: {
            index: [path.resolve(process.cwd(), './src/**')],
          }
        },
        output: {
          distPath: {
            root: path.resolve(process.cwd(), './lib/esm'),
          }
        },
      }
    ],
    plugins: [
      pluginReact({
        swcReactOptions: {
          runtime: 'classic',
        },
      }),
      pluginSass(),
    ],
  }
  console.log("构建配置")
  console.log(JSON.stringify(defaultConfig, null, 2))
  await rsLibBuild(defaultConfig);
}

// @ts-ignore
buildFun()