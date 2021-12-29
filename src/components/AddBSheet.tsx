import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import colors from "../../colors";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
const AddBSheet = (props: any) => {
    const imagePicker = async () => {
        let options = {
          title: "Select Image",
          customButtons: [
            { name: "customOptionKey", title: "Choose Photo from Custom Option" },
          ],
          mediaType:"photo",
          storageOptions: {
            skipBackup: true,
            path: "images",
          },
        };
        await launchImageLibrary(options, (res) => {
        console.log(res.assets[0].uri)
        });
      };

      const VideoPicker = async () => {
        let options = {
          title: "Select Image",
          customButtons: [
            { name: "customOptionKey", title: "Choose Photo from Custom Option" },
          ],
          mediaType:"video",
          storageOptions: {
            skipBackup: true,
            path: "video",
          },
        };
        await launchImageLibrary(options, (res) => {
        console.log(res)
        });
      };

      const audioPicker = async () => {
        let options = {
          title: "Select Image",
          customButtons: [
            { name: "customOptionKey", title: "Choose Photo from Custom Option" },
          ],
          mediaType:"mixed",
          storageOptions: {
            skipBackup: true,
            path: "audio",
          },
        };
        await launchImageLibrary(options, (res) => {
        console.log(res)
        });
      };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles._bs_main}>
                <Text style={styles._bs_heading}>What do you want {"\n"}to add?</Text>
                <TouchableOpacity style={styles._bs_btn} onPress={() => VideoPicker()}>
                    <Text style={styles._bs_btn_text}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._bs_btn}  onPress={() => imagePicker()}>
                    <Text style={styles._bs_btn_text}>Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._bs_btn} onPress={() => audioPicker()}>
                    <Text style={styles._bs_btn_text}>Sound</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
    },
    _bs_main: {
        marginHorizontal: 20,
    },
    _bs_heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.white,
        textAlign: "center",
        marginBottom: 20,
    },
    _bs_btn: {
        height: 45,
        backgroundColor: colors.active,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    _bs_btn_text: {
        fontSize: 16,
        fontWeight: "700",
        color: colors.white,
    },
});
export default AddBSheet;