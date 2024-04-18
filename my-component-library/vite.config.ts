import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import  { extname, relative, resolve } from "path";
import { glob } from "glob";
import { fileURLToPath } from "url";
import tailwindcss from "tailwindcss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"], exclude: ["lib/**/*.stories.tsx"] }), libInjectCss()],
  build: {
    // sourcemap: true,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "tailwindcss"],
      input: Object.fromEntries(
        glob.sync('lib/**/!(*.d).{ts,tsx}', { ignore: 'lib/**/*.stories.tsx'}).map((file) => [
          // The name of the entry point
          // stories/nested/foo.ts becomes nested/foo
          relative("lib", file.slice(0, file.length - extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      output : {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        globals: {
          react: "React",
          tailwindcss: "tailwindcss"
        },
      }
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  }
});



// export default defineConfig({
//   plugins: [react(), dts({ include: ["lib"], insertTypesEntry: true }), libInjectCss()],
//   build: {
//     copyPublicDir: false,
//     lib: {
//       entry: resolve(__dirname, "lib/main.ts"),
//       name: "UI KIT",
//       formats: ["es"],
//       fileName: "ui-kit",
//     },
//     rollupOptions: {
//       external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
//     },
//   },
// });