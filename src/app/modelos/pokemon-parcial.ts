type Sprite = {
  front_default: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

type Stat = {
  base_stat: number;
  stat: {
    name: string;
  }
}

export interface PokemonParcial {
  id: number;
  name: string;
  order: number;
  sprites: Sprite
  stats: Array<Stat>;
}
