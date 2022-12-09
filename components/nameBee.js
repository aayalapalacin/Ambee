import * as React from "react";
import { Button, Card, Title, TextInput } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

const NameBee = () => {
  const [text, setText] = React.useState("");
  return (
    <Card>
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
        label="Type Here"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button style={styles.continueBtn} mode="contained">
        <Text style={styles.btnTxt}>Next</Text>
      </Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 60,
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
    marginTop: 90,
  },

  continueBtn: {
    marginHorizontal: 90,
    marginBottom: 130,
  },
  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },
  input: {
    marginHorizontal: 90,
    marginBottom: 100,
    backgroundColor: "white",
    borderWidth: 1,
  },
});

export default NameBee;
