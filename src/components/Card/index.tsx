import React from "react";
import {
  TouchableOpacityProps,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { Container, CardPokemon, AvatarView, Tag } from "./styles";
import { PokemonResponse } from "../../services/types";
import theme from "../../styles/theme";

type PropsCard = {
  data: PokemonResponse;
} & TouchableOpacityProps;

export const Card: React.FC<PropsCard> = ({ data, ...rest }) => {
  return (
    <Container>
      <CardPokemon type={data?.types[0]?.type?.name} key={data.id} {...rest}>
        <View
          style={{
            backgroundColor: "#FFCB05",
            width: 55,
            height: 20,
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            position: "absolute",
            top: "0px",
          }}
        >
          <Text>{"#00" + data.id}</Text>
        </View>
        <AvatarView bg={data?.types[0]?.type?.name}>
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            }}
            style={{ width: 89, height: 89 }}
          />
        </AvatarView>
        <Text style={styles.titleCard}>{data.name}</Text>
        <View style={styles.wrapperRow}>
          {data.types.map((item) => (
            <Tag type={item.type.name} key={item.type.name}>
              <Text style={styles.titleTag}>{item.type.name}</Text>
            </Tag>
          ))}
        </View>
      </CardPokemon>
    </Container>
  );
};

const styles = StyleSheet.create({
  tituloPage: {
    color: theme.colors.AZUL_ESCURO,
    textAlign: "left",
  },
  wrapperRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleTag: {
    fontSize: 12,
    color: theme.colors.BRANCO,
    fontFamily: theme.fonts.regular,
  },
  titleCard: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.BRANCO,
    fontSize: 18,
  },
});
