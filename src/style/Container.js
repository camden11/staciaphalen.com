import styled from "styled-components";
import MediaQueries from "./MediaQueries";

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: 20px;
  padding-bottom: env(safe-area-inset-bottom);
  ${MediaQueries.medium} {
    width: 88%;
    @supports (padding-left: constant(safe-area-inset-left)) {
      --safe-area-inset-left: constant(safe-area-inset-left);
      --safe-area-inset-right: constant(safe-area-inset-right);
      width: calc(
        88% - var(--safe-area-inset-left) - var(safe-area-inset-right)
      );
    }
    @supports (padding-left: env(safe-area-inset-left)) {
      --safe-area-inset-left: env(safe-area-inset-left);
      --safe-area-inset-right: env(safe-area-inset-right);
      width: calc(
        88% - var(--safe-area-inset-left) - var(safe-area-inset-right)
      );
    }
  }
`;

export default Container;
