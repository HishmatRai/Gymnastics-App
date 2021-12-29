import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import ToggleSwitch from "toggle-switch-react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { UserData } from "_data";
import colors from "../../colors";
const NewContent = (props: any) => {
  const [data,setdata] = useState(UserData)
  // let data = UserData.skillSteps[0].posts;
  console.log("---------props===>>>>>>>>", props.cardData);
  console.log("---------type===>>>>>>>>", props.type);
  const [title, setTitle] = React.useState<string>("");
  const [notes, setNotes] = React.useState<string>("");
  const [toggle, setToggle] = React.useState();
  const [images, setImages] = useState<any>([]);

  useEffect(() => {
    if(props.type === "edit"){
      setTitle(props.cardData.title);
      setNotes(props.cardData.notes);
      setToggle(props.cardData.isPublic);
      setImages(props.cardData.photos);
    }
  }, []);

  let pickedImages = [];
  const imagePicker = async () => {
    let options = {
      title: "Select Image",
      customButtons: [
        { name: "customOptionKey", title: "Choose Photo from Custom Option" },
      ],
      mediaType: "photo",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    await launchImageLibrary(options, (res) => {
      pickedImages.push(res.assets[0].uri);
      setImages([...images, ...pickedImages]);
    });
  };

  let PostData = {
    id: props.cardData.id,
    title: title,
    notes: notes,
    type: title,
    isPublic: toggle,
    date: new Date(),
    photos: [],
    videos: [],
    skillStep: null,
    likes: 0,
    comments: [],
  };

  let UpdatePost = () => {
    // data.skillSteps[0].posts[props.currentIndex] = PostData;
    // data.skillSteps[0].posts[props.currentIndex].photos = images;
    // setdata(data)
    if(props.type === "edit"){

      props.onPress(PostData,images,props.currentIndex)
    }
    else{
      let arr  = data.skillSteps[0].posts
      PostData.photos.push(images)
      arr.push(PostData)
    }
    props.refRBSheet.current.close()


  };


  let CraetePost = () => {
    // create
    let arr  = data.skillSteps[0].posts
    PostData.photo.push(images)
    arr.push(PostData)
    props.refRBSheet.current.close()
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <>
          <Text style={styles._heading}>Title</Text>
          <View style={styles._title_main}>
            <TextInput
              placeholder="Add Title"
              value={title}
              onChangeText={(title) => setTitle(title)}
              style={styles._input}
              underlineColor={colors.white}
              placeholderTextColor={colors.white}
            />
          </View>
          <Text style={styles._heading}>Notes</Text>
          <View style={styles._title_main2}>
            <TextInput
              placeholder="Add Notes"
              value={notes}
              onChangeText={(notes) => setNotes(notes)}
              style={styles._input}
              underlineColor={colors.white}
              placeholderTextColor={colors.white}
              multiline={true}
              numberOfLines={6}
            />
          </View>
          <View style={styles._add_image_main}>
            {images.length !== 0 &&
              images.map((val, i) => {
                return (
                  <View style={styles._image_main} key={i}>
                    <Image source={{ uri: val }} style={styles._image} />
                    <TouchableOpacity
                      style={styles._close_btn}
                      onPress={() => {
                        images.splice(i, 1);
                        setImages([...images]);
                      }}
                    >
                      <AntDesign name="close" size={20} color={colors.white} />
                    </TouchableOpacity>
                  </View>
                );
              })}
            <TouchableOpacity
              style={styles._upload_image_main}
              onPress={() => imagePicker()}
            >
              <View style={styles._camera_icon}>
                <FontAwesome name="camera" size={25} color={colors.white} />
              </View>
              <Text style={styles._add_btn_text}>Add your content</Text>
            </TouchableOpacity>
          </View>
          <View style={styles._set_public_main}>
            <Text style={styles._public}>Is Public</Text>
            <ToggleSwitch
              isOn={toggle}
              onColor="#8d3c55"
              offColor="#8d3c55"
              thumbOffStyle={{
                backgroundColor: colors.white,
              }}
              thumbOnStyle={{
                backgroundColor: colors.active,
              }}
              size="medium"
              onToggle={(isOn) => setToggle(!toggle)}
            />
          </View>
          <Text style={styles._des}>
            Setting your update to public will make it visible to others, with
            the possibility to like, share, and comment.
          </Text>

          <TouchableOpacity style={styles._send_btn} onPress={UpdatePost}>
            <Text style={styles._send_btn_text}>SEND REVIEW</Text>
          </TouchableOpacity>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  _heading: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  _title_main: {
    backgroundColor: colors.secondry,
    borderRadius: 5,
    marginTop: 10,
    height: 37,
    paddingHorizontal: 10,
    marginBottom:20
  },
  _title_main2: {
    backgroundColor: colors.secondry,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    marginBottom:10
  },
  _image_main: {
    width: "30%",
    height: 104,
    borderRadius: 5,
    marginRight: "3%",
    marginTop: 5,
  },
  _upload_image_main: {
    width: "30%",
    height: 104,
    borderRadius: 5,
    backgroundColor: colors.secondry,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  _image: {
    width: "100%",
    height: 104,
    borderRadius: 5,
  },
  _add_image_main: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  _close_btn: {
    position: "absolute",
    alignSelf: "flex-end",
  },
  _camera_icon: {
    width: 52,
    height: 52,
    backgroundColor: "#EB4966",
    borderRadius: 52 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _add_btn_text: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 10,
  },
  _set_public_main: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _public: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  _des: {
    color: colors.gray,
    fontSize: 11,
    fontWeight: "400",
    marginTop: 10,
  },
  _send_btn: {
    backgroundColor: colors.active,
    height: 48,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  _send_btn_text: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "500",
  },
  _input: {
    fontSize: 14,
    color: colors.white,
  },
});

export default NewContent;
