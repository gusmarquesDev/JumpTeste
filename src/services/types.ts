export interface PokemonData {
  count: number;
  next: string;
  previous: null;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

export interface PokemonType {
  type: string;
}

export interface PokemonStats {
  name: string;
  url: string;
}

export interface PokemonAbilities {
  name: string;
  url: string;
}

export interface PokemonMovie {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  url: string;
  avatar: Sprites[];
  types: PokemonType[];
  stats: PokemonStats[];
  weight: string;
  height: string;
  moves: PokemonMovie[];
}

export interface Request {
  id: number;
  types: PokemonType[];
  sprites: string;
  stats: PokemonStats[];
  weight: string;
  height: string;
  moves: PokemonMovie[];
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
}

export interface Abilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: string;
  slot: number;
}

export interface Moves {
  moves: PokemonMovie;
}

export interface Sprites {
  avatar: string;
}

export interface PokemonResponse {
  name: string;
  id: number;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  // sprites: string;
}
