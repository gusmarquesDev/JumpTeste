import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { Container, Title } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { Header } from "react-native-elements";
import theme from "../styles/theme";
import {
  PokemonType,
  Request,
  Pokemon,
  PokemonResponse,
} from "../services/types";
import { apis, apis as services } from "../services/api";
import { Card } from "../components/Card";
import { useNavigation } from "@react-navigation/native";
import { SettingsOverscanOutlined } from "@mui/icons-material";

const Logo = require("../assets/images/Logo.svg.png");

export const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const [pokemons, setPokemons] = useState<PokemonResponse[] | any[]>([]);
  const [pokemonsSearch, setPokemonsSearch] = useState<
    PokemonResponse[] | any[]
  >([]);
  const [search, setSearch] = useState("");

  const handlePage = (id, types, name, stats, weight, height, move) => {
    navigate("DetailScreen", {
      id,
      types,
      name,
      stats,
      weight,
      height,
      move,
    });
  };

  const getPokemons = async () => {
    const response = await apis.getPokemons();

    const { results } = response.data;

    const payLoad = await Promise.all(
      results.map(async (item) => {
        const { id, types, sprites, stats, weight, height, moves } =
          await getMoreDetails(item.url);

        return {
          name: item.name,
          id,
          types,
          sprites,
          stats,
          weight,
          height,
          moves,
        };
      })
    );
    setPokemons(payLoad);
    setPokemonsSearch(payLoad);
  };

  const searching = (s) => {
    let arr = JSON.parse(JSON.stringify(pokemonsSearch));
    setPokemons(arr.filter((item) => item.name.includes(s)));
  };

  const getMoreDetails = async (url: string): Promise<Request> => {
    const response = await apis.get(url);
    const { id, types, sprites, stats, weight, height, moves } = response.data;
    return {
      id,
      types,
      sprites: sprites.front_default,
      stats,
      weight,
      height,
      moves: moves[0].move.name,
    };
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <Header
        placement="left"
        // leftComponent={
        //   <TouchableOpacity onPress={navigateBAck}>
        //     <ArrowBack sx={{ color: theme.colors.BRANCO, marginTop: 2 }} />
        //   </TouchableOpacity>
        // }
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
        <Title>More than 250 Pokemons for you to choose your favorite</Title>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.searchSection}>
                <SearchIcon sx={{ color: theme.colors.ROXO_OPACO }} />
                <TextInput
                  style={styles.input}
                  placeholder="Search Pokémon"
                  onChangeText={(e) => searching(e)}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />
              </View>
            </>
          }
          contentContainerStyle={{
            flexDirection: "row",
            margin: 20,
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
          numColumns={2}
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: pokemon }) => (
            <Card
              data={pokemon}
              onPress={() => {
                handlePage(
                  pokemon.id,
                  pokemon.types,
                  pokemon.name,
                  pokemon.stats,
                  pokemon.weight,
                  pokemon.height,
                  pokemon.moves
                );
              }}
            />
          )}
        />
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: `${theme.colors.ROXO_OPACO}`,
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 15,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderColor: `${theme.colors.ROXO_OPACO}`,
    borderLeftColor: "transparent",
    borderWidth: 1,
    paddingLeft: 0,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    color: "#424242",
  },
});
