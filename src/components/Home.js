import React, { Component } from "react";
import Master from "./layouts/Master";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button
} from "native-base";
import { Text } from "react-native";
import Axios from "axios";
import config from "../config";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  async componentDidMount() {
    let messages = await Axios.get(config.server.api + "/messages");
    this.setState({ messages: messages.data });
  }

  render() {
    return (
      <Master>
        <List>
          {this.state.messages.map(item => (
            <ListItem thumbnail key={item._id}>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      "data:image/png;base64,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"
                  }}
                />
              </Left>
              <Body>
                <Text>Name</Text>
                <Text note numberOfLines={1}>
                  {item.message}
                </Text>
                <Text note>
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          ))}
        </List>
      </Master>
    );
  }
}

export default Home;