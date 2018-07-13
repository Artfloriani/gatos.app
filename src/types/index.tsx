export interface IStoreState {
    languageName: string;
    enthusiasmLevel: number;
}

export interface FilterState {
    filter: string
}

export interface GifsState {
    isFetching: boolean,
    gifs: string[]
}