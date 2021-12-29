import React from "react";
import { SafeAreaView, StyleSheet,StatusBar,Text } from "react-native";
import StackNavigation from "./src/config/navigation";
import { ModalPortal } from 'react-native-modals';
import colors from "./colors";
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
        hidden={false}
        backgroundColor={colors.primary}
        barStyle="light-content"
        translucent={false}
      />
      <StackNavigation />
       <ModalPortal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
