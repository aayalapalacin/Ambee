import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const NextRound = () => (
  <Card>
    <Card.Content>
      <Title>Card title</Title>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    </Card.Content>
    <Card.Actions>
      <Button>Ok</Button>
    </Card.Actions>
    <View style={styles.homeSettingContainer}>
      <View>
        <Feather name="home" size={33} color="black" title="No" />
        <Text>Home</Text>
      </View>
      <View style={styles.homeSettingBox}>
        <Feather name="settings" size={33} color="black" />
        <Text>Settings</Text>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  homeSettingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    marginBottom: 30,
  },
  homeSettingBox: {
    alignItems: "center",
  },
});

export default NextRound;
