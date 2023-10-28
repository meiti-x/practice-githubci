import { defineConfig } from "vite";

export default defineConfig({
  test:{
    globals:true,
    include:['src/*.{test,spec}.?(c|m)[jt]s?(x)']
  }
})