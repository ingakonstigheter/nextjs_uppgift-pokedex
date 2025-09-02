export interface PokemonFull {
  id: number;
  name: string;
  types: PokemonTypes[];
  stats: PokemonStats[];
  sprites: string[];
}
export interface PokemonShort {
  name: string;
  url: string;
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonTypes {
  type: {
    name: string;
    url: string;
  };
}
  export interface PokemonTypesShort {
    pokemon: {
      name: string;
      url: string;
    }
  }
