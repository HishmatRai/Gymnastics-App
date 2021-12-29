import React from "react";
import { SafeAreaView, StyleSheet, Text, ImageBackground } from "react-native";
import colors from "../../colors";
const HeaderImage = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./../images/220-SM931643.jpg")}
        style={styles._bg_image}
      >
        <Text style={styles._heading}>Challenges</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  _bg_image: {
    width: "100%",
    height: 219,
    resizeMode: "cover",
  },
  _heading: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 48,
    marginTop: 143,
    marginHorizontal: 20,
  },
});

export default HeaderImage;
