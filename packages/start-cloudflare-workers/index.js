import { copyFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { rollup } from "rollup";
import vite from "vite";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import common from "@rollup/plugin-commonjs";
import { spawn } from "child_process";

export default function () {
  return {
    start() {
      const proc = spawn("wrangler", ["dev"]);
      proc.stdout.pipe(process.stdout);
      proc.stderr.pipe(process.stderr);
    },
    async build(config) {
      const __dirname = dirname(fileURLToPath(import.meta.url));
      await vite.build({
        build: {
          outDir: "./dist/",
          minify: "terser",
          rollupOptions: {
            input: resolve(join(config.root, "src", `entryClient`)),
            output: {
              manualChunks: undefined
            }
          }
        }
      });
      await vite.build({
        build: {
          ssr: true,
          outDir: "./.solid/server",
          rollupOptions: {
            input: resolve(join(config.root, "src", `entryServer`)),
            output: {
              format: "esm"
            }
          }
        }
      });
      copyFileSync(
        join(config.root, ".solid", "server", `entryServer.js`),
        join(config.root, ".solid", "server", "app.js")
      );
      copyFileSync(join(__dirname, "entry.js"), join(config.root, ".solid", "server", "index.js"));
      const bundle = await rollup({
        input: join(config.root, ".solid", "server", "index.js"),
        plugins: [
          json(),
          nodeResolve({
            preferBuiltins: true,
            exportConditions: ["node", "solid"]
          }),
          common()
        ]
      });
      // or write the bundle to disk
      await bundle.write({ format: "esm", dir: join(config.root, "dist") });

      // closes the bundle
      await bundle.close();
    }
  };
}
