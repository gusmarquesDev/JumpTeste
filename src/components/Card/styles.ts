import styled, { css } from "styled-components/native";
import theme from "../../styles/theme";

interface PokemonType {
  type: string;
}

export const Container = styled.View`
  flex: 1;
`;

interface CardProps {
  bg: string;
}

export const CardPokemon = styled.TouchableOpacity<PokemonType>`
  ${({ type }) => css`
    background: ${theme.backgroundCard[type]};
    opacity: 1;
    margin: 10px;
    width: 160px;
    height: auto;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
  `}
`;

export const AvatarView = styled.View<CardProps>`
  ${({ bg }) => css`
    background-color: ${theme.backgroundAvatarView[bg]};
    border-radius: 150px;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin-top:40px
    margin-bottom: 20px;
  `}
`;
export const Tag = styled.View<CardProps>`
  ${({ type }) => css`
    border-radius: 150px;
    background-color: ${theme.backgroundTag[type]};
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 50px;
    height: 25px;
  `}
`;
