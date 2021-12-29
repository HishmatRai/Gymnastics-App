import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageProps,
} from "react-native";
import colors from "../../../colors";
import React from "react";
interface propTypes {
  image: ImageProps;
  onPress: () => any;
  title: String;
}

const ListItem = (props: propTypes) => (
  <TouchableOpacity style={styles._card_main} onPress={props.onPress}>
    <Text style={styles._card_title}>{props.title}</Text>
    <Image source={props.image} style={styles._image} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  _image: {
    height: 100,
    width: "50%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.secondry,
    marginHorizontal: 20,
    justifyContent: "space-between",
    borderRadius: 10,
    marginTop: 20,
  },
  _card_title: {
    color: colors.white,
    marginLeft: 20,
    fontWeight: "900",
    fontSize: 18,
    fontFamily: "Raleway-Black",
  },
});

export default ListItem;
