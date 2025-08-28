interface PokemonFull {
  id: number;
  name: string;
  types: PokemonTypes[];
  stats: PokemonStats[];
  sprites: string[];
}
interface PokemonShort {
  name: string;
  url: string;
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
