import React, { useState } from "react";
import { StyleSheet, View, useWindowDimensions, Text } from "react-native";
import { Button, Card, Dialog, Portal, Paragraph } from "react-native-paper";
import HomeSettings from "../../components/homeSettings";
import CountDown from "react-native-countdown-component";
import CardList from "./CardList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { movieService } from "../../src/services/movies/movies.service";

const YesNoCard = ({ navigation }) => {
  const window = useWindowDimensions();
  const [reset, setReset] = useState("h");
  const [username, setUsername] = useState("");
  const [userGenre, setUserGenre] = useState("");
  const [userNum, setUserNum] = useState("");
  const [userTime, setUserTimer] = useState(30);
  const [visible, setVisible] = useState(true);

  const hideDialog = () => setVisible(false);

  React.useCallback(() => {
    const getData = async () => {
      try {
        const usernameValue = await AsyncStorage.getItem("@username");
        const userTimerValue = AsyncStorage.getItem("@timerCount");
        const userGenreValue = await AsyncStorage.getItem("@userGenres");
        const userNumValue = await AsyncStorage.getItem("@userNum");

        if (usernameValue !== null) {
          setUsername(usernameValue);
          setUserGenre(JSON.parse(userGenreValue));
          setUserNum(parseInt(userNumValue));
          setUserTimer(parseInt(userTimerValue));
        }
      } catch (e) {
        console.log(e);
      }
    };
    setUserTimer(0);
    setVisible(true);

    getData();
    return () => console.log("focues returnnnn");
  }, []);

  return (
    <Card style={styles.container} height={window.height}>
      <View>
        <Portal>
          <Dialog
            visible={visible}
            onDismiss={hideDialog}
            style={styles.dialogParent}
          >
            <Dialog.Content style={styles.dialogContent}>
              <Paragraph style={styles.dialogP}>Click OK when ready!</Paragraph>
              {/* <Dialog.Actions> */}
              <View style={styles.dialogBtnContainer}>
                <Button
                  style={styles.dialogBtn}
                  onPress={() => {
                    console.log("Ok");
                    setReset(Math.random().toString());
                    hideDialog();
                  }}
                >
                  Ok
                </Button>
              </View>
              {/* </Dialog.Actions> */}
            </Dialog.Content>
          </Dialog>
        </Portal>
      </View>
      <Card.Content style={styles.cardContainer}>
        <View style={styles.cardTopIcons}>
          {/* <View>
            <TouchableOpacity
              onPress={() => {
                setReset(Math.random().toString());
              }}
            >
              <Ionicons name="arrow-undo-outline" size={33} color="#8570D8" />
            </TouchableOpacity>
          </View> */}
          <CountDown
            id={reset}
            size={17}
            until={userTime}
            // onFinish={() => {
            //   // alert("Choose your damn card!");
            //   // setReset(Math.random());
            //   // console.log(reset);
            // }}
            digitStyle={{
              backgroundColor: "#8570D8",
              width: 46,
              height: 35,
              borderRadius: 30,
            }}
            digitTxtStyle={{ color: "white" }}
            timeLabelStyle={{ color: "green", fontWeight: "bold" }}
            separatorStyle={{ color: "#8570D8" }}
            timeToShow={["S"]}
            timeLabels={{ s: null }}
            showSeparator
          />
        </View>
        <View style={styles.picContainer}>
          <CardList navigation={navigation} />
        </View>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  dialogParent: {
    marginHorizontal: "12%",
    backgroundColor: "#8570D8",
    opacity: 0.75,
  },
  dialogContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  dialogP: {
    fontFamily: "Mali-Bold",
  },
  dialogBtnContainer: {
    backgroundColor: "#FF6033",
    borderRadius: 50,
  },
  dialogBtn: {
    fontFamily: "Mali-Bold",
  },

  container: {
    borderRadius: 0,
  },
  cardContainer: {
    marginTop: "15%",
    height: "78%",

    // marginHorizontal: 10,
  },

  cardTopIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "24%",
  },
  // cardPic: {
  //   height: 325,
  // },
  swipeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "18%",
  },
  yesNoIcon: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    // marginBottom: "5%",
  },
  picContainer: {
    height: "65%",
  },
  leftIconTxt: {
    marginEnd: "12%",
    fontSize: 28,
    paddingStart: "2%",
  },
  rightIconText: {
    fontSize: 28,
    paddingEnd: "1.5%",
  },

  swipeIcons: {
    width: 33,
    height: 33,
    // marginTop: 3,
    tintColor: "#8570D8",
  },
});

export default YesNoCard;
