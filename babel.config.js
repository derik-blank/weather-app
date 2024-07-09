/*
 * @Author: 杨佳桥 343749277@qq.com
 * @Date: 2024-07-09 15:09:10
 * @LastEditors: 杨佳桥 343749277@qq.com
 * @LastEditTime: 2024-07-09 15:25:41
 * @FilePath: \wather-app\babel.config.js
 * @Description: bable配置
 */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
      "react-native-reanimated/plugin",
    ],
  };
};
