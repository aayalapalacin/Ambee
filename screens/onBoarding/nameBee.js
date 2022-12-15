import * as React from "react";
import { Card, Title, TextInput } from "react-native-paper";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
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
        <TouchableOpacity onPress={() => navigation.navigate("StepOne")}>
          <Skip />
        </TouchableOpacity>
        <Card.Content>
          <View style={styles.picContainer}>
            <Card.Cover
              style={styles.cardPic}
              source={require("../../assets/icons/Question.png")}
            />
          </View>
          <Title style={styles.cardTitle}>What is the name of your bee?</Title>
        </Card.Content>
        <TextInput
          style={styles.input}
          placeholder="Type here"
          placeholderTextColor="#FF6033"
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
        <TouchableOpacity
          onPress={() => {
            if (username.length == 0) {
              Alert.alert("Please Enter UserName");
            } else {
              navigation.navigate("StepOne");
              storeData(username);
            }
          }}
        >
          <ContinueBtn text="Continue" />
        </TouchableOpacity>
      </Card>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: { borderRadius: 0 },
  cardTitle: {
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 40,
    marginBottom: 50,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },

  cardPic: {
    height: 270,
    width: 290,
  },
  picContainer: {
    alignItems: "center",
    marginTop: 40,
  },

  continueBtn: {
    marginHorizontal: 90,
  },
  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },
  input: {
    marginHorizontal: 90,
    marginBottom: 40,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#FF6033",
  },
});

export default NameBee;
