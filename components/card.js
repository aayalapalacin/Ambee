import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MyCard = ({ navigation }) => (
  <Card>
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={LeftContent}
    />
    <Card.Content>
      <Title>Card title</Title>
      <FontAwesome5 name="basketball-ball" size={24} color="orange" />
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Actions>
      <Button onPress={() => navigation.navigate("MyButton")}>
        Go to Button
      </Button>
      <Button onPress={() => navigation.navigate("Home")}>Go to Home</Button>
    </Card.Actions>
  </Card>
);

export default MyCard;
