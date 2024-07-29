import React, { Component } from "react";
import { PlayerWrapper, StyledPlayer } from "./Player.styled";

class Player extends Component {
  render() {
    const { url } = this.props;

    return (
      <div>
        {url && (
          <PlayerWrapper>
            <StyledPlayer url={url} controls />
          </PlayerWrapper>
        )}
      </div>
    );
  }
}

export default Player;
