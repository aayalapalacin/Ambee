import * as React from "react";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import HomeSettings from "../../components/homeSettings";
import { Linking } from "react-native";
const ChosenCard = ({ navigation, route }) => {
  const window = useWindowDimensions();
  const movie = route.params.movie;
  const netflixLink = route.params.movie.streamingInfo.netflix.us.link;

  return (
    <Card style={styles.container} height={window.height}>
      <Card.Content style={styles.cardContainer}>
        <Title style={styles.cardTitle}>
          {/* Awesome! You chose: */}
          Awesome! You chose: {movie.title}
        </Title>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            // source={require("../../assets/icons/Swipe.png")}
            source={{
              uri: `${
                movie?.posterURLs["original"] == undefined
                  ? "https://image.tmdb.org/t/p/original/j18021qCeRi3yUBtqd2UFj1c0RQ.jpg"
                  : movie?.posterURLs["original"]
              }`,
            }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.aboutTitleContainer}>
          <Title style={styles.aboutTitleTxt}>About this movie</Title>
          <View style={styles.watchContainer}>
            <Button
              style={styles.watchBtn}
              textColor="black"
              onPress={() => Linking.openURL(netflixLink)}
              // onPress={() => Linking.openURL(netflix)}
            >
              Watch Now
            </Button>
          </View>
        </View>
        <ScrollView style={styles.pContainer}>
          <Paragraph style={styles.pTxt}>{movie.overview}</Paragraph>
        </ScrollView>
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
  },
  aboutTitleContainer: {
    flexDirection: "row",
  },
  watchContainer: {
    marginLeft: "8%",
    marginTop: "5%",
  },
  watchBtn: {
    borderColor: "#6750A4",
    borderWidth: 4,
    justifyContent: "center",
    borderRadius: 13,
    backgroundColor: "#FF6033",
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
  pContainer: {
    marginTop: "3%",
    height: "50%",
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
