import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/dist/Feather";
import colors from "../../colors";
const Button = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles._new_content_btn}
        onPress={props.clickEvent}
      >
        <Feather name="plus" size={25} color={colors.white} />
        <Text style={styles._new_content_btn_text}>{props.btnText}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  _new_content_btn: {
    backgroundColor: colors.active,
    height: 38,
    borderRadius: 50,
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  _new_content_btn_text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default Button;
