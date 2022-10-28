import styled from "styled-components/native";
import theme from "../styles/theme";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: "#000";
  height: auto;
  align-items: center;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${theme.colors.AZUL_ESCURO};
  font-family: ${theme.fonts.bold};
`;
