import * as React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import HomeSettings from "../../components/homeSettings";

const ChosenCard = ({ navigation }) => {
  const window = useWindowDimensions();
  return (
    <Card style={styles.container} height={window.height}>
      <Card.Content style={styles.cardContainer}>
        <Title style={styles.cardTitle}>Awesome! You chose: John Wick!</Title>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            source={{ uri: "https://picsum.photos/700" }}
            resizeMode="contain"
          />
        </View>
        <Title style={styles.aboutTitleTxt}>About this movie</Title>
        <Paragraph style={styles.pTxt}>
          Lorem ipsum dolor sit amet consectetur. Volutpat euismod varius
          consectetur blandit nisl enim. Congue nibh leo turpis viverra ut
          dolor.
        </Paragraph>
      </Card.Content>
      <HomeSettings navigation={navigation} />
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
  },
  cardContainer: {
    // marginHorizontal: "2%",
    marginBottom: "10%",
  },
  cardTitle: {
    textAlign: "center",
    // marginHorizontal: "3%",
    marginVertical: "9%",
    fontFamily: "Mali-Bold",
    fontSize: 29,
  },
  cardPic: {
    height: 350,
  },
  picContainer: {
    marginHorizontal: "12%",
  },
  aboutTitleTxt: {
    fontFamily: "Mali-Bold",
    paddingTop: "7%",
  },
  pTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 18,
    paddingVertical: "5%",
  },
});

export default ChosenCard;
