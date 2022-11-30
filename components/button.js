import * as React from "react";
import { Card, Button } from "react-native-paper";

const MyButton = ({ navigation }) => (
  <Card>
    <Card.Actions>
      <Button onPress={() => navigation.navigate("Home")}>Go to Home</Button>
      <Button onPress={() => navigation.navigate("MyCard")}>
        Go to Card page
      </Button>
    </Card.Actions>
  </Card>
);

export default MyButton;
