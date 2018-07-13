export interface ApplicationState {
    handleGifs: GifsState,
    handleFilter: FilterState
}

export interface FilterState {
    filter: string
}

export interface GifsState {
    isFetching: boolean,
    gifs: string[],
    lastUpdated?: number,
}