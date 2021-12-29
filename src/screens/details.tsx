import React from "react";
import { SafeAreaView, StyleSheet} from "react-native";
import Incrementer from "_components/Incrementer";
import Post from "_components/Post";
import Timeline from "react-native-timeline-flatlist";
import colors from "../../colors";
const Details = (props: any) => {
  let Data = [
    { description:  <Incrementer /> },
    { description: <Post /> },
    { description: <Post /> },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Timeline
        circleSize={20}
        time={false}
        circleColor={colors.active}
        lineColor={colors.active}
        timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
        style={styles.list}
        data={Data}
        showTime={false}
        showTitle ={false}
        columnFormat='single-column-left'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  list: {
    flex: 1,
  },
});

export default Details;
