import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { AvatarView, Tag } from "../styles/globalStyles";
import {
  Container,
  Card,
  HeaderCard,
  TitleCard,
  BodyCard,
  LabelTag,
  ContentBar,
  ProgressBar,
  TitleProgressBar,
  WrapperProgressBar,
  ContentProgress,
} from "./styles";
const Logo = require("../assets/images/Logo.svg.png");
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Header } from "react-native-elements";

import { useRoute, useNavigation } from "@react-navigation/native";
import theme from "../styles/theme";
import { apis, apis as services } from "../services/api";

type RouteParams = {
  id: number;
  name: string;
  types: any;
  abilities: any;
  stats: any;
  weight: string;
  height: string;
  move: string;
};

export const DetailScreen: React.FC = () => {
  const route = useRoute();

  const { goBack } = useNavigation();

  const { id, types, name, abilities, stats, weight, height, move } =
    route.params as RouteParams;

  const navigateBAck = () => {
    goBack();
  };

  return (
    <>
      <Header
        placement="left"
        leftComponent={
          <TouchableOpacity onPress={navigateBAck}>
            <ArrowBack sx={{ color: theme.colors.BRANCO, marginTop: 2 }} />
          </TouchableOpacity>
        }
        centerComponent={
          <Image
            source={Logo}
            style={{ width: 150, height: 50, alignSelf: "center" }}
          />
        }
        containerStyle={{
          backgroundColor: `${theme.colors.AZUL_ESCURO}`,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <Container>
        <Card>
          <HeaderCard bg={types[0]?.type?.name}>
            <AvatarView bg={types[0]?.type?.name}>
              <Image
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                }}
                style={{ width: 89, height: 89 }}
              />
            </AvatarView>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignContent: "flex-start",
              }}
            >
              <Tag type={"tagID"} key={-1}>
                <Text>{"#00" + id}</Text>
              </Tag>
              <TitleCard>{name}</TitleCard>
              <View style={styles.wrapperRow}>
                {types.map((item) => (
                  <Tag type={item.type.name} key={-1}>
                    <Text style={styles.titleTag}>{item.type.name}</Text>
                  </Tag>
                ))}
              </View>
            </View>
          </HeaderCard>
          <BodyCard>
            <View style={styles.wrapperRow}>
              <View>
                <LabelTag>Weight:</LabelTag>
                <Tag type={types[0]?.type?.name} style={styles.titleTag}>
                  {weight + "kg"}
                </Tag>
              </View>
              <View>
                <LabelTag>height:</LabelTag>
                <Tag type={types[0]?.type?.name} style={styles.titleTag}>
                  {height + "m"}
                </Tag>
              </View>
              <View>
                <LabelTag>Major Move:</LabelTag>
                <Tag type={types[0]?.type?.name} style={styles.titleTag}>
                  {move}
                </Tag>
              </View>
            </View>
            <ContentProgress>
              {stats.map((item) => (
                <WrapperProgressBar>
                  <TitleProgressBar>{item.stat.name}</TitleProgressBar>
                  <ContentBar>
                    <ProgressBar
                      type={types[0]?.type?.name}
                      borderWidth={0}
                      progress={100}
                      width={item.base_stat}
                      color={theme.backgroundProgress[item.stat.name]}
                    />
                  </ContentBar>
                </WrapperProgressBar>
              ))}
            </ContentProgress>
          </BodyCard>
        </Card>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  titleTag: {
    fontSize: 12,
    color: theme.colors.BRANCO,
    fontFamily: theme.fonts.bold,
  },
  wrapperRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  labelTag: {},
});
