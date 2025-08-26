interface Pokemon {
  id: number;
  name: string;
  types: PokemonTypes[];
  stats: PokemonStats[];
  sprites: string[];
}

interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface PokemonTypes {
  type: {
    name: string;
    url: string;
  };
}
