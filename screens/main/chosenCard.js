import * as React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import HomeSettings from "../../components/homeSettings";

const ChosenCard = ({ navigation, route }) => {
  const window = useWindowDimensions();
  const movie = route.params.movie;
  console.log(route.params.movie.streamingInfo.netflix.us.link, "netflix link");
  return (
    <Card style={styles.container} height={window.height}>
      <Card.Content style={styles.cardContainer}>
        <Title style={styles.cardTitle}>
          Awesome! You chose: {movie.title}
        </Title>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            source={{ uri: `${movie.posterURLs.original}` }}
            resizeMode="contain"
          />
        </View>
        <Title style={styles.aboutTitleTxt}>About this movie</Title>
        <Paragraph style={styles.pTxt}>{movie.overview}</Paragraph>
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
    height: "85%",
    // backgroundColor: "red",
  },
  cardTitle: {
    textAlign: "center",
    marginVertical: "8%",
    fontFamily: "Mali-Bold",
    fontSize: 29,
  },
  cardPic: {
    height: "100%",
  },
  picContainer: {
    height: "48%",
    marginHorizontal: "12%",
  },
  aboutTitleTxt: {
    fontFamily: "Mali-Bold",
    paddingTop: "7%",
  },
  pTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 18,
    paddingTop: "5%",
  },
  homeSettingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "5%",
  },
  homeSettingBox: {
    alignItems: "center",
  },
  homeSettingsTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 16,
  },
  homeContainer: {
    alignItems: "center",
    // justifyContent: "space-around",
    marginRight: "9%",
  },
  undo: {
    // marginLeft: 13,
  },
});

export default ChosenCard;
