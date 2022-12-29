import * as React from "react";
import { Card, Title } from "react-native-paper";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TextInput,
} from "react-native";
import ContinueBtn from "../../components/continueBtn";
import Skip from "../../components/skip";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NameBee = ({ navigation }) => {
  const window = useWindowDimensions();
  const [username, setUsername] = React.useState("");

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@username", value);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Card style={styles.cardContainer} height={window.height}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.picContainer}>
            <Card.Cover
              style={styles.cardPic}
              resizeMode="contain"
              source={require("../../assets/icons/Question.png")}
            />
          </View>
          <View style={styles.titleContainer}>
            <Title style={styles.cardTitle}>
              What is the name of your bee?
            </Title>
            <TextInput
              textAlign="center"
              style={styles.input}
              placeholder="Type here"
              placeholderTextColor="black"
              value={username}
              onChangeText={(username) => setUsername(username)}
            />
          </View>
        </Card.Content>
        <TouchableOpacity
          onPress={() => {
            if (username.length == 0) {
              Alert.alert("Please Enter UserName");
            } else {
              navigation.navigate("StepOne");
              storeData(username);
            }
          }}
        ></TouchableOpacity>
        <ContinueBtn text="Continue" />
      </Card>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 0,
  },
  cardContent: {
    alignItems: "center",
    height: "70%",
  },
  titleContainer: {
    height: "24%",
    marginBottom: "4%",
  },
  cardTitle: {
    textAlign: "center",
    marginTop: "12%",
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },

  cardPic: {
    height: "100%",
    width: "100%",
  },
  picContainer: {
    width: "76%",
    height: "47%",
    alignItems: "center",
    marginTop: "13%",
  },

  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },

  input: {
    marginHorizontal: "6%",
    marginTop: "10%",
    marginBottom: "12%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    fontSize: 20,
    // width: "1%",
    paddingVertical: "6%",
    borderColor: "#FF6033",
  },
});

export default NameBee;
