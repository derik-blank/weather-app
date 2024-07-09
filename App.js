/*
 * @Author: 杨佳桥 343749277@qq.com
 * @Date: 2024-07-09 15:09:10
 * @LastEditors: 杨佳桥 343749277@qq.com
 * @LastEditTime: 2024-07-09 15:30:05
 * @FilePath: \wather-app\App.js
 * @Description:
 */
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
export default function App() {
  return (
    <View style={styles.container}>
      <Text class="text-3xl font-bold">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
