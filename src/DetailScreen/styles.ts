import styled, { css } from "styled-components/native";
import * as Progress from "react-native-progress";
import theme from "../styles/theme";

type TypeProps = {
  type:
    | "grass"
    | "fire"
    | "water"
    | "poison"
    | "normal"
    | "bug"
    | "flying"
    | "eletric"
    | "ground";
};

interface CardProps {
  bg: string;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${theme.colors.BRANCO};
  height: auto;
  align-items: center;
  padding: 15px;
`;

export const Card = styled.View`
  width: 100%;
  background-color: ${theme.colors.CINZA_FRACO};
  border-radius: 15px;
  flex: 2;
  flex-direction: column;
`;

export const HeaderCard = styled.View<CardProps>`
  ${({ bg }) => css`
    background-color: ${theme.backgroundCard[bg]};
    width: 100%;
    height: 120px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
  `}
`;

export const BodyCard = styled.View`
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`;
export const TitleCard = styled.Text`
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.BRANCO};
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LabelTag = styled.Text`
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.ROXO_OPACO};
  font-size: 10px;
  text-align: center;
  margin-right: 10;
  margin-bottom: 5;
  margin-top: 5;
`;

export const ContentBar = styled.View`
  margin-left: 20px;
`;
export const ProgressBar = styled(Progress.Bar).attrs({})<TypeProps>`
  /* ${({ type }) => css`
    background-color: ${theme.backgroundCard[type]};
    width: 100px;
  `} */
`;

export const WrapperProgressBar = styled.View`
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
  margin-top: 10px;
`;

export const TitleProgressBar = styled.Text`
  text-align: left;
  color: ${theme.colors.ROXO_OPACO};
  font-size: 12px;
  font-family: ${theme.fonts.medium};
`;
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 70px;
  left: 40px;
`;
export const ContentProgress = styled.View`
  margin-top: 20px;
`;
