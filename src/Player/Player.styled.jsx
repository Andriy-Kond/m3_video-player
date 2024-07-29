import styled from "styled-components";
import ReactPlayer from "react-player";

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

export { PlayerWrapper, StyledPlayer };
