import styled from "@emotion/styled";

export const Button = styled.button`
  margin-right: 10px;
  width: 100px;
  padding: 5px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 10px;
  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => {
      switch (props.feedbackType) {
        case "good":
          return "green";
        case "bad":
          return "red";
        default:
          return "gray";
      }
    }};
  }
`;
