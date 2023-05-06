type estructuraPokemon = {
  name: string;
  url: string;
}
export interface InfoPokemon {
  count: number;
  next?: string;
  previous?: string;
  results: Array<estructuraPokemon>;
}
