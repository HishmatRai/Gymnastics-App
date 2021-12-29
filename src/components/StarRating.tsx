import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import colors from "../../colors";
const StarRating = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._review_main}>
        <AntDesign
          name="staro"
          size={13}
          color={colors.gray}
          style={styles._review_star}
        />
        <AntDesign
          name="staro"
          size={13}
          color={colors.gray}
          style={styles._review_star}
        />
        <AntDesign
          name="staro"
          size={13}
          color={colors.gray}
          style={styles._review_star}
        />
        <AntDesign
          name="staro"
          size={13}
          color={colors.gray}
          style={styles._review_star}
        />
        <AntDesign
          name="staro"
          size={13}
          color={colors.gray}
          style={styles._review_star}
        />
        <Text style={styles._Show_reviews}>({props.showRating})</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  _review_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _review_star: {
    marginRight: 2,
  },
  _Show_reviews: {
    color: colors.gray,
    marginLeft: 5,
    fontFamily: "Raleway-Black",
    fontWeight: "400",
  },
});

export default StarRating;
