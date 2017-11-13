// @flow
import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo";
import * as Animatable from "react-native-animatable";
import colors from "../../config/colors";
import Container from "./styled/InfoCardContainer";
import InfoCardDescription from "./styled/InfoCardDescription";
import CoverImage from "./styled/InfoCardCoverImage";
import CardTitle from "./styled/InfoCardTitle";
import InfoCardButtonContainer from "./styled/InfoCardButtonContainer";
import OverflowButton from "./InfoCardOverflowButton";
import PopupMenu from "./InfoCardPopupMenu";

type Props = {
  navigation: {
    navigate: string => void,
  },
  title: string,
  description: string,
};

type State = {
  menuOpen: boolean,
};

export default class InfoCard extends Component<Props, State> {
  state = {
    menuOpen: false,
  };

  render() {
    return (
      <TouchableOpacity
        activeOpacity={this.state.menuOpen ? 1 : 0.9}
        onPress={
          this.state.menuOpen
            ? () => {
                this.refs.InfoCardButton.slideOutRight(80).then(() => {
                  this.setState(prevState => ({
                    ...prevState,
                    menuOpen: false,
                  }));

                  this.refs.InfoCardButton.slideInDown(150);
                });
              }
            : () => this.props.navigation.navigate("Info")
        }
      >
        <Container>
          <View>
            <CoverImage
              source={require("../../assets/images/saitama-secret-training.png")}
              resizeMode="cover"
            />
            <LinearGradient
              colors={["rgba(0,0,0,0)", colors.spotiBlack]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: 148,
              }}
            />
            <InfoCardButtonContainer
              activeOpacity={this.state.menuOpen ? 1 : 0.8}
              disabled={this.state.menuOpen}
              onPress={() =>
                this.refs.InfoCardButton.slideOutUp(150).then(() => {
                  this.setState(prevState => ({
                    ...prevState,
                    menuOpen: true,
                  }));

                  this.refs.InfoCardButton.slideInRight(150);
                })}
            >
              <Animatable.View ref="InfoCardButton" easing="ease-out">
                {this.state.menuOpen ? (
                  <PopupMenu
                    actions={[
                      {
                        title: "archive card",
                        onPress: () => console.log("deleting this infocard"),
                      },
                    ]}
                  />
                ) : (
                  <OverflowButton />
                )}
              </Animatable.View>
            </InfoCardButtonContainer>
            <CardTitle>{this.props.title}</CardTitle>
          </View>
          <InfoCardDescription>{this.props.description}</InfoCardDescription>
        </Container>
      </TouchableOpacity>
    );
  }
}
