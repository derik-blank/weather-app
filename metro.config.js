/*
 * @Author: 杨佳桥 343749277@qq.com
 * @Date: 2024-07-09 15:26:31
 * @LastEditors: 杨佳桥 343749277@qq.com
 * @LastEditTime: 2024-07-09 15:26:42
 * @FilePath: \wather-app\metro.config.js
 * @Description: 
 */
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname, { isCSSEnabled: true });

module.exports = withNativeWind(config, { input: "./global.css" });
