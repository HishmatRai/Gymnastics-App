import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../../colors";
const ExerciseBottomSheet = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <RBSheet
        ref={props.refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        dragFromTopOnly={true}
        height={props.height}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,.5)",
          },
          draggableIcon: {
            backgroundColor: colors.white,
          },
          container: {
            backgroundColor: colors.primary,
            borderTopLeftRadius:10,
            borderTopRightRadius:10
          },
        }}
      >
        {props.children}
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
});

export default ExerciseBottomSheet;
