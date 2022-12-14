import * as React from "react";
import { Card, Title, TextInput } from "react-native-paper";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ContinueBtn from "../../components/continueBtn";
import Skip from "../../components/skip";

const NameBee = ({ navigation }) => {
  const window = useWindowDimensions();
  const [text, setText] = React.useState("");

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
              source={{ uri: "https://picsum.photos/700" }}
            />
          </View>
          <Title style={styles.cardTitle}>What is the name of your bee?</Title>
        </Card.Content>
        <TextInput
          style={styles.input}
          placeholder="Type here"
          placeholderTextColor="#FF6033"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("StepOne", { text })}
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
    marginTop: 20,
    marginBottom: 50,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },

  cardPic: {
    height: 225,
    width: 225,
  },
  picContainer: {
    alignItems: "center",
    marginTop: 60,
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
