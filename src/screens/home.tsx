import React, { useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import { UserData } from "_data";
import ListItem from "_components/ListItem";
import ExerciseBottomSheet from "_components/ExerciseBottomSheet";
import HomeBSheet from "_components/HomebSheet";
import colors from "../../colors";
const Home = (props: any) => {
  const refRBSheet = useRef();
  const screen = Dimensions.get("screen");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles._heading}>Home</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {UserData.skillSteps.map((skillStep, i) => {
          return (
            <ListItem
              key={i}
              title={skillStep.exerciseRef.name}
              onPress={() => refRBSheet.current.open()}
              image={require("../images/220-SM931643.jpg")}
            />
          );
        })}
      </ScrollView>
      <ExerciseBottomSheet refRBSheet={refRBSheet} height={screen.height - 80}>
        <HomeBSheet path={props.navigation} refRBSheet={refRBSheet} />
      </ExerciseBottomSheet>
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
    fontWeight: "900",
    fontSize: 16,
    marginTop: 10,
    fontFamily: "Raleway-Black",
  },
});

export default Home;
