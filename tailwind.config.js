/*
 * @Author: 杨佳桥 343749277@qq.com
 * @Date: 2024-07-09 15:22:43
 * @LastEditors: 杨佳桥 343749277@qq.com
 * @LastEditTime: 2024-07-09 15:26:22
 * @FilePath: \wather-app\tailwind.config.js
 * @Description: tailwindcss 配置
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
