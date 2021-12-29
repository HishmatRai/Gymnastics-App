import * as React from "react";
import { Animated, View, TouchableOpacity, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import SearchCom from "./Search";
import colors from "../../colors";
const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: colors.primary }]}>
    <SearchCom />
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: colors.primary  }]} />
);
const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: colors.primary  }]} />
);
export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Women" },
      { key: "second", title: "Men" },
      { key: "third", title: "Kids" },
    ],
  };

  _handleIndexChange = (index:number) => this.setState({ index });
  
  _renderTabBar = (props:any) => {
    const inputRange = props.navigationState.routes.map((x:any, i:number) => i);
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route:any, i:number) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex:number) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  render() {
    console.log(this.props)
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        // renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{ backgroundColor: colors.primary }}
            activeColor={colors.white}
            indicatorStyle={{ backgroundColor: colors.active }}
            labelStyle={{
              textTransform: "capitalize",
              fontWeight:
                props.navigationState.index === this.state.index
                  ? "bold"
                  : "normal",
                  fontSize:16
            }}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    color:colors.white,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    color: colors.white,
  },
});
