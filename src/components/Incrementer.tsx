import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/dist/Entypo";
import Feather from "react-native-vector-icons/dist/Feather";
import colors from "../../colors";
const Incrementer = (props: any) => {
  const [statusCounter, setStatusCounter] = React.useState<number>(6);
  let Decrement = () => {
    if (statusCounter > 0) {
      setStatusCounter(statusCounter - 1);
    }
  };
  let Increment = () => {
    if (statusCounter < 10) {
      setStatusCounter(statusCounter + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles._heading_counter}>Current max</Text>
      <View style={styles._counter_main}>
        <TouchableOpacity style={styles._decrement_btn} onPress={Decrement}>
          <Entypo name="minus" size={30} color={colors.gray} />
        </TouchableOpacity>
        <View style={{ marginTop: -15 }}>
          <Text style={styles._status_counter}>{statusCounter}</Text>
          <View style={styles._status_main}>
            <View
              style={[styles._status_active, { width: statusCounter * 18 }]}
            />
          </View>
        </View>
        <TouchableOpacity style={styles._increment_btn} onPress={Increment}>
          <Feather name="plus" size={25} color={colors.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  _decrement_btn: {
    width: 46,
    height: 46,
    backgroundColor: colors.secondry,
    borderRadius: 46 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _increment_btn: {
    width: 46,
    height: 46,
    backgroundColor: colors.active,
    borderRadius: 46 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _status_main: {
    backgroundColor: colors.secondry,
    width:180,
    height: 15,
    borderRadius: 50,
  },
  _status_active: {
    backgroundColor: colors.active,
    height: 15,
    borderRadius: 50,
  },
  _status_counter: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 5,
  },
  _counter_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    width:"90%"
  },
  _heading_counter: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Incrementer;
