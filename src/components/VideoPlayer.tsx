import React from "react";
import VideoPlayer from "react-native-video-player";
import { SafeAreaView, StyleSheet } from 'react-native';
import colors from "../../colors";
const VideoPlay = (props: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <VideoPlayer
                video={{ uri: props.VideoUrl }}
                autoplay={false}
                defaultMuted={true}
                thumbnail={{
                    require: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aifKUvUTWjwGdb1u7_G1h3gBExqdyPEKv9b3H0_CDfIkRkBS83ON2gnjIJo0smkMyj8&usqp=CAU",
                }}
                customStyles={{
                    borderRadious: 10,
                    backgroundColor: "#000",
                }}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
    },
})

export default VideoPlay;