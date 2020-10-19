import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

export const StyledLoader = styled(LoadingOverlay)`
  width: 100%;
  height: 100vh;
  overflow: none;
  &.MyLoader_wrapper--active {
    overflow: hidden;
  }
`;
