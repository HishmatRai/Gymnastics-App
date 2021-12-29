import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import Tabs from "_components/Tabs";
import colors from "../../colors";
const Search = (props: any) => {
  const [serchData, setSearchData] = React.useState<string>("");
  const [searchInputShow, setSearchInputShow] = React.useState<boolean>(true);
  const [keyboardFocus, setKeyboardFocus] = React.useState<boolean>(true);
  let onFocus = () => {
    setKeyboardFocus(true);
    setSearchInputShow(false);
  };
  let onBlur = () => {
    setKeyboardFocus(false);
    setSearchInputShow(true);
    setSearchData("");
  };
  return (
    <SafeAreaView style={styles.container}>
      {searchInputShow ? (
        <>
          <View style={styles._header_main}>
            <View />
            <Text style={styles._heading}>Search</Text>
            <TouchableOpacity onPress={() => setSearchInputShow(false)}>
              <Ionicons name="search-sharp" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <Tabs />
          </View>
        </>
      ) : (
        <View style={styles._search_main}>
          <TextInput
            placeholder="Search"
            value={serchData}
            onChangeText={(serchData) => setSearchData(serchData)}
            style={styles._input}
            underlineColor={colors.white}
            placeholderTextColor={colors.white}
            autoFocus={keyboardFocus}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  _heading: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  _search_main: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: colors.secondry,
    paddingHorizontal: 10,
    height: 40,
  },
  _input: {
    color: colors.white,
  },
});

export default Search;
