import { StyleSheet, View } from "react-native";
import React from "react";

function Seperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    height: 0.5,
    backgroundColor: "#000000",
  },
});

export default Seperator;
