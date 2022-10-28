import React from "react";
import styled, { css } from "styled-components/native";
import theme from "./theme";

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

export const AvatarView = styled.View<CardProps>`
  ${({ bg }) => css`
    background-color: ${theme.backgroundAvatarView[bg]};
    border-radius: 150px;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    /* margin-top:40px
    margin-bottom: 20px; */
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 0;
  background-color: ${theme.colors.AZUL_ESCURO};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  width: 100%;
  height: 80px;
`;

export const Tag = styled.View<CardProps>`
  ${({ type }) => css`
    border-radius: 150px;
    background-color: ${theme.backgroundTag[type]};
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    min-width: 80px;
    max-width: 170px;
    height: 25px;
  `}
`;
