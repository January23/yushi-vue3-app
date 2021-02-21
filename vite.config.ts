import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "src"),
      "comps":path.resolve(__dirname, "src/components"),
      "pages":path.resolve(__dirname, "src/pages"),
    },
  },
  plugins: [vue()],
  // css:{
  //   preprocessorOptions:{
  //     scss:{
  //       add
  //     }
  //   }
  // }
})
