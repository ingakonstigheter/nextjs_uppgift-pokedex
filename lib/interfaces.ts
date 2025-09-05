export interface PokemonFull {
  id: number;
  name: string;
  types: PokemonTypes[];
  stats: PokemonStats[];
  sprites: {
    front_shiny: string;
  };
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

export interface PokemonTypesFull {
  pokemon: {
    name: string;
    url: string;
  };
}

export interface PagnationProps {
  cn?: string;
  href: string;
  prompt: string;
  display: boolean;
}

export interface StatusInfo {
  base_stat: number;
  stat: {
    name: string;
  };
}
export interface PokemonTypesShort {
  name: string;
  url: string;
}
