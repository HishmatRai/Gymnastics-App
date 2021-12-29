import React, { useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { UserData } from "_data";
import FontAwesome5 from "react-native-vector-icons/dist/FontAwesome5";
import Information from "_components/Information";
import Details from "_screens/details";
import CommunityTab from "./CommunityTab";
import colors from "../../colors";
const HomeBSheet = (props: any) => {
  const [active, setActive] = React.useState<number>(1);
  const [activeWidth, setActiveWidth] = React.useState<number>(360);
  const [scrollY, setscrollY] = React.useState<any>(0);
  const [lastY , setlastY ] = React.useState<any>(0);
  const screen = Dimensions.get("screen");
  let DetailsFun = () => {
    //   setTabs("Details");
    //   props.path.navigate("Details");
    //   props.refRBSheet.current.close()
    // console.log(screen.width*0)
    // setActiveWidth(screen.width*0)
    // setActive(0);
  };
  let InformationFun = () => {
    // Alert.alert("1")
    // setActiveWidth(screen.width*1)
    // console.log(screen.width*1)
    // setActive(1);
  };
  let Community = () => {
    // setTabs("Community");
    // props.path.navigate("CommunityTab");
    // props.refRBSheet.current.close()
    // setActiveWidth(screen.width*2)
    // Alert.alert("2")
    // console.log(screen.width*2)
    // setActive(2);
  };
 let handleScroll = (e) => {
    let dy = e.nativeEvent.contentOffset.y - lastY;
    let scrollY2 = scrollY + dy;

    scrollY2 = Math.min(scrollY2, screen.height - 400);
    scrollY2 = Math.max(scrollY2, 0);
    setscrollY(scrollY2)
    setlastY(e.nativeEvent.contentOffset.y)
}
const s = StyleSheet.create({
  container: {
      flex: 1
  },
  menu: {
      position: 'absolute',
      height:screen.height - 370,
      top: scrollY * -1,
      left: 0,
      right: 0,
      backgroundColor: colors.primary,
      zIndex: 1,
  },
  text: {
      fontSize: 16,
      padding: 20
  },
  content: {
      paddingTop: screen.height - 400,
  }
});
  console.log("=========activeWidth========", activeWidth);
  console.log("=========activeWidth========", active);
  return (
    <SafeAreaView style={styles.container}>
      <View style={s.menu}>
      <View style={styles._animation_main}>
              <Image
                source={require("../images/gymnasticswhite3.png")}
                style={styles._image}
              />
              <View style={styles._video_title_main}>
                <Text style={styles._title}>Video</Text>
                <Text style={styles._line}>|</Text>
                <Text style={styles._animation}>Animation</Text>
              </View>
            </View>
            <View style={styles._header_main}>
                  <Text style={styles._header_heading}>Level IX</Text>
                  <View style={styles._percentage_main}>
                    <FontAwesome5 name="less-than" size={7} color={colors.white} />
                    <Text style={styles._percentage}>5%</Text>
                  </View>
                </View>
                <Text style={styles._bsheet_heading}>
                  {UserData.skillSteps[0].exerciseRef.name}
                </Text>
                <Text style={styles._bsheet_des}>
                  {UserData.skillSteps[0].exerciseRef.shortDescription}
                </Text>
                <View style={styles._tabs_main}>
              <TouchableOpacity
                style={active === 0 ? styles._active_tab : styles._tab}
                onPress={DetailsFun}
              >
                <Text
                  style={
                    active === 0 ? styles._active_tab_title : styles._tab_title
                  }
                >
                  Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={active === 1 ? styles._active_tab : styles._tab}
                onPress={InformationFun}
              >
                <Text
                  style={
                    active === 1 ? styles._active_tab_title : styles._tab_title
                  }
                >
                  Information
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={active === 2 ? styles._active_tab : styles._tab}
                onPress={Community}
              >
                <Text
                  style={
                    active === 2 ? styles._active_tab_title : styles._tab_title
                  }
                >
                  Community
                </Text>
              </TouchableOpacity>
            </View>
      </View>
      <ScrollView style={s.content} onScroll={(e) => handleScroll(e)} >
        <View style={styles._data_main}>
            
          <View style={{ flex: 1,backgroundColor:colors.primary }}>

            <View style={styles._show_Data}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                contentOffset={{ x: screen.width }}
                onScroll={(e) => {
                  var currentOffset = e.nativeEvent.contentOffset.x;
                  if (currentOffset === screen.width * 0) {
                    setActive(0);
                    setActiveWidth(screen.width);
                  } else if (currentOffset === screen.width * 1) {
                    setActive(1);
                    setActiveWidth(screen.width * 1);
                  } else if (currentOffset === screen.width * 2) {
                    setActive(2);
                    setActiveWidth(screen.width * 2);
                  }
                }}
                style={{ width: screen.width }}
              >
                <View style={[styles._show_Data, { width: screen.width }]}>
                  <Details />
                </View>
                <View style={[styles._show_Data, { width: screen.width }]}>
                  <Information />
                </View>
                <View style={[styles._show_Data, { width: screen.width }]}>
                  <CommunityTab />
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
      {active === 1 ? (
        <TouchableOpacity
          style={styles._close_btn}
          onPress={() => props.refRBSheet.current.close()}
        >
          <Text style={styles._close_btn_text}>Close</Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  _image: {
    height: 167,
    width: 224,
    alignSelf: "center",
    alignItems: "center",
  },
  _video_title_main: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: -20,
  },
  _title: {
    color: colors.gray,
    fontSize: 13,
  },
  _line: {
    color: colors.white,
    fontSize: 13,
    marginHorizontal: 5,
  },
  _animation: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 13,
  },
  _data_main: {
    flex: 1,
    backgroundColor:colors.secondry
  },
  _header_main: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop:20
  },
  _header_heading: {
    color: colors.active,
    fontWeight: "bold",
    fontSize: 16,
  },
  _percentage_main: {
    backgroundColor: colors.active,
    borderRadius: 50,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    marginLeft: 10,
    flexDirection: "row",
  },
  _percentage: {
    color: colors.white,
    fontSize: 11,
  },
  _bsheet_heading: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    marginTop:3
  },
  _bsheet_des: {
    color: colors.gray,
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
   paddingHorizontal:20
  },
  _tabs_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,

    paddingBottom: 5,
  },
  _tab: {
    width: "25%",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 5,
    borderBottomWidth: 2,
    borderBottomColor: colors.secondry,
  },
  _tab_title: {
    color:colors.gray,
    fontSize: 14,
  },
  _active_tab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.active,
    width: "25%",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 5,
  },
  _active_tab_title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  _close_btn: {
    backgroundColor: colors.secondry,
    height: 46,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  _close_btn_text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  _show_Data: {
    flex: 1,
  },
  _animation_main:{
    height:179
  },

});

export default HomeBSheet;
